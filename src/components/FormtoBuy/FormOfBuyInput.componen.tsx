import ImputFormControlComponent from "../ImputFormControl.component";

type FormOfBuyInputProps = {
  className?: string;
  title?: string;
  placeholder?: string; 
  span?: string;
}

export default function FormOfBuyInput ({className, title, placeholder,span}:FormOfBuyInputProps) {
  return (
    <div className={className} key={title}>
      <div className="mb-3">
        <ImputFormControlComponent title={title} placeholder={placeholder} />
        <span>{span}</span>
      </div>
    </div>
  );
}
