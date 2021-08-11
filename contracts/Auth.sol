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

    mapping(address => UserDetail) user;

    // user registration function
    function register(
        address _address,
        string memory _name,
        string memory _password,
        string memory _balance,
        string memory _cnic
    ) public returns (bool) {
        user[_address].addr = _address;
        user[_address].name = _name;
        user[_address].password = _password;
        user[_address].balance = _balance;
        user[_address].CNIC = _cnic;
        user[_address].isUserLoggedIn = true;
        return true;
    }

    function login(address _address, string memory _password)
        public
        returns (bool)
    {
        if (
            keccak256(abi.encodePacked(user[_address].password)) ==
            keccak256(abi.encodePacked(_password))
        ) {
            user[_address].isUserLoggedIn = true;
            return user[_address].isUserLoggedIn;
        } else {
            return false;
        }
    }

    function checkIsUserLogged(address _address) public view returns (bool) {
        return(user[_address].isUserLoggedIn);
    }
    
    function logout(address _address) public  {
        user[_address].isUserLoggedIn = false;
    }
}
