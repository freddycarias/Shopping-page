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
            <Radio title={housing.title} id={housing.id} name="delivery-instructions" />
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
  { title: "House", id: "house" },
  { title: "Apartment", id: "apartment" },
  { title: "Business", id: "business" },
  { title: "Other", id: "other" },
];
