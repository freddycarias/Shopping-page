import React, { useEffect, useState } from 'react';
import { database } from '../services/firebase';
import StoreService from '../services/StoreService';
import { FirebaseApp} from 'firebase/app';
import { Link } from "react-router-dom";
import "../styles/product.component.css";

const app: FirebaseApp = database.app;
const Product: React.FC = () => {
  const [product, setProduct] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storeService = new StoreService(app);
        const product = await storeService.getData();
        setProduct(product);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
       {product.map((product) => (
          <div className="col product" key={product.images.id}>
            <div className="card" style={{ width: "18rem" }} >
              <div className="d-block">
                <Link to={`/show-full-product/${product.images.id}`}>
                  <img
                    className="product-img"
                    src={product.images.path}
                    alt={product.images.name}
                    key={product.images.id}
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </>
  );
};

export default Product;


// import { useEffect, useState } from "react";
// import { collection, getDocs, DocumentData } from "firebase/firestore";
// import { database } from "../../firebase/firebaseConfig";
// import "../../styles/product.component.css";
// import { Link } from "react-router-dom";

// interface Product {
//   data: DocumentData;
//   id: string;
// }

// export default function ListProducts() {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     getProducts();
//   }, []);

//   const getProducts = () => {
//     const productCollectionRef = collection(database, "Products");
//     getDocs(productCollectionRef)
//       .then((response) => {
//         const prods = response.docs.map((doc) => ({
//           data: doc.data(),
//           id: doc.id,
//         }));
//         setProducts(prods);
//       })
//       .catch((error) => console.log(error.error));
//   };
//   return (
//       <>
//         {products.map((product) => (
//           <div className="col product" key={product.id}>
//             <div className="card" style={{ width: "18rem" }}>
//               <div className="d-block">
//                 <Link to={`/show-full-product/${product.data.images.id}`}>
//                   <img
//                     className="product-img"
//                     src={product.data.images.path}
//                     alt={product.data.images.name}
//                     key={product.data.images.id}
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </>
//   );
// }