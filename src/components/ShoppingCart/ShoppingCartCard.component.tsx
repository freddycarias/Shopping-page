import CheckBoxComponent from "../CheckBox.component";

type ShoppingCartCardProps = {
  image?: string;
  name?: string;
  instock?: boolean;
  price?: number;
};

export default function ShoppingCartCardComponent({image,name,instock,price}: ShoppingCartCardProps) {
  return (
    <>
      <div className="mb-3 w-100">
        <div className="row g-0">
          <div className="col">
            <img
              src={image}
              className="img-fluid"
              alt={name}
            />
          </div>
          <div className="col-md-5">
            <div className="card-body">
              <h5 className="card-title text-center">{name}</h5>
              <ul>
                <li>
                  <span>{instock}</span>
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
              </ul>
              <div className="text-center">
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-body text-end">
              <h5 className="card-title">${price}</h5>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
