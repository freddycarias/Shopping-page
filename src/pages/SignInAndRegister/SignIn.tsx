import { useNavigate } from "react-router-dom";
import "../../styles/SignIn.css";

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <>
      <div className="company-logo-in-register">
        <a className="navbar-brand" href="/">
          <img className="company-logo-img" />
        </a>
      </div>
      <div className="container text-center border sign-in">
        <form className="sign-in-form" onSubmit={() => navigate("/")}>
          <div className="row mb-3">
            <label
              htmlFor="inputEmail3"
              className="col-sm-2 col-form-label email-label"
            >
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control email-input"
                id="inputEmail3"
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label
              htmlFor="inputPassword3"
              className="col-sm-2 col-form-label password-label"
            >
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control password-input"
                id="inputPassword3"
                required
              />
            </div>
          </div>
          <div className="row mb-3 accept accept-terms-conditions">
            <div className="col-sm-10 offset-sm-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
                required
              />
              <label
                className="form-check-label accept-terms-and-conditions-label"
                htmlFor="gridCheck1"
              >
                I accept terms and condition
              </label>
            </div>
          </div>
          <div className="sign-in-button">
            <button type="submit" className="btn btn-warning">
              Sign in
            </button>
          </div>
        </form>
        <div className="register-button">
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/register")}
          >
            Create Your account in Online shop
          </button>
        </div>
      </div>
    </>
  );
}
