import Button from "../Button/Button";
import LabelInput from "../LabelInput/LabelInput";

const Form = ({ options, dataForm, className, cbOnSubmit, handleChange }) => {
  return (
    <form onSubmit={cbOnSubmit}>
      <Button title={"OK"} type={"submit"} />
      {options.map(({ title, type, name, placeholder }) => (
        <LabelInput
          title={title}
          type={type}
          name={name}
          value={dataForm[name]}
          placeholder={placeholder}
          cbOnChange={handleChange}
        />
      ))}
    </form>
  );
};

export default Form;
