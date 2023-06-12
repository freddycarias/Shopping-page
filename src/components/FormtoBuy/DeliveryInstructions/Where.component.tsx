import Radio from "../../Radio.component";
export const WhereComponent = () => {
  return (
    <div>
      <p>
        <a
          data-bs-toggle="collapse"
          href="#multiCollapseExample2"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample2"
        >
          Where should we leave your packages at this address?
        </a>
      </p>
      <div className="row">
        <div className="col">
          <div className="collapse multi-collapse" id="multiCollapseExample2">
            <div className="card card-body">
              <div className="form-check">
                {radios.map((radio) => (
                  <Radio name={radio.name} id={radio.id} key={radio.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const radios = [
  {name: "Front door" , id: "front-door"},
  {name: "Back door" , id: "back-door"},
  {name: "Side porch" , id: "side-porch"},
  {name: "Building reception" , id: "building-reception"},
  {name: "Mailroom or property staff" , id: "mailroom-or-property-staff"},
  {name: "Garage" , id: "garage"},
  {name: "No preference" , id: "no-preference"},
]
