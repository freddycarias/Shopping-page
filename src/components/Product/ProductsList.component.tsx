import React, { useEffect, useState } from 'react';
import { productService } from '../../services/product.service';
import ProductComponent from './Product.component';
import "../../styles/product.component.css";


const ProductListComponent: React.FC = () => {
  const [product, setProduct] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await productService.getAll();
        setProduct(products);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    {isLoading ? (
        <div className="loading">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <div className="d-flex flex-wrap p-10 card-size">
          {product.map((product) => (
            <ProductComponent product={product} printDetails={false} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductListComponent;