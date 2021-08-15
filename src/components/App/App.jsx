import { Component } from "react";
import MainPage from "../_pages/MainPage/MainPage";
import TransactionPage from "../_pages/TransactionPage";
import "./App.css";

class App extends Component {
  state = {
    transType: "",
  };

  render() {
    const props = this.props;
    const { transType } = this.state;

    return !transType ? <MainPage /> : <TransactionPage />;
  }
}

export default App;
