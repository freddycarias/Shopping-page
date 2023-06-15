import AccountCardComponent from "./AccounCard.component";

export default function AccountComponent() {
  return (
    <div className="container" style={{paddingBottom: "270px", marginTop: "100px"}}>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {accountCard.map((card) => (
          <AccountCardComponent
            title={card.title}
            key={card.id}
            route={card.route}
          />
        ))}
      </div>
    </div>
  );
}

const accountCard = [
  {id: 1, route: "/security",title: "Login and Security"},
  {id: 2, route: "/customer-service",title: "Custom Service"},
  {id: 3, route: "/about-you",title: " About You"},
] 
