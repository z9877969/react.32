import MainInfo from "../components/MainInfo/MainInfo";
import {
  costsOptions,
  incomesOptions,
  balanceOptions,
} from "../assets/options/mainInfoOptions.json";
import Button from "../components/_share/Button/Button";
import Section from "../components/_share/Section/Section";
import { useHistory } from "react-router-dom";

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

const MainPage = () => {
  const { push, location } = useHistory();
  const openCostsList = () =>
    push({
      pathname: "/history/costs",
      state: {
        from: location,
      },
    });
  const openIncomesList = () =>
    push({
      pathname: "/history/incomes",
      state: {
        from: location,
      },
    });

  const handleOpenPage = (pagePathName) =>
    push({
      pathname: pagePathName,
      state: {
        from: location,
      },
    });

  return (
    <Section>
      <h1>Журнал расходов</h1>
      <MainInfo
        handleOpenPage={handleOpenPage}
        title={titleOptions}
        transType="costs"
        pagePathName="/transaction/costs"
        dataInfo={costsOptions}
      />
      <MainInfo
        handleOpenPage={handleOpenPage}
        title={titleOptions}
        transType="incomes"
        pagePathName="/transaction/incomes"
        dataInfo={incomesOptions}
      />
      <MainInfo
        handleOpenPage={handleOpenPage}
        pagePathName="/balance"
        title={"Баланс"}
        dataInfo={balanceOptions}
      />
      <Button title="Все расходы" cbOnClick={openCostsList} />
      <Button title="Все доходы" cbOnClick={openIncomesList} />
    </Section>
  );
};

export default MainPage;
