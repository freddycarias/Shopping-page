import React, { useEffect, useState } from 'react';
import { productService } from '../../services/product.service';
import ProductComponent from './Product.component';
import "../../styles/product.component.css";
import { Product } from '../../models/product';


const ProductListComponent: React.FC = () => {
  const [product, setProduct] = useState<Product[]>([]);
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
        <div className="d-flex flex-wrap justify-content-center p-10 card-size">
          {product.map((product) => (
            <ProductComponent product={product} printDetails={false} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductListComponent;