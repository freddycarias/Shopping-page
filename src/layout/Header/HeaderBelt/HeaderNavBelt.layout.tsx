import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../services/firebase";
import AllDifferentProductTypes from "./AllDifferentProductTypes";
import "../../../styles/HeaderNavBelt.css"

export default function HeaderNavBeltLayout() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);
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
          <button
            className={`account-button ${user ? "signed-in" : "not-signed-in"}`}
            onClick={() => navigate("/signin")}
          >
            {user ? `${user.email}` : "hi, sign in"}
          </button>
          <a className="navbar-brand" href="/shopping-cart">
            <img className="shopping-cart" />
          </a>
        </div>
      </div>
    </nav>
  </div>
  );
}
