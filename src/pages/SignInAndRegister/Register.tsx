import "../../styles/Register.css";

export default function Register() {
  return (
    <>
      <div className="company-logo-in-register">
        <a className="navbar-brand" href="/">
          <img className="company-logo-img" />
        </a>
      </div>
      <div className="container text-center border-register">
        <form className="row g-3 needs-validation was-validated register-form">
          <div className="col-md-4 position-relative">
            <label htmlFor="validationTooltip01" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationTooltip01"
              required
            />
            <div className="invalid-feedback">please provide a name!</div>
          </div>
          <div className="col-md-4 position-relative">
            <label htmlFor="validationTooltip02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationTooltip02"
              required
            />
            <div className="invalid-feedback">please provide a last name</div>
          </div>
          <div className="col-md-4 position-relative">
            <label htmlFor="validationTooltipUsername" className="form-label">
              Username
            </label>
            <div className="input-group has-validation">
              <span
                className="input-group-text"
                id="validationTooltipUsernamePrepend"
              >
                @
              </span>
              <input
                type="text"
                className="form-control"
                id="validationTooltipUsername"
                aria-describedby="validationTooltipUsernamePrepend"
                required={true}
              />
              <div className="invalid-feedback">
                Please choose a unique and valid username.
              </div>
            </div>
          </div>
          <div className="col-md-6 position-relative register-email">
            <label htmlFor="validationTooltip03" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="validationTooltip03"
              required
            />
            <div className="invalid-feedback">
              Please provide a valid email.
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
