import Button from "../_share/Button/Button";
import css from "./MainInfo.module.css";

const MainInfo = ({
  dataInfo,
  title,
  transType,
  handleOpenPage,
  pagePathName,
}) => {
  const cbOnClick = () => handleOpenPage(pagePathName);
  const contentTitle = title[transType]?.ru || "Баланс";
  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.wrapper}>
          <div className={css.secondaryWrapper}>
            <h2 className={css.title}>{contentTitle}</h2>
            <p className={css.currency}>USD</p>
          </div>

          <ul className={css.list}>
            {dataInfo.map(({ name, title, sum }) => (
              <li className={css.item} key={name}>
                <span className={css.period}>{title}</span>
                <span className={css.sum}>{sum}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button title="Add" cbOnClick={cbOnClick} className={css.button} />
      </div>
    </section>
  );
};

export default MainInfo;
