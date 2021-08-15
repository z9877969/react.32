const transactionFormOpts = [
  {
    title: "День",
    type: "date",
    name: "date",
    value: "2021-08-15",
  },
  {
    title: "Время",
    type: "time",
    name: "time",
    value: "12:57",
  },
  {
    title: "Категория",
    type: "button",
    name: "category",
    value: "Еда",
  },
  {
    title: "Сумма",
    name: "sum",
    value: "",
    placeholder: "Введите сумму",
  },
  {
    title: "Валюта",
    type: "button",
    name: "currency",
    value: "USD",
  },
  {
    name: "comment",
    value: "",
    placeholder: "Комментарий",
  },
];

export default transactionFormOpts;
