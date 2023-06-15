import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import AccountComponent from "../components/Account/Account.component";

export default function HomePage() {
  return (
    <>
      <div>
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <div className="container">
            <AccountComponent />
          </div>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </>
  );
}
