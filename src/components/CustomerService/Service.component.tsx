import "../../styles/Service.css";

export default function ServiceComponent({title}:{title: string}) {
  return (
    <>
      <div className="col service-component">
        <div className="card h-100">
          <div className="card-body service-component-body">
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
      </div>
    </>
  )
}
