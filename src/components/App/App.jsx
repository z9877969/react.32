import { Component } from "react";
import TransactionsList from "../TransactionsList/TransactionsList";
import MainPage from "../_pages/MainPage/MainPage";
import TransactionPage from "../_pages/TransactionPage";
import "./App.css";

class App extends Component {
  state = {
    transType: "",
    costs: [],
    incomes: [],
  };

  componentDidMount() {
    const costs = JSON.parse(localStorage.getItem("costs"));
    const incomes = JSON.parse(localStorage.getItem("incomes"));
    costs && this.setState({ costs });
    incomes && this.setState({ incomes });
  }

  componentDidUpdate(prevProps, prevState) {
    // if(prevProps.search !== this.props.search){
    //   fetch().then(data => this.setState()).catch()
    // }
    // if(prevState.page !== this.state.page){
    //   fetch().then(data => this.setState()).catch()
    // }
    if (prevState.costs !== this.state.costs) {
      localStorage.setItem("costs", JSON.stringify(this.state.costs));
    }
    if (prevState.incomes !== this.state.incomes) {
      localStorage.setItem("incomes", JSON.stringify(this.state.incomes));
    }
  }

  // setImages = () => getImagesApi({page, search}).then(data => this.setState()).catch()

  handleOpenTransaction = (transType) => {
    this.setState({ transType: transType });
  };

  handleCloseTransaction = () => {
    this.setState({ transType: "" });
  };

  handleAddTransaction = ({ transType, transaction }) => {
    // transType => costs || incomes
    this.setState((prevState) => ({
      [transType]: [...prevState[transType], transaction],
    }));
    this.handleCloseTransaction();
  };

  render() {
    const props = this.props;
    const { transType, costs, incomes } = this.state;

    return (
      <>
        {!transType ? (
          <MainPage handleOpenTransaction={this.handleOpenTransaction} />
        ) : transType === "costs" || transType === "incomes" ? (
          <TransactionPage
            transType={transType}
            handleCloseTransaction={this.handleCloseTransaction}
            handleAddTransaction={this.handleAddTransaction}
          />
        ) : (
          <TransactionsList
            transactionsList={transType === "costsList" ? costs : incomes}
            transList={transType}
            title={
              transType === "costsList" ? "Список расходов" : "Список доходов"
            }
            handleCloseTransaction={this.handleCloseTransaction}
          />
        )}
      </>
    );
  }
}

export default App;
