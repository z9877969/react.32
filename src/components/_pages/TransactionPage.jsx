import Button from "../_share/Button/Button";
import Section from "../_share/Section/Section";
import transactionFormOpts from "../../assets/options/transactionFormOpts";
import TransactionForm from "../TransactionForm/TransactionForm";

const TransactionPage = ({
  handleCloseTransaction,
  handleAddTransaction,
  transType,
}) => {
  return (
    <Section>
      <Button title={"GoBack"} cbOnClick={handleCloseTransaction} />
      <h1>{transType === "costs" ? "Расходы" : "Доходы"}</h1>
      <TransactionForm
        transType={transType}
        options={transactionFormOpts}
        handleAddTransaction={handleAddTransaction}
      />
    </Section>
  );
};

export default TransactionPage;
