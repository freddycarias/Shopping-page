import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import { Product } from "../models/product.ts";
import { useNavigate } from 'react-router-dom';
import { productService } from "../services/product.service.ts";
import ProductCompononent from "../components/Product/Product.component.tsx";
import "../styles/ProductDetail.component.css";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading , setIsLoading] = useState(true)
  const navigate = useNavigate();

  if (id === undefined) {
    navigate("/");
  }
  
  const getProduct = useCallback(async () => {
    if (id === undefined) {
      return;
    }
    try {
      setProduct(await productService.getById(id));
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  }, [id]);

  useEffect(() => {
    getProduct();
  }, [getProduct, id]); // Include 'id' as a dependency of useEffect


  return (
    <>
      <Header />
      {isLoading ? (
        <div className="loading">
        <div className="loading-spinner"></div>
      </div>
      ): (
        <>
        {product && (
          <ProductCompononent product={product} printDetails={true} />
        )}
        </>
      )}
      <Footer />
    </>
  );
}
