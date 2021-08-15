import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./Button";
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
      address: "",
      cnic: "",
    };
  }

  async loadBlockchainData() {
    console.log("loadBlockchainData");
    const web3 = window.web3;
    const webeProvider = new Web3(
      Web3.givenProvider || "http://localhost:7545"
    );
    const accounts = await webeProvider.eth.getAccounts();

    this.setState({ address: accounts[0] });

    console.log(this.state.address);
  }

  logoutSubmit = async (event) => {
    event.preventDefault();
    const web3 = window.web3;
    const webeProvider = new Web3(
      Web3.givenProvider || "http://localhost:7545"
    );
    const accounts = await webeProvider.eth.getAccounts();

    this.setState({ address: accounts[0] });
    console.log("Account: " + this.state.address);

    const netId = await web3.eth.net.getId();
    const deployedNetwork = contract.networks[netId];

    const userAuth = new web3.eth.Contract(
      contract.abi,
      deployedNetwork.address
    );

    await userAuth.methods
      .logout(this.state.address)
      .send({ from: this.state.address });
  };

  checkIsUserLogged = async (event) => {
    event.preventDefault();
    const web3 = window.web3;
    const webeProvider = new Web3(
      Web3.givenProvider || "http://localhost:7545"
    );
    const accounts = await webeProvider.eth.getAccounts();

    this.setState({ address: accounts[0] });
    console.log("Account: " + this.state.address);

    const netId = await web3.eth.net.getId();
    const deployedNetwork = contract.networks[netId];

    const userAuth = new web3.eth.Contract(
      contract.abi,
      deployedNetwork.address
    );

    const checkIsUser = await userAuth.methods
      .checkIsUserLogged(this.state.address)
      .call({ from: this.state.address });

    console.log("checkIsUser : " + checkIsUser);
  };

  userRegistration = async (event) => {
    event.preventDefault();

    try {
      const web3 = window.web3;

      const webeProvider = new Web3(
        Web3.givenProvider || "http://localhost:7545"
      );
      const accounts = await webeProvider.eth.getAccounts();
      this.setState({ address: accounts[0] });
      console.log("Account: " + this.state.address);

      const netId = await web3.eth.net.getId();
      const deployedNetwork = contract.networks[netId];

      console.log("Deployed Address :", deployedNetwork.address);

      console.log(this.state.name);
      console.log(this.state.address);
      console.log(this.state.password);
      console.log(this.state.cnic);

      const userAuth = new web3.eth.Contract(
        contract.abi,
        deployedNetwork.address
      );

      await userAuth.methods
        .register(
          this.state.address,
          this.state.name,
          this.state.password,
          this.state.cnic
        )
        .send({ from: this.state.address });
    } catch (e) {
      console.log("User Already registered with this account no");
    }
  };

  userLogin = async (event) => {
    event.preventDefault();

    const web3 = window.web3;

    const webeProvider = new Web3(
      Web3.givenProvider || "http://localhost:7545"
    );
    const accounts = await webeProvider.eth.getAccounts();
    this.setState({ address: accounts[0] });
    console.log("Account: " + this.state.address);

    const netId = await web3.eth.net.getId();
    const deployedNetwork = contract.networks[netId];

    console.log("Deployed Address :", deployedNetwork.address);

    console.log(this.state.password);
    console.log(this.state.address);

    const userAuth = new web3.eth.Contract(
      contract.abi,
      deployedNetwork.address
    );

    const check = await userAuth.methods
      .login(this.state.address, this.state.password)
      .send({ from: this.state.address });

    console.log("Check : " + check);

    const checkIsUser = await userAuth.methods
      .checkIsUserLogged(this.state.address)
      .call({ from: this.state.address });

    console.log("checkIsUser : " + checkIsUser);
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
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
          <Button onClick={this.userRegistration}>Register User</Button>
        </form>

        <div>
          {/* <form>
            <input
              className="footer-input"
              name="password"
              type="text"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <Button
              className="btn--primary"
              color="primary"
              onClick={this.userLogin}
            >
              Login User
            </Button>
          </form> */}

          <Button
            className="btn--primary"
            color="primary"
            onClick={this.checkIsUserLogged}
          >
            Check
          </Button>

          <Button
            className="btn--primary"
            color="primary"
            onClick={this.logoutSubmit}
          >
            logout
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
