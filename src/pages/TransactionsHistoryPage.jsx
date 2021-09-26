import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import TransactionsList from "../components/TransactionsList/TransactionsList";
import Button from "../components/_share/Button/Button";
import Section from "../components/_share/Section/Section";

const TransactionsHistoryPage = ({ transactions }) => {
  const { push, location } = useHistory();
  const { transType } = useParams();
  const handleGoBack = () => push(location.state?.from || "/");

  const transactionsList = transactions[transType];

  return (
    <Section
      title={transType === "costs" ? "Список расходов" : "Список доходов"}
    >
      <Button title={"GoBack"} cbOnClick={handleGoBack} />
      <TransactionsList transactionsList={transactionsList} />
    </Section>
  );
};

const mapStateToProps = (state) => ({
  // incomes: state.transactions.incomes,
  // costs: state.transactions.costs,
  transactions: state.transactions,
});

export default connect(mapStateToProps)(TransactionsHistoryPage);
