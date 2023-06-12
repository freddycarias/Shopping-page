export default function ImputFormControlComponent({title, placeholder}:{title? : string, placeholder?: string}) {
  return (
    <div style={{ marginTop: "20px" }}>
      <label className="form-label" htmlFor={title}>
        <h6>{title}</h6>
      </label>
      <input type="text" className="form-control" placeholder={placeholder}  id={title}/>
    </div>
  );
}
