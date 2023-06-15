import { useNavigate } from "react-router-dom";

export default function AccountCardComponent({title, route}:{title: string, route: string}) {
  const navigate = useNavigate();
  return (
    <div className="col" onClick={() => navigate(`${route}`)} style={{cursor: "pointer"}}>
      <div className="card h-100">
        <div className="card-body service-component-body">
          <h5 className="card-title text-center">{title}</h5>
        </div>
      </div>
    </div>
  );
}

