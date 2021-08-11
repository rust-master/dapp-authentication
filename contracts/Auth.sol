pragma solidity >=0.4.0 <0.6.0;

contract Auth {
    // authentication function

    struct UserDetail {
        address addr;
        string name;
        string password;
        string balance;
        string CNIC;
        bool isUserLoggedIn;
    }

    mapping(string => UserDetail) user;

    // user registration function
    function register(
        address _address,
        string memory _name,
        string memory _password,
        string memory _balance,
        string memory _cnic
    ) public returns (bool) {
        user[_cnic].addr = _address;
        user[_cnic].name = _name;
        user[_cnic].password = _password;
        user[_cnic].balance = _balance;
        user[_cnic].CNIC = _cnic;
        return true;
    }

    function login(string memory _cnic, string memory _password)
        public
        returns (bool)
    {
        if (keccak256(abi.encodePacked(user[_cnic].password)) == keccak256(abi.encodePacked(_password))) {
             user[_cnic].isUserLoggedIn = true;
            return true;
        } else {
             user[_cnic].isUserLoggedIn = false;
            return false;
        }
    }
}
