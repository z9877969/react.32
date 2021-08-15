const LabelInput = ({
  title,
  type = "text",
  name,
  value,
  placeholder = null,
}) => {
  return (
    <label>
      {title && <p>{title}</p>}
      <input type={type} name={name} value={value} placeholder={placeholder} />
    </label>
  );
};

export default LabelInput;
