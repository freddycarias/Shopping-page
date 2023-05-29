import { useNavigate } from "react-router-dom";
import HeaderHmenuCanvas from "./HeaderHmenuCanvas";
import "../../../styles/HeaderNavMain.css";

export default function HeaderNavMain() {
  const navigate = useNavigate()
  return (
    <div className="nav-main">
      <nav className="navbar">
        <div className="container-fluid sub-header">
          <a
            className="nav-hambuger-menu"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            =
          </a>
          <HeaderHmenuCanvas/>          
          <button className="custom-service-button" onClick={() => navigate("/customer-service")}>Custom Service</button>
        </div>
      </nav>
    </div>
  );
}
