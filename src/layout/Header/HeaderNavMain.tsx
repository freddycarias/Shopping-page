import '../../styles/HeaderNavMain.css';

export default function HeaderNavMain() {
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
          <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="">
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </div>
            </div>
          </div>
        <button className="custom-service-button">Custom Service</button>
        </div>
      </nav>
    </div>
  );
}
