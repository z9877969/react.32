import Section from "../_share/Section/Section";
import Button from "../_share/Button/Button";
import s from "./TransactionsList.module.css";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const TransactionsList = () => {
  const { transType } = useParams();
  const history = useHistory();
  const transactions = useSelector((state) => state.transactions);
  const transactionsList = transactions[transType];
  const handleGoBack = () => history.push("/");

  return (
    <Section
      title={transType === "costs" ? "Список расходов" : "Список доходов"}
    >
      <Button title={"GoBack"} cbOnClick={handleGoBack} />
      <p className={s.item}>
        <span>date</span>
        <span>time</span>
        <span>category</span>
        <span>sum</span>
      </p>
      <ul className={s.list}>
        {transactionsList?.map(({ date, time, sum, category, id }) => (
          <li key={id || Date.now() + Math.random() * 1000} className={s.item}>
            <span>{date}</span>
            <span>{time}</span>
            <span>{category}</span>
            <span>{sum}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default TransactionsList;
