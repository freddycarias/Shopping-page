import { useEffect, useState } from "react";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import { database } from "../../firebase/firebaseConfig";
import "../../styles/product.component.css";

interface Product {
  data: DocumentData;
  id: string;
}

export default function ListProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  const getProducts = () => {
    const productCollectionRef = collection(database, "Products");
    getDocs(productCollectionRef)
      .then((response) => {
        console.log(response);
        const prods = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setProducts(prods);
      })
      .catch((error) => console.log(error.error));
  };
  return (
    <div>
      <div>
        {products.map((product) => (
          <div className="col product" key={product.id}>
            <div className="card" style={{ width: "18rem" }}>
              <div className="d-block">
                <img
                  className="product-img"
                  src={product.data.images.path}
                  alt={product.data.images.name}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.data.name}</h5>
                <p className="card-text">{product.data.description}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{product.data.color}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}