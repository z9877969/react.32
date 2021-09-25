import s from "./TransactionsList.module.css";

const TransactionsList = ({ transactions, transactionsList }) => {
  return (
    <>
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
    </>
  );
};

export default TransactionsList;
