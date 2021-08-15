import Button from "../Button/Button";
import LabelInput from "../LabelInput/LabelInput";

const Form = ({ options, className }) => {
  return (
    <form>
      <Button title={"OK"} type={"submit"} />
      {options.map(({ title, type, name, value, placeholder }) => (
        <LabelInput
          title={title}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
        />
      ))}
    </form>
  );
};

export default Form;
