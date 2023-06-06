export function ProductCategoryComponent ({route,name}:{route: string ,name: string}) {
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