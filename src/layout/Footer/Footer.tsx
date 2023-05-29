import ContactUs from "./ContactUs";
import "../../styles/ContactUs.css";
export default function Footer() {
  return (
    <footer className="nav-footer-vertical-column">
      <hr className="hr-footer" />
      <div className="container px-4 text-center">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3">
              <ContactUs />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <ul>
                <li>Customer Support:</li>
                <li>(XXX)-XXXX-XXXX</li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <ul>
                <li>Email:</li>
                <li>page@gmail.com</li>
                <li>Location:</li>
                <li>Xa Avenida XX-XXXX Zone XX</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
