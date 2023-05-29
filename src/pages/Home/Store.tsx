import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import ListProducts from "../../components/firebaseProducts/ProductsList.component";

export default function Store() {
  return (
    <>
      <Header />
      <ListProducts />
      <Footer />
    </>
  );
}
