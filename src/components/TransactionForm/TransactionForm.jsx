import PropTypes from "prop-types";
import Form from "../_share/Form/Form";

const TransactionForm = ({ options }) => {
  // LOGIC
  return <Form options={options} />;
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
};
