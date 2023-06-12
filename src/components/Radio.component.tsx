export default function Radio({name, id}:{name : string, id : string}) {
  return (
    <>
      <div>
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id={id}
        />
        <label className="form-check-label" htmlFor={id}>
          {name}
        </label>
      </div>
    </>
  );
}