import ImputFormControlComponent from "../ImputFormControl.component";
import DeliveryInstructionsComponent from "./DeliveryInstructions/DeliveryInstructions.component";
import FormOfBuyInput from "./FormOfBuyInput.componen";
import FooterComponent from "./Footer.component";
import FormOfBuySelectComponent from "./FormOfBuySelect.component";
import { v4 as uuidv4 } from "uuid";

export default function AddANewAddressComponent() {
  return (
    <section>
      <div className="container">
        <div className="row text-center">
          <div className="col">Icon</div>
          <div className="col">
            <h2>Checkout(Items X)</h2>
          </div>
          <div className="col">
            <a href="/customer-service">padlock</a>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-7 ">
            <h5>Enter a new shipping address</h5>
            <div className="row">
              <div
                className="col text-center"
                style={{ border: "0.5px solid grey" }}
              >
                <h4>Add a new address</h4>
                <div className="text-start">
                  {formOfBuySelectCountry.map((select) => (
                    <FormOfBuySelectComponent
                      title={select.title}
                      option={select.option}
                      key={select.id}
                    />
                  ))}
                  {formOfBuyInputs.map((input) => (
                    <FormOfBuyInput
                      className={input.className}
                      title={input.title}
                      placeholder={input.placeholder}
                      span={input.span}
                      key={input.id}
                    />
                  ))}
                  <div className="form-to-buy-specific-location">
                    <div className="row">
                      <div className="col-4">
                        <div className="mb-3">
                          <ImputFormControlComponent
                            title={"City"}
                            key={"city-input"}
                          />
                        </div>
                      </div>
                      <div className="col-4" style={{marginTop: "10px"}}>
                        {formOfBuySelectState.map((select) => (
                          <FormOfBuySelectComponent
                            title={select.title}
                            option={select.option}
                            key={select.id}
                          />
                        ))}
                      </div>
                      <div className="col-4">
                        <div className="mb-3">
                          <ImputFormControlComponent
                            title={"ZIP Code"}
                            key={"zip-code-input"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-to-buy-checkbox">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        Make this my default address
                      </label>
                    </div>
                  </div>
                  <div className="form-to-buy-delivery-instructions">
                    <h6>Delivery instructions (optional)</h6>
                    <div>
                      <p>
                        <a
                          data-bs-toggle="collapse"
                          href="#multiCollapseExample1"
                          role="button"
                          aria-expanded="false"
                          aria-controls="multiCollapseExample1"
                        >
                          Add preferences, notes, access codes and more
                        </a>
                      </p>
                      <div className="row">
                        <div className="col">
                          <div
                            className="collapse multi-collapse"
                            id="multiCollapseExample1"
                          >
                            <div className="card card-body">
                              <DeliveryInstructionsComponent />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-5 "
            style={{
              border: "0.5px solid grey",
              width: "400px",
              height: "400px",
              marginLeft: "20px",
            }}
          >
            One of two columns
          </div>
        </div>
        <FooterComponent />
      </div>
    </section>
  );
}

const formOfBuyInputs = [
  {
    className: "form-to-buy-full-name",
    title: "Full name (First and Last name)",
    placeholder: "Full name Please",
    id: 1,
  },
  {
    className: "form-to-buy-phone-number",
    title: "Phone Number",
    span: "May be used to assist delivery",
    id: 2,
  },
  {
    className: "form-to-buy-address",
    title: "Address",
    placeholder: "Street address or P.O. Box ",
    id: 3,
  },
  { placeholder: "Apt, suite, unit, building, floor, etc.", id: 4 },
];

const formOfBuySelectCountry = [
  {
    title: "Country/Region",
    option: ["Guatemala", "Mexico", "El Salvador", "Honduras", "USA"],
    id: uuidv4(),
  },
];

const formOfBuySelectState = [
  {
    title: "State",
    option: [
      "CD Guatemala",
      "CD Mexico",
      "San Salvador",
      "Tegucigalpa",
      "Washington D. C.",
    ],
    id: uuidv4(),
  },
];
