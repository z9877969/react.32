import { useDispatch } from "react-redux";
import { userLogout } from "../../../redux/auth/authActions";
import Button from "../../_share/Button/Button";

const UserNav = () => {
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(userLogout());

  return <Button title="LogOut" cbOnClick={handleLogout} />;
};

export default UserNav;
