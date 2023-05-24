import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import { ProductListRenderer } from "../../components/Products/productListRenderer.component";

export default function Store() {
  return (
    <>
      <Header/>
      <ProductListRenderer/>
      <Footer/>
    </>
  )
}