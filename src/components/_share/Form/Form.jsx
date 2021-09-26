import Button from "../Button/Button";
import LabelInput from "../LabelInput/LabelInput";

const Form = ({
  options,
  dataForm,
  className,
  cbOnSubmit,
  handleChange,
  handleClick,
}) => {
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
          cbOnChange={type !== "button" ? handleChange : null}
          cbOnClick={type === "button" ? handleClick : null}
        />
      ))}
    </form>
  );
};

export default Form;
