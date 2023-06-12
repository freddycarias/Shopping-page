import Radio from "../../Radio.component";
import HourComponent from "./Hour.component";
import MoreInstructionsComponent from "./MoreInstructions.component";
import SecurityAccessCodeGroupDesktopComponent from "./SecurityAccessCodeGroupDesktop.component";
import { WhereComponent } from "./Where.component";

function DeliveryInstructionsTypesOfHousing() {
  return (
    <>
      {typesOfHousing.map((housing) => (
        <div className="col" key={housing.id}>
          <div className="form-check">
            <Radio name={housing.name} id={housing.id} />
          </div>
        </div>
      ))}
    </>
  );
}

export default function DeliveryInstructionsComponent() {
  return (
    <div>
      Please select a property type
      <div className="row">
        <DeliveryInstructionsTypesOfHousing />
      </div>
      <WhereComponent />
      <HourComponent />
      <SecurityAccessCodeGroupDesktopComponent />
      <MoreInstructionsComponent />
      <p>
        Your instructions help us deliver to this address. However, deliveries
        may not always follow all the instructions.
      </p>
    </div>
  );
}

const typesOfHousing = [
  { name: "House", id: "house" },
  { name: "Apartment", id: "apartment" },
  { name: "Business", id: "business" },
  { name: "Other", id: "other" },
];
