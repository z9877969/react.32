import { Component } from "react";
import { Route, Switch, Render } from "react-router-dom";
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
    if (prevState.costs !== this.state.costs) {
      localStorage.setItem("costs", JSON.stringify(this.state.costs));
    }
    if (prevState.incomes !== this.state.incomes) {
      localStorage.setItem("incomes", JSON.stringify(this.state.incomes));
    }
  }

  handleOpenTransaction = (transType) => {
    this.setState({ transType: transType });
  };

  handleCloseTransaction = () => {
    this.setState({ transType: "" });
  };

  handleAddTransaction = ({ transType, transaction }) => {
    this.setState((prevState) => ({
      [transType]: [...prevState[transType], transaction],
    }));
    this.handleCloseTransaction();
  };

  render() {
    const props = this.props;
    const { transType, costs, incomes } = this.state;

    return (
      <Switch>
        <Route path={"/transaction/:transType"}>
          <TransactionPage
            transType={transType}
            handleCloseTransaction={this.handleCloseTransaction}
            handleAddTransaction={this.handleAddTransaction}
          />
        </Route>
        <Route path="/history/:transType">
          <TransactionsList
            transactionsList={transType === "costsList" ? costs : incomes}
            handleCloseTransaction={this.handleCloseTransaction}
          />
        </Route>
        <Route path="/">
          <MainPage handleOpenTransaction={this.handleOpenTransaction} />
        </Route>
      </Switch>
    );
  }
}

export default App;
