import { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import TransactionHistoryPage from "../../pages/TransactionsHistoryPage";
import MainPage from "../../pages/MainPage";
import TransactionPage from "../../pages/TransactionPage";
import "./App.css";

const App = () => {
  const [incomes, setIncomes] = useState([]);
  const [costs, setCosts] = useState([]);

  const addTransaction = ({ transType, transaction }) => {
    transType === "incomes" && setIncomes((prev) => [...prev, transaction]);
    transType === "costs" && setCosts((prev) => [...prev, transaction]);
  };

  useEffect(() => {
    const costs = JSON.parse(localStorage.getItem("costs"));
    const incomes = JSON.parse(localStorage.getItem("incomes"));
    costs && setCosts(costs);
    incomes && setIncomes(incomes);
  }, []);

  useEffect(() => {
    localStorage.setItem("costs", JSON.stringify(costs));
  }, [costs]);

  useEffect(() => {
    localStorage.setItem("incomes", JSON.stringify(incomes));
  }, [incomes]);

  return (
    <Switch>
      <Route path="/transaction/:transType">
        <TransactionPage addTransaction={addTransaction} />
      </Route>
      <Route path="/history/:transType">
        <TransactionHistoryPage transactions={{ costs, incomes }} />
      </Route>
      <Route path="/" component={MainPage} />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
