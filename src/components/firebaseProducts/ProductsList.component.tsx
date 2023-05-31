import { useEffect, useState } from "react";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import { database } from "../../firebase/firebaseConfig";
import "../../styles/product.component.css";
import { Link } from "react-router-dom";

interface Product {
  data: DocumentData;
  id: string;
}

export default function ListProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const productCollectionRef = collection(database, "Products");
    getDocs(productCollectionRef)
      .then((response) => {
        const prods = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setProducts(prods);
      })
      .catch((error) => console.log(error.error));
  };
  return (
      <>
        {products.map((product) => (
          <div className="col product" key={product.id}>
            <div className="card" style={{ width: "18rem" }}>
              <div className="d-block">
                <Link to={`/show-full-product/${product.data.images.id}`}>
                  <img
                    className="product-img"
                    src={product.data.images.path}
                    alt={product.data.images.name}
                    key={product.data.images.id}
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </>
  );
}