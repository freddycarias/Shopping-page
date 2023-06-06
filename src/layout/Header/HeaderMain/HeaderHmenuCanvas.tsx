import { ProductCategoryComponent } from "../../../components/Header/ProductCategory.component";
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
            <div className="col shop-by-department">
              <h4>Shop By Department</h4>
              {categoryType.map((category) => (
                <ProductCategoryComponent
                  route={category.route}
                  name={category.name}
                />
              ))}
            </div>
            <hr />
            <div className="col help-settings">
              <h4>Help & Settings</h4>
              {helpAndSettings.map((hs) => (
                <ProductCategoryComponent route={hs.route} name={hs.name} />
              ))}
              <Signout/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const categoryType = [
  { route: "/books", name: "Books" },
  { route: "/computers", name: "Computers" },
  { route: "/electronics", name: "Electronics" },
  { route: "/video-games", name: "Video Games" },
];

const helpAndSettings = [
  { route: "/account", name: "Your Account" },
  { route: "/customer-service", name: "Customer Service" },
];
