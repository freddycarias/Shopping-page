import ProductComponent from "./product.component";
import PRODUCTLIST from "../ProductList/ProductList";

export const ProductListRenderer = () => {
  const renderFn = () => {
    return (
      <>
        {PRODUCTLIST.map((product) => (
          <ProductComponent key={product.id} product={product} />
        ))}
      </>
    );
  };
  return renderFn();
};
