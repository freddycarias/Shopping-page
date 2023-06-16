import Footer from "../../../layout/Footer/Footer";
import Header from "../../../layout/Header/Header";
import ImputFormControlComponent from "../../ImputFormControl.component";

export default function LoginAndSecurityComponent() {
  return (
    <>
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col text-center">
          <h4>Login And Security</h4>
          <div
            className="container w-50 mt-3"
            style={{ border: "1px solid black", height: "300px", marginBottom: "90px" }}
          >
            <div className="change-email-password">
              <ImputFormControlComponent title="New Email" />
              <ImputFormControlComponent title="New Password" />
            </div>
            <div className="change-email-password-button mt-5">
              <button className="btn btn-warning">Save</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </>
  );
}
