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
                  <Radio title={radio.title} id={radio.id} key={radio.id} name="house-part" />
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
  {title: "Front door" , id: "front-door"},
  {title: "Back door" , id: "back-door"},
  {title: "Side porch" , id: "side-porch"},
  {title: "Building reception" , id: "building-reception"},
  {title: "Mailroom or property staff" , id: "mailroom-or-property-staff"},
  {title: "Garage" , id: "garage"},
  {title: "No preference" , id: "no-preference"},
]
