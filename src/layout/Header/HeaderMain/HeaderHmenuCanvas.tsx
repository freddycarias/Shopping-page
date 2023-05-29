import "../../../styles/HeaderHmenuCanvas.css"

export function ShopByDepartment ({route,name}:{route: string ,name: string}) {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-6 col-sm-12 background-offcanvas-body">
            <a href={route} className="routes-offcanvas-body">
              <h6>{name}</h6>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}


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
          <a href="/signin" className="title-hmenu-canvas">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              Hi, sign in
            </h5>
          </a>
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
                <ShopByDepartment route="/books" name={"Books"}/>
                <ShopByDepartment route="/computers" name={"Computers"}/>
                <ShopByDepartment route="/electronics" name={"Electronics"}/>
                <ShopByDepartment route="/video-games" name={"Video Games"}/>
            </div>
            <hr/>
            <div className="col help-settings">
                <h4>Help & Settings</h4>
                <ShopByDepartment route="/account" name={"Your Account"}/>
                <ShopByDepartment route="/customer-service" name={"Customer Service"}/>
                <ShopByDepartment route="/signin" name={"Sign In"}/>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
