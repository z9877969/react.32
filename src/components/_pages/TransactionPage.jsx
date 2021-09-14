import { Route, Switch } from "react-router-dom";
import Button from "../_share/Button/Button";
import Section from "../_share/Section/Section";
import transactionFormOpts from "../../assets/options/transactionFormOpts";
import TransactionForm from "../TransactionForm/TransactionForm";
import { useHistory, useRouteMatch } from "react-router-dom";
import CategoriesList from "./CategoriesList";

const TransactionPage = ({
  handleAddTransaction,
  // transType,
}) => {
  const history = useHistory();
  const { params, path, url } = useRouteMatch();
  const { transType } = params;

  const handleGoBack = () => history.push(history.location.state?.from || "/");

  return (
    <Section>
      <Button title={"GoBack"} cbOnClick={handleGoBack} />
      <Switch>
        <Route path={path + "/cat-list"} component={CategoriesList} />
        <Route path={path}>
          <h1>{transType === "costs" ? "Расходы" : "Доходы"}</h1>
          <TransactionForm
            transType={transType}
            url={url}
            history={history}
            options={transactionFormOpts}
            handleAddTransaction={handleAddTransaction}
          />
        </Route>
      </Switch>
    </Section>
  );
};

export default TransactionPage;
