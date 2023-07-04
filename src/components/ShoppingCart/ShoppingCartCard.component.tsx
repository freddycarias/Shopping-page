import { Product } from "../../models/product";
import CheckBoxComponent from "../CheckBox.component";

type productProps = {
  product: Product;
  handleClickDelete: any;
  handleInputChange: any;
};

export default function ShoppingCartCardComponent({
  product,
  handleInputChange,
  handleClickDelete,
}: productProps) {
  return (
    <div key={product.id}>
      <div className="mb-3 w-100">
        <div className="row g-0">
          <div className="col">
            <img
              src={product.images.path}
              className="img-fluid"
              alt={product.images.name}
            />
          </div>
          <div className="col-md-5">
            <div className="card-body">
              <h5 className="card-title text-center">{product.name}</h5>
              <ul>
                <li>
                  <span>{product.stocked}</span>
                </li>
                <li>
                  <span>Eligible for FREE Shipping & FREE Returns</span>
                </li>
                <li>
                  <span>
                    <CheckBoxComponent
                      id="shopping-cart"
                      title="This is a giftThis is a gift Learn more"
                    />
                  </span>
                </li>
                <li>
                  <p>Qty</p>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="1"
                    required
                    defaultValue={1}
                    style={{ width: "70px" }}
                    onChange={(e) =>
                      handleInputChange(product.id, e.target.value)
                    }
                  />
                </li>
              </ul>
              <div className="text-center">
                <button
                  className="btn btn-danger"
                  onClick={() => handleClickDelete(product.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-body text-end">
              <h5 className="card-title">${product.price}</h5>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
