pragma solidity >=0.4.0 <0.6.0;

contract Auth {
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
    ) public notAdmin returns (bool) {
        require(user[_address].addr != msg.sender);
        user[_address].addr = _address;
        user[_address].name = _name;
        user[_address].password = _password;
        user[_address].balance = _balance;
        user[_address].CNIC = _cnic;
        user[_address].isUserLoggedIn = false;
        return true;
    }

    // user login function
    function login(
        address _address,
        string memory _password,
        string memory _balance
    ) public returns (bool) {
        if (
            keccak256(abi.encodePacked(user[_address].password)) ==
            keccak256(abi.encodePacked(_password))
        ) {
            user[_address].isUserLoggedIn = true;
            updateUserBalance(user[_address].addr, _balance);
            return user[_address].isUserLoggedIn;
        } else {
            updateUserBalance(user[_address].addr, _balance);
            return false;
        }
    }

    function updateUserBalance(address _address, string memory _balance)
        public
    {
        user[_address].balance = _balance;
    }

    // check the user logged In or not
    function checkIsUserLogged(address _address) public view returns (bool) {
        return (user[_address].isUserLoggedIn);
    }

    // logout the user
    function logout(address _address, string memory _balance) public {
        user[_address].isUserLoggedIn = false;
        updateUserBalance(user[_address].addr, _balance);
    }

    struct AdminDetail {
        address adminAddress;
        string name;
        string password;
        string balance;
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
        string memory _password,
        string memory _balance
    ) public onlyAdmin returns (bool) {
        require(admin[_address].adminAddress != msg.sender);
        admin[_address].adminAddress = _address;
        admin[_address].name = _name;
        admin[_address].password = _password;
        admin[_address].balance = _balance;
        admin[_address].isAdminLoggedIn = false;
        return true;
    }

    // admin login function
    function loginAdmin(
        address _address,
        string memory _password,
        string memory _balance
    ) public returns (bool) {
        if (
            keccak256(abi.encodePacked(admin[_address].password)) ==
            keccak256(abi.encodePacked(_password))
        ) {
            admin[_address].isAdminLoggedIn = true;
            updateAdminBalance(admin[_address].adminAddress, _balance);
            return admin[_address].isAdminLoggedIn;
        } else {
            updateAdminBalance(admin[_address].adminAddress, _balance);
            return false;
        }
    }

    function updateAdminBalance(address _address, string memory _balance)
        public
    {
        admin[_address].balance = _balance;
    }

    // check the admin logged In or not
    function checkIsAdminLogged(address _address) public view returns (bool) {
        return (admin[_address].isAdminLoggedIn);
    }

    // logout the admin
    function logoutAdmin(address _address, string memory _balance) public {
        admin[_address].isAdminLoggedIn = false;
        updateAdminBalance(admin[_address].adminAddress, _balance);
    }
}
