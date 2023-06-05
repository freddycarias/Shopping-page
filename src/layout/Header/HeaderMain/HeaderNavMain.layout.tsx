import { useNavigate } from "react-router-dom";
import HeaderHmenuCanvas from "./HeaderHmenuCanvas";
import "../../../styles/HeaderNavMain.css";

export default function HeaderNavMainLayout() {
  const navigate = useNavigate();
  return (
    <div className="nav-main">
      <div className="row justify-content-center">
        <div className="col-6 mb-3" style={{ textAlign: "left"}}>
          <div>
            <button
              className="btn btn-primary hamburger-menu"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
               ≡
            </button>
            <HeaderHmenuCanvas />
          </div>
        </div>
        <div className="col-6 mb-3 " style={{ textAlign: "right"}}>
          <button
            className="btn btn-primary custom-service-button"
            onClick={() => navigate("/customer-service")}
          >
            Custom Service
          </button>
        </div>
      </div>
    </div>
  );
}
