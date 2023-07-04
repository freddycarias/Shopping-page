import { useEffect, useState } from "react";
import CheckBoxComponent from "../CheckBox.component";
import ShoppingCartCardComponent from "./ShoppingCartCard.component";
import { shoppingCartService } from "../../services/shoppingcart.service";
import toast, { Toaster } from "react-hot-toast";
import { Product } from "../../models/product";

export default function ShoppingCartComponent() {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const unsubscribe = shoppingCartService.getAllProducts((data: any) => {
     
      setProduct(data);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleClickDelete = async (idDocumento: string) => {
    try {
      await shoppingCartService.deleteDoc(idDocumento);
      setProduct((prevProduct) =>
        prevProduct.filter((product) => product.id !== idDocumento)
      );
      toast.success("Successfully deleted");
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  const handleInputChange = (id: any, value: any) => {
    const qty = parseInt(value, 10);
    if (qty <= 0) {
      handleClickDelete(id);
    }
  };

  const calculateTotalPrice = (): number => {
    return product.reduce((total, item) => total + item.price, 0);
  };

  const calculateTotalItems = (): number => {
    return product.reduce((total, item) => total + item.quantity, 0);
  };


  return (
    <div className="container" style={{ marginBottom: "230px" }}>
      <div className="row">
        <div className="col-8">
          <div className="card w-100 mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <h3 className="card-title">Shopping Cart</h3>
                </div>
              </div>
              <hr />
              <div className="row">
                {product.map((product) => (
                  <ShoppingCartCardComponent product={product}  handleClickDelete={handleClickDelete} handleInputChange={handleInputChange}  key={product.id}/>
                ))}
              </div>
              <div className="row">
                <div className="col text-end">
                Subtotal (<strong>{calculateTotalItems()}</strong> items): 
                <strong>${calculateTotalPrice()}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card w-100 mb-3">
            <div className="card-body">
              <p className="card-title">
                Subtotal ({calculateTotalItems()} item): 
                <strong>${calculateTotalPrice()}</strong>
              </p>
              <div className="card-text">
                <div className="shopping-cart-checkbox">
                  <CheckBoxComponent id="gift" title="This order contains a gift"/>
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-warning  w-75">
                  proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span>
        The price and availability of items at Amazon.com are subject to change.
        The Cart is a temporary place to store a list of your items and reflects
        each item's most recent price. Shopping CartLearn more Do you have a
        gift card or promotional code? We'll ask you to enter your claim code
        when it's time to pay.
      </span>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
