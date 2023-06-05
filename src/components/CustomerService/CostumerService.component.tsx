import Footer from "../../layout/Footer/Footer"
import Header from "../../layout/Header/Header"
import ServiceComponent from "./Service.component";

export const CustomerServiceComponent = () => {
  return (
    <>
      <Header />
      <div className="row row-cols-1 row-cols-md-3 g-4" style={{marginBottom: "75px"}}>
        <ServiceComponent title={"A delivery, order or return"}/>
        <ServiceComponent title={"Online"}/>
        <ServiceComponent title={"Payment, charges or gift cards"}/>
        <ServiceComponent title={"Address, security & privacy"}/>
        <ServiceComponent title={"Memberships, subscriptions or communications"}/>
        <ServiceComponent title={"Kindle, Fire, Alexa or Other Amazon Devices"}/>
        <ServiceComponent title={"eBooks, Prime Videos or Music"}/>
        <ServiceComponent title={"Accessibility"}/>
        <ServiceComponent title={"Something else"}/>
        <ServiceComponent title={"Login & password"}/>
      </div>
      <Footer />
    </>
  );
}
