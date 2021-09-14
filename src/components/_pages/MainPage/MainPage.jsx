import MainInfo from "../../MainInfo/MainInfo";
import {
  costsOptions,
  incomesOptions,
  balanceOptions,
} from "../../../assets/options/mainInfoOptions.json";
import Button from "../../_share/Button/Button";
import Section from "../../_share/Section/Section";
import { useHistory, Link } from "react-router-dom";
const data = {
  dataInfo: [],
  a: 65,
  b: "",
};

const titleOptions = {
  costs: {
    ru: "Расходы",
    en: "Costs",
    ua: "Вытраты",
  },
  incomes: {
    ru: "Доходы",
    en: "Incomes",
    ua: "Прибуток",
  },
};

const MainPage = ({ handleOpenTransaction }) => {
  const handleBalance = () => {};
  return (
    <Section>
      <h1>Журнал расходов</h1>
      <MainInfo
        handleOpenTransaction={handleOpenTransaction}
        title={titleOptions}
        transType="costs"
        dataInfo={costsOptions}
      />
      <MainInfo
        handleOpenTransaction={handleOpenTransaction}
        title={titleOptions}
        transType="incomes"
        dataInfo={incomesOptions}
      />
      <MainInfo
        handler={handleBalance}
        title={"Баланс"}
        dataInfo={balanceOptions}
      />
      <Link to={"/history/costs"}>Все расходы</Link>
      <Link to={"/history/incomes"}>Все доходы</Link>
    </Section>
  );
};

export default MainPage;
