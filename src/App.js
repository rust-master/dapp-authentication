import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Web3 from "web3";
import contract from "./build/contracts/Auth.json";
class App extends Component {
  async componentWillMount() {
    console.log("componentWillMount");
    await this.loadWeb3();
    this.loadBlockchainData();
  }

  async loadWeb3() {
    console.log("loadWeb3");
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
      window.location.href =
        "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn";
    }
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: "",
      password: "",
      address:  "",
      cnic: "",
      balance: "",
    }
  }

  async loadBlockchainData() {
    console.log("loadBlockchainData");
    const web3 = window.web3;
    const webeProvider = new Web3(
      Web3.givenProvider || "http://localhost:7545"
    );
    const accounts = await webeProvider.eth.getAccounts();

    this.setState({address: accounts[0]});

    const blnce = web3.utils.fromWei(
      await web3.eth.getBalance(accounts[0]),
      "ether"
    );

    this.setState({balance : blnce});

    console.log(this.state.balance);
    console.log(this.state.address);

  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }


  render() {
    return (

            <form>
              <input
                className="footer-input"
                name="name"
                type="text"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <input
                className="footer-input"
                name="cnic"
                type="number"
                placeholder="CNIC"
                value={this.state.cnic}
                onChange={this.handleChange}
              />
              <input
                className="footer-input"
                name="password"
                type="text"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <button>Register User</button>
            </form>
      
   
    );
  }
}

export default App;
