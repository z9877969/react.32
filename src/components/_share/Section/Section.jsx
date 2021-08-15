import css from "./Section.module.css";

const MainSection = ({ title, children }) => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        {title && <h1 className={css.title}>{title}</h1>}
        {children}
      </div>
    </section>
  );
};

export default MainSection;
