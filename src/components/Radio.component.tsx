export default function Radio({name,title, id}:{name: string,title : string, id : string}) {
  return (
    <>
      <div>
        <input
          className="form-check-input"
          type="radio"
          name={name}
          id={id}
        />
        <label className="form-check-label" htmlFor={id}>
          {title}
        </label>
      </div>
    </>
  );
}