import Button from "../_share/Button/Button";
import Section from "../_share/Section/Section";
import transactionFormOpts from "../../assets/options/transactionFormOpts";
import TransactionForm from "../TransactionForm/TransactionForm";

const TransactionPage = () => {
  return (
    <Section>
      <Button title={"GoBack"} />
      <h1>title</h1>
      <TransactionForm options={transactionFormOpts} />
    </Section>
  );
};

export default TransactionPage;
