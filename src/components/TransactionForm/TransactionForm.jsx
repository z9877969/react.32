import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import shortid from "shortid";
import Form from "../_share/Form/Form";
import {
  addCosts,
  addIncomes,
} from "../../redux/transactions/transactionsActions";

const TransactionForm = ({ options, transType, url, history }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    date: "",
    time: "",
    category: transType === "costs" ? "Еда" : "Зарплата",
    sum: "",
    currency: "UAH",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () =>
    history.push({
      pathname: url + "/cat-list",
      state: {
        from: history.location,
      },
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataForm = { ...form, id: shortid.generate() };
    transType === "incomes"
      ? dispatch(addIncomes(dataForm))
      : dispatch(addCosts(dataForm));
  };

  return (
    <Form
      dataForm={form}
      options={options}
      handleChange={handleChange}
      handleClick={handleClick}
      cbOnSubmit={handleSubmit}
    />
  );
};

export default TransactionForm;

TransactionForm.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      type: PropTypes.string,
      name: PropTypes.string,
      value: PropTypes.string,
      placeholder: PropTypes.string,
      handleChange: PropTypes.func,
      handleClick: PropTypes.func,
    })
  ).isRequired,
  handleAddTransaction: PropTypes.func.isRequired,
  transType: PropTypes.string.isRequired,
};
