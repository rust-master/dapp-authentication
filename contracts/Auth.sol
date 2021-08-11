pragma solidity >=0.4.0 <0.6.0;

contract AuthContract {
    // authentication function

    struct UserDetail {
        address addr;
        string name;
        string password;
        uint balance;
        string CNIC;
    }


    mapping(string => UserDetail) user;

    // user registration function
    function register(address _address, string memory _name, string memory _password, uint _balance, string memory _cnic) public returns (bool) {
        user[_cnic].addr = _address;
        user[_cnic].name = _name;
        user[_cnic].password = _password;
        user[_cnic].balance = _balance;
        user[_cnic].CNIC = _cnic;
        return true;
    }
}
