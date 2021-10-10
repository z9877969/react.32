import { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TransactionHistoryPage from "../../pages/TransactionsHistoryPage";
import MainPage from "../../pages/MainPage";
import TransactionPage from "../../pages/TransactionPage";
import AuthPage from "../../pages/AuthPage";
import Nav from "../_nav/Nav/Nav";
import { getIdToken, getIsAuth } from "../../redux/auth/authSelectors";
import { userRefresh } from "../../redux/auth/authOperations";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  const idToken = useSelector(getIdToken);

  useEffect(() => {
    !isAuth && idToken && dispatch(userRefresh());
  }, []);

  return (
    <>
      <Nav isAuth={isAuth} />
      {!isAuth ? (
        <Switch>
          <Route path="/auth/:authType" component={AuthPage} />
          <Redirect to="/auth/login" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/transaction/:transType" component={TransactionPage} />
          <Route
            path="/history/:transType"
            component={TransactionHistoryPage}
          />
          <Route path="/" component={MainPage} />
          <Redirect to="/" />
        </Switch>
      )}
    </>
  );
};

export default App;
