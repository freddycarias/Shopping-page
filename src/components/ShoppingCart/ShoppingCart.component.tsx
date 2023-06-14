export default function ShoppingCartComponent() {
  return (
    <div className="container" style={{marginBottom: "230px"}}>
      <div className="row">
        <div className="col-8">
          <div className="card w-100 mb-3">
            <div className="card-body">
              <h3 className="card-title">Shopping Cart</h3>
              <hr />
              <p className="card-text">Aqui van las card que seleccionemos</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card w-100 mb-3">
            <div className="card-body">
              <p className="card-title">
                Subtotal (X item): <strong>X</strong>
              </p>
              <p className="card-text">
                <div className="shopping-cart-checkbox">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="gift"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="gift"
                    >
                      This order contains a gift
                    </label>
                  </div>
                </div>
              </p>
              <div className="text-center">
                <button className="btn btn-warning  w-75">proceed to checkout</button>
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
