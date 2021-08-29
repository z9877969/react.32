import { Component } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import Form from "../_share/Form/Form";

class TransactionForm extends Component {
  state = {
    date: "",
    time: "",
    category: this.props.transType === "costs" ? "Еда" : "Зарплата",
    sum: "",
    currency: "UAH",
    comment: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { handleAddTransaction, transType } = this.props;

    handleAddTransaction({
      transaction: { ...this.state, id: shortid.generate() },
      transType: transType,
    });
  };

  render() {
    const { options } = this.props;
    return (
      <Form
        dataForm={this.state}
        options={options}
        handleChange={this.handleChange}
        cbOnSubmit={this.handleSubmit}
      />
    );
  }
}

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
