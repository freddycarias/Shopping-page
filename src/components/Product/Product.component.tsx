import "../../styles/ProductDetail.component.css";
import { Product } from "../../models/product";
import { Link } from "react-router-dom";

type productProps = {
  product: Product,
  printDetails: boolean
}

export default function ProductCompononent({ product, printDetails }: productProps) {
  return (
    <>
      {product && (
        <div key={product.id} className="card text-center">
          <div className="card-header">
            <h5>{product.name}</h5>
          </div>
          {!printDetails && (
            <img
              key={product.images.id}
              src={product.images.path}
              className="card-img-top product-image"
              alt={product.images.name}
            ></img>
          )}
          <div className="card-body">
            <div className="text-center">
              <div className="row">
                <div className="col">
                  {printDetails && (
                    <img
                      key={product.images.id}
                      src={product.images.path}
                      className="card-img-top product-image"
                      alt={product.images.name}
                    ></img>
                  )}
                </div>

                {printDetails && (
                  <>
                    <div className="col">
                      <div className="product-price">
                        <h6>
                          {product.stocked
                            ? `${product.price}`
                            : "Currently unavailable"}
                        </h6>
                      </div>

                      <div className="product-color">
                        <div className="row">
                          <div className="col">Color:</div>
                        </div>
                        <div className="row">
                          <div className="col">{product.color}</div>
                        </div>
                      </div>

                      <div className="product-description">
                        <h6>About this item</h6>
                        <div>{product.description}</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="price">
                        <div>Buy new:</div>
                        <h6>{product.price}</h6>
                      </div>

                      <div className="buttons">
                        <div className="add-to cart">
                          <button className="btn btn-add-to-cart">
                            Add to Cart
                          </button>
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
                            <li>
                              Eligible for Return, Refund or Replacement within
                              30 days of receipt
                            </li>
                            <li>Free Amazon product support included</li>
                            <li>Shows what's inside</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="card-footer text-body-secondary">
            <Link to={`/show-full-product/${product.id}`}>View Details</Link>
          </div>
        </div>
      )}
    </>
  );
}
