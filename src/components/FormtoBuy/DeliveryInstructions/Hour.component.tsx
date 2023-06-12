import ImputFormControlComponent from "../../ImputFormControl.component";
import Radio from "../../Radio.component";

export default function HourComponent() {
  return (
    <div>
      <p>
        <a
          data-bs-toggle="collapse"
          href="#multiCollapseExample3"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample3"
        >
          When is this address open for deliveries?
        </a>
      </p>
      <div className="row">
        <div className="col">
          <div className="collapse multi-collapse" id="multiCollapseExample3">
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
              <div className="row" style={{marginTop: "10px"}}>
                <h5>
                  Can this address receive deliveries on federal holidays?
                </h5>
                <div className="col text-center">
                  <Radio title="Si" id="holidayssi" name="holidays"/>
                </div>
                <div className="col text-center">
                  <Radio title="No" id="holidaysno" name="holidays"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const deliveryTime = [
  { title: "Monday-Friday", placeholder: "Start at", id: 1 },
  { placeholder: "Stop At", id: 2 },
  { title: "Saturday - Sunday", placeholder: "Start at", id: 3 },
  { placeholder: "Stop At", id: 4 },
];
