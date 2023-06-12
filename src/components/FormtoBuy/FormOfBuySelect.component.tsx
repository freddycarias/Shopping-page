export default function FormOfBuySelectComponent({title, option}:{title: string, option: string[] }) {
  return (
    <div style={{marginTop: "20px"}}>
      <h6>{title}</h6>
      <select
        className="form-select"
        aria-label="Default select example"
        defaultValue="selected"
      >
        {option.map((item)=> (
          <option key={item} >{item}</option>
        ))}
      </select>
    </div>
  );
}

