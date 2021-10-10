import { useState } from "react";
import { useDispatch } from "react-redux";
import AuthForm from "../components/AuthForm/AuthForm";
import { userLogin, userRegister } from "../redux/auth/authOperations";

const AuthPage = ({ match }) => {
  const dispatch = useDispatch();
  const [dataForm, setDataForm] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({ ...prev, [name]: value }));
  };
  const { authType } = match.params;

  const handleSubmit = (e) => {
    e.preventDefault();
    authType === "register" && dispatch(userRegister(dataForm));
    authType === "login" && dispatch(userLogin(dataForm));
  };

  return (
    <AuthForm
      dataForm={dataForm}
      cbOnSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
};

export default AuthPage;
