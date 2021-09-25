import PropTypes from "prop-types";
import Form from "../_share/Form/Form";
import options from "../../assets/options/transactionFormOpts";

const TransactionForm = ({ transaction, handleChange, handleSubmit }) => {
  return (
    <Form
      dataForm={transaction}
      options={options}
      handleChange={handleChange}
      cbOnSubmit={handleSubmit}
    />
  );
};

export default TransactionForm;

TransactionForm.propTypes = {
  transaction: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
