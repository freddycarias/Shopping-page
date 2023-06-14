export default function CheckBoxComponent({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id={id} />
      <label className="form-check-label" htmlFor={id}>
        {title}
      </label>
    </div>
  );
}
