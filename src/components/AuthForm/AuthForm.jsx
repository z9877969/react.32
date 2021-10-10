import Form from "../_share/Form/Form";

const authFormOptions = [
  { title: "Email", name: "email", placeholder: "Input email..." },
  { title: "Password", name: "password", placeholder: "Input paassword..." },
];

const AuthForm = ({ dataForm, cbOnSubmit, handleChange }) => {
  return (
    <Form
      options={authFormOptions}
      dataForm={dataForm}
      cbOnSubmit={cbOnSubmit}
      handleChange={handleChange}
      //    className,
    />
  );
};

export default AuthForm;
