import { useEffect, useState } from "react";
import { productService } from "../../services/product.service";
import { Product } from "../../models/product";
import ProductCompononent from "./Product.component";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import "../../styles/ProductListByCategory.css";

export default function ProductListByCategory() {
  const [category, setCategory] = useState("Books");
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryProducts = await productService.getByCategory(category);

        setProducts(categoryProducts);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [category]);

  const handleCategoryChange = (newCatergory: string) => {
    setCategory(newCatergory);
  };
  return (
    <>
      <Header />
      <>
        <div className="categories-buttons">
          {categoryType.map((categoryName) => (
            <button
              className="btn btn-secondary catergory-button"
              key={categoryName.name}
              onClick={() => handleCategoryChange(categoryName.name)}
            >
              {categoryName.name}
            </button>
          ))}
        </div>

        <h2 className="category-title">Products in category: {category}</h2>

        {isLoading ? (
          <div className="loading">
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <div className="d-flex flex-wrap p-10 card-size">
            {products.map((product) => (
              <ProductCompononent
                product={product}
                printDetails={false}
                key={product.id}
              />
            ))}
          </div>
        )}
      </>
      <Footer />
    </>
  );
}

const categoryType = [
  { name: "Books" },
  { name: "Computers" },
  { name: "Electronics" },
  { name: "Video Games" },
];
