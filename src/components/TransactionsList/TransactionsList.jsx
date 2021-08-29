import Section from "../_share/Section/Section";
import Button from "../_share/Button/Button";
import s from "./TransactionsList.module.css";

const TransactionsList = ({
  transactionsList,
  handleCloseTransaction,
  title,
}) => {
  return (
    <Section title={title}>
      <Button title={"GoBack"} cbOnClick={handleCloseTransaction} />
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
