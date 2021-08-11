const Auth = artifacts.require("Auth");

module.exports = function(_deployer) {
  _deployer.deploy(Auth);
};