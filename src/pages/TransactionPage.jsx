import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import shortid from "shortid";
import Button from "../components/_share/Button/Button";
import Section from "../components/_share/Section/Section";
import TransactionForm from "../components/TransactionForm/TransactionForm";

const TransactionPage = ({ addTransaction }) => {
  const { transType } = useParams();
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      transaction: { ...transaction, id: shortid.generate() },
      transType,
    });
    handleGoBack();
  };

  return (
    <Section>
      <Button title={"GoBack"} cbOnClick={handleGoBack} />
      <h1>{transType === "costs" ? "Расходы" : "Доходы"}</h1>
      <TransactionForm
        transaction={transaction}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Section>
  );
};

export default TransactionPage;
