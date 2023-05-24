import { Product } from "../../models/products.models";
import { Images } from "../../models/image.models";

export default function productComponent({product}:ProductProps ) {
  return (
    <>
      <div className="card" style={{width: "18rem"}}>
        {product.images.map((image: Images) => (
            <div className="d-block">
              <img src={image.path} alt={image.name} />
            </div>
          ))}
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">
            {product.description}
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{product.color}</li>
        </ul>
      </div>
    </>
  );
}


export type ProductProps = {
  product: Product;
};
