import { Product } from "../../models/product";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../styles/ProductDetail.component.css";
import { shoppingCartService } from "../../services/shoppingcart.service";
import toast, { Toaster } from "react-hot-toast";

type productProps = {
  product: Product;
  printDetails: boolean;
};

export default function ProductCompononent({
  product,
  printDetails,
}: productProps) {
  const navigate = useNavigate();
  
  const handleTransferClick = async () => {
    try {
      await shoppingCartService.transferDocument(product);
      toast.success("Successfully Added to Shopping Cart");
    } catch (error) {
      toast.error("Error adding it")
    }
  };
  return (
    <>
      {product && (
        <div>
          {!printDetails && (
            <div className="card text-center" style={{ marginLeft: "30px" , marginRight: "30px",marginBottom: "50px",width: "300px", height: "300px" }}>
              <div className="card-header">{product.name}</div>
              <div className="card-body">
                <img
                  src={product.images.path}
                  alt={product.images.name}
                  style={{ width: "300px", height: "200px" }}
                  className="img-fluid"
                />
              </div>
              <div className="card-footer text-body-secondary" style={{padding: "0px"}}>
                <Link to={`/show-full-product/${product.id}`}>
                  View Details
                </Link>
              </div>
            </div>
          )}
          {printDetails && (
            <div className="row" style={{marginBottom: "100px"}}>
              <h3 className="text-center">{product.name}</h3>
              <div className="col-3 text-center">
                <img
                  src={product.images.path}
                  alt={product.images.name}
                  style={{ width: "300px", height: "200px" }}
                  className="img-fluid"
                />
              </div>

              <div className="col-5">
                <div className="product-price">
                  <h6>
                    {product.stocked
                      ? `${product.price}`
                      : "Currently unavailable"}
                  </h6>
                </div>

                <div className="product-color">
                  <div className="row">
                    <div className="col">Color: {product.color}</div>
                  </div>
                </div>

                <div className="product-description">
                  <h6>About this item</h6>
                  <div>{product.description}</div>
                </div>
              </div>

              <div className="col-4">
                <div
                  className="buttons text-end"
                  style={{ marginRight: "10px" }}
                >
                  <div className="add-to cart">
                    <button className="btn btn-add-to-cart" onClick={handleTransferClick}>Add to Cart</button>
                  </div>
                  <div className="add-to buy-now">
                    <button className="btn btn-warning" onClick={() => navigate("/buy-form")}>Buy Now</button>
                  </div>
                </div>

                <div className="row justify-content-center information-list">
                  <div className="col-6 information-list-1">
                    <ul>
                      <li className="payment">Payment</li>
                      <li className="ships-from">Ships from</li>
                      <li className="sold-by">Sold by</li>
                      <li className="returns">Returns</li>
                      <li className="support">Support</li>
                      <li>Packaging</li>
                    </ul>
                  </div>
                  <div className="col-6 information-list-2">
                    <ul>
                      <li>Secure transaction</li>
                      <li>Online Shop</li>
                      <li>Online Shop</li>
                      <li>
                        Eligible for Return, Refund or Replacement within 30
                        days of receipt
                      </li>
                      <li>Free Shooping Online product support included</li>
                      <li>Shows what's inside</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
