import AuthNav from "../AuthNav/AuthNav";
import UserNav from "../UserNav/UserNav";

const Nav = ({ isAuth }) => {
  return isAuth ? <UserNav /> : <AuthNav />;
};

export default Nav;
