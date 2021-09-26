import { useState } from "react";
import {
  useHistory,
  useParams,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import { connect } from "react-redux";
import shortid from "shortid";
import Button from "../components/_share/Button/Button";
import Section from "../components/_share/Section/Section";
import TransactionForm from "../components/TransactionForm/TransactionForm";
import {
  addCosts,
  addIncomes,
} from "../redux/transactions/transactionsActions";
import CategoriesList from "../components/CategoriesList/CategoriesList";

const TransactionPage = ({ addIncomesProp, addCostsProp }) => {
  const { transType } = useParams();
  const { path, url } = useRouteMatch();
  const { push, location } = useHistory();
  const [transaction, setTransaction] = useState(() => ({
    date: "",
    time: "",
    category: transType === "costs" ? "Еда" : "Зарплата",
    sum: "",
    currency: "UAH",
    comment: "",
  }));

  const handleGoBack = () => push(location.state?.from || "/");

  const openCategoriesList = () =>
    push({
      pathname: url + "/cat-list",
      state: {
        from: location,
      },
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // addTransaction({
    //   transaction: { ...transaction, id: shortid.generate() },
    //   transType,
    // });
    const transactionToSubmit = { ...transaction, id: shortid.generate() };
    transType === "incomes" && addIncomesProp(transactionToSubmit);
    transType === "costs" && addCostsProp(transactionToSubmit);
    handleGoBack();
  };

  return (
    <Section>
      <Button title={"GoBack"} cbOnClick={handleGoBack} />
      <Switch>
        <Route path={path + "/cat-list"} component={CategoriesList} />
        <Route path={path}>
          <h1>{transType === "costs" ? "Расходы" : "Доходы"}</h1>
          <TransactionForm
            transaction={transaction}
            handleChange={handleChange}
            handleClick={openCategoriesList}
            handleSubmit={handleSubmit}
          />
        </Route>
      </Switch>
    </Section>
  );
};
// /transaction/:transType/cat-list

const mapStateToProps = (state) => ({
  incomes: state.transactions.incomes,
  costs: state.transactions.costs,
});

const mapDispatchToProps = (dispatch) => ({
  addIncomesProp: (transaction) => dispatch(addIncomes(transaction)),
  addCostsProp: (transaction) => dispatch(addCosts(transaction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPage);
