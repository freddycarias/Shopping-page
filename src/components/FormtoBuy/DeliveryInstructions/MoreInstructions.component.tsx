export default function MoreInstructionsComponent() {
  return (
    <div>
      <p>
        <a
          data-bs-toggle="collapse"
          href="#multiCollapseExample5"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample5"
        >
          Do we need additional instructions to find this address?
        </a>
      </p>
      <div className="row">
        <div className="col">
          <div className="collapse multi-collapse" id="multiCollapseExample5">
            <div className="card card-body">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  More Instructions
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  placeholder="Provide details such as building description, a nearby landmark, or other navigation instructions."
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
