import React, { useEffect, useState } from 'react';
import { productService } from '../../services/product.service';
import ProductCompononent from './Product.component';
import "../../styles/product.component.css";


const ProductListComponent: React.FC = () => {
  const [product, setProduct] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await productService.getAll();
        setProduct(products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="d-flex flex-wrap p-10 card-size">
        {product.map((product) => (
              <ProductCompononent product={product} printDetails={false} key={product.id}/>
          ))}
      </div>
    </>
  );
};

export default ProductListComponent;