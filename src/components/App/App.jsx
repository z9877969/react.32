import { Route, Switch, Redirect } from "react-router-dom";
import TransactionHistoryPage from "../../pages/TransactionsHistoryPage";
import MainPage from "../../pages/MainPage";
import TransactionPage from "../../pages/TransactionPage";
import "./App.css";

const App = () => {

  return (
    <Switch>
      <Route path="/transaction/:transType" component={TransactionPage} />
      <Route path="/history/:transType"  component={TransactionHistoryPage} />
      <Route path="/" component={MainPage} />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
