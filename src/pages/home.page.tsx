import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import ListProducts from "../components/Product/ProductsList.component";

export default function HomePage() {
  return (
    <>
      <div>
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <ListProducts />
        </div>
        <div className="row">
        <Footer />
        </div>
      </div>
    </>
  );
}
