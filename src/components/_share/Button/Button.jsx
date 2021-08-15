const Button = ({
  className,
  title,
  type = "button",
  cbOnClick = () => {},
}) => {
  return (
    <button className={className} type={type} onClick={cbOnClick}>
      {title}
    </button>
  );
};

export default Button;
