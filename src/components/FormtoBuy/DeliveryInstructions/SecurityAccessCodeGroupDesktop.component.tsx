import CheckBoxComponent from "../../CheckBox.component";
import ImputFormControlComponent from "../../ImputFormControl.component";

export default function SecurityAccessCodeGroupDesktopComponent() {
  return (
    <div>
      <p>
        <a
          data-bs-toggle="collapse"
          href="#multiCollapseExample4"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample4"
        >
          Do we need a security code, call box number or key to access this
          building?
        </a>
      </p>
      <div className="row">
        <div className="col">
          <div className="collapse multi-collapse" id="multiCollapseExample4">
            <div className="card card-body">
              <div>
                {deliveryTime.map((time) => (
                  <ImputFormControlComponent
                    title={time.title}
                    placeholder={time.placeholder}
                    key={time.id}
                  />
                ))}
              </div>
              <CheckBoxComponent
                id="flexCheckChecked"
                title="Key or fob required for delivery"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const deliveryTime = [
  { title: "Security code", placeholder: "Security code for the door", id: 1 },
  { title: "Call box", placeholder: "Call box number or name", id: 2},
];
