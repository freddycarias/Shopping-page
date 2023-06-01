import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, collection } from "firebase/firestore";
import { database } from "../../services/firebase";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import "../../styles/ShowFullProduct.css";

interface Product {
  id: number;
  color: string;
  description: string;
  images: {
    id: string;
    path: string;
    name: string;
  };
  name: string;
  price: number;
  stocked: boolean;
}

export default function ShowFullProduct() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  const getProduct = useCallback(async () => {
    try {
      const productDocRef = doc(collection(database, "Products"), id);
      const productDocSnap = await getDoc(productDocRef);

      if (productDocSnap.exists()) {
        const productData = productDocSnap.data() as Product;
        setProduct(productData);
      }
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <>
      <Header />
      {product && (
        <div key={product.id} className="render-product">
          <div className="container text-center">
            <h4 className="product-name">{product.name}</h4>
            <div className="row align-items-center">

              <div className="col-md-3 col-in-left">
                <img
                  className="product-img"
                  src={product.images.path}
                  alt={product.images.name}
                  key={product.images.id}
                />
              </div>

              <div className="col-md-5 col-in-middle">
                <div className="product-price">
                  <h6>
                    {product.stocked
                      ? `${product.price}`
                      : "Currently unavailable"}
                  </h6>
                </div>

                <div className="product-color">
                  <div className="color-title">Color:</div>
                  <h6 className="color-text">{product.color}</h6>
                </div>

                <div className="product-description">
                  <h6>About this item</h6>
                  <div>{product.description}</div>
                </div>
              </div>

              <div className="col col-in-right">
                <div className="price">
                  <div>Buy new:</div>
                  <h6>{product.price}</h6>
                </div>

                <div className="buttons">
                  <div className="add-to cart">
                    <button className="btn btn-add-to-cart">Add to Cart</button>
                  </div>
                  <div className="add-to buy-now">
                    <button className="btn btn-warning">Buy Now</button>
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
                      <li>Eligible for Return, Refund or Replacement within 30 days of receipt</li>
                      <li>Free Amazon product support included</li>
                      <li>Shows what's inside</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
