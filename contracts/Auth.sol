pragma solidity >=0.4.0 <0.6.0;

contract Auth {
    struct UserDetail {
        address addr;
        string name;
        string password;
        string CNIC;
        bool isUserLoggedIn;
    }

    mapping(address => UserDetail) user;

    // user registration function
    function register(
        address _address,
        string memory _name,
        string memory _password,
        string memory _cnic
    ) public notAdmin returns (bool) {
        require(user[_address].addr != msg.sender);
        user[_address].addr = _address;
        user[_address].name = _name;
        user[_address].password = _password;
        user[_address].CNIC = _cnic;
        user[_address].isUserLoggedIn = false;
        return true;
    }

    // user login function
    function login(
        address _address,
        string memory _password
    ) public returns (bool) {
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

    // check the user logged In or not
    function checkIsUserLogged(address _address) public view returns (bool) {
        return (user[_address].isUserLoggedIn);
    }

    // logout the user
    function logout(address _address) public {
        user[_address].isUserLoggedIn = false;
    }

    struct AdminDetail {
        address adminAddress;
        string name;
        string password;
        bool isAdminLoggedIn;
    }
    mapping(address => AdminDetail) admin;
    // admin registration function

    address adminAddress;

    constructor() public {
        adminAddress = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    }

    modifier onlyAdmin() {
        require(msg.sender == adminAddress);
        _;
    }

    modifier notAdmin() {
        require(msg.sender != adminAddress);
        _;
    }

    function registerAdmin(
        address _address,
        string memory _name,
        string memory _password
    ) public onlyAdmin returns (bool) {
        require(admin[_address].adminAddress != msg.sender);
        admin[_address].adminAddress = _address;
        admin[_address].name = _name;
        admin[_address].password = _password;
        admin[_address].isAdminLoggedIn = false;
        return true;
    }

    // admin login function
    function loginAdmin(
        address _address,
        string memory _password
    ) public returns (bool) {
        if (
            keccak256(abi.encodePacked(admin[_address].password)) ==
            keccak256(abi.encodePacked(_password))
        ) {
            admin[_address].isAdminLoggedIn = true;
            return admin[_address].isAdminLoggedIn;
        } else {
            return false;
        }
    }

    // check the admin logged In or not
    function checkIsAdminLogged(address _address) public view returns (bool) {
        return (admin[_address].isAdminLoggedIn);
    }

    // logout the admin
    function logoutAdmin(address _address) public {
        admin[_address].isAdminLoggedIn = false;
    }
}
