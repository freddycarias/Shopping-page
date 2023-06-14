import CheckBoxComponent from "../CheckBox.component";
import ShoppingCartCardComponent from "./ShoppingCartCard.component";

export default function ShoppingCartComponent() {
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
                <ShoppingCartCardComponent />
              </div>
              <div className="row">
                <div className="col text-end">
                  Subtotal (X item): <strong>X</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card w-100 mb-3">
            <div className="card-body">
              <p className="card-title">
                Subtotal (X item): <strong>X</strong>
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
    </div>
  );
}
