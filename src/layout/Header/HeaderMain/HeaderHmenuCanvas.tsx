import { HamburgerMenuComponent } from "../../../components/Header/HamburgerMenu.component";
import AccountButtonComponent from "../../../components/AccountButtonComponent.component";
import "../../../styles/HeaderHmenuCanvas.css";
import Signout from "../../../components/Auth/Signout";

export default function HeaderHmenuCanvas() {
  return (
    <>
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <AccountButtonComponent isButton={false} />
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="container text-center">
            <div className="col help-settings">
              <h4>Categories</h4>
              {hHamburgermenuCategories.map((hs) => (
                <HamburgerMenuComponent
                  route={hs.route}
                  name={hs.name}
                  key={hs.name}
                />
              ))}
            </div>
            <hr />
            <div className="col help-settings">
              <h4>Help & Settings</h4>
              {hHamburgermenuSetting.map((hs) => (
                <HamburgerMenuComponent
                  route={hs.route}
                  name={hs.name}
                  key={hs.name}
                />
              ))}
            </div>
            <Signout />
          </div>
        </div>
      </div>
    </>
  );
}

const hHamburgermenuCategories = [
  { route: "/product-categories", name: "Products" },
];

const hHamburgermenuSetting = [
  { route: "/account", name: "Your Account" },
  { route: "/customer-service", name: "Customer Service" },
];
