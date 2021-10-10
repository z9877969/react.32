import { Link } from "react-router-dom";
const AuthNav = () => {
  return (
    <>
      <Link to="/auth/register">Register</Link>
      <Link to="/auth/login">Login</Link>
    </>
  );
};

export default AuthNav;
