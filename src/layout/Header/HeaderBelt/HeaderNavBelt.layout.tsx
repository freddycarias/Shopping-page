import "../../../styles/HeaderNavBelt.css"
import AccountButtonComponent from "../../../components/AccountButtonComponent.component";

export default function HeaderNavBeltLayout() {
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
                <div className="d-flex" role="search">
                  <input
                    className="form-control me-2 input-search"
                    type="search"
                    placeholder="Search"
                    name="input-header"
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
          <AccountButtonComponent isButton={true}/>
          <a className="navbar-brand" href="/shopping-cart">
            <img className="shopping-cart" />
          </a>
        </div>
      </div>
    </nav>
  </div>
  );
}
