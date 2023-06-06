import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import ServiceComponent from "./Service.component";

export const CustomerServiceComponent = () => {
  return (
    <>
      <Header />
      <div
        className="row row-cols-1 row-cols-md-3 g-4"
        style={{ marginBottom: "75px" }}
      >
        {services.map((service) => (
          <ServiceComponent title={service.title} key={service.id} />
        ))}
      </div>
      <Footer />
    </>
  );
};

const services = [
  { id: 1, title: "A delivery, order or return" },
  { id: 2, title: "Online" },
  { id: 3, title: "Payment, charges or gift cards" },
  { id: 4, title: "Address, security & privacy" },
  { id: 5, title: "Memberships, subscriptions or communications" },
  { id: 6, title: "Kindle, Fire, Alexa or Other Amazon Devices" },
  { id: 7, title: "eBooks, Prime Videos or Music" },
  { id: 8, title: "Accessibility" },
  { id: 9, title: "Something else" },
  { id: 10, title: "Login & password" },
];