import AllDifferentProductTypes from "./AllDifferentProductTypes";
import { useNavigate } from "react-router-dom";
import "../../../styles/HeaderNavBelt.css";

export default function HeaderNavBelt() {
  const navigate = useNavigate();
  return (
    <div className="nav-belt">
      <nav className="navbar fixed-top">
        <div className="container-fluid header">
          <div className="nav-left">
            <a className="navbar-brand" href="/">
              <img className="company-logo" />
            </a>
          </div>
          <div className="nav-fill">
            <form>
              <div
                className="btn-toolbar mb-3"
                role="toolbar"
                aria-label="Toolbar with button groups"
              >
                <div className="input-group all-input-search">
                  <div className="btn-group">
                    <button
                      className="all-button dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      All
                    </button>
                    <AllDifferentProductTypes />
                  </div>
                  <div className="d-flex" role="search">
                    <input
                      className="form-control me-2 input-search"
                      type="search"
                    />
                    <button
                      className="btn btn-outline-success button-search"
                      type="button"
                      aria-expanded="false"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="nav-right">
            <button
              className="account-button"
              onClick={() => navigate("/signin")}
            >
              Hi, Sign in
            </button>
            <a className="navbar-brand" href="/">
              <img className="shopping-cart" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
