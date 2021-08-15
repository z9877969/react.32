import MainInfo from "../../MainInfo/MainInfo";
import {
  costsOptions,
  incomesOptions,
  balanceOptions,
} from "../../../assets/options/mainInfoOptions.json";
import Button from "../../_share/Button/Button";
import Section from "../../_share/Section/Section";
const data = {
  dataInfo: [],
  a: 65,
  b: "",
};
const MainPage = () => {
  const handleAdd = () => {};
  const handleBalance = () => {};
  return (
    <Section>
      <h1>Журнал расходов</h1>
      {/* {MainInfo({
          handler: handleAdd,
          title: "Расходы",
          dataInfo: costsOptions,
        })} */}
      <MainInfo handler={handleAdd} title={"Расходы"} dataInfo={costsOptions} />
      <MainInfo
        handler={handleAdd}
        title={"Доходы"}
        dataInfo={incomesOptions}
      />
      <MainInfo
        handler={handleBalance}
        title={"Баланс"}
        dataInfo={balanceOptions}
      />
      <Button title="Все расходы" />
      <Button title="Все доходы" />
    </Section>
  );
};

export default MainPage;
