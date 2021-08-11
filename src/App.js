import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Web3 from "web3";
import contract from "./build/contracts/Auth.json";
class App extends Component {
  async componentWillMount() {
    console.log("componentWillMount");
    await this.loadWeb3();
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
    this.state = {
      name: "",
      password: "",
      address:  "",
      cnic: "",
      balance: "",
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
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
                name="name"
                type="number"
                placeholder="CNIC"
                value={this.state.cnic}
                onChange={this.handleChange}
              />
              <input
                className="footer-input"
                name="name"
                type="text"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <button>Register User</button>
            </form>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
