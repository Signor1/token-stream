// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.20;

contract Authentication {
    error ZERO_ADDRESS_NOT_ALLOWED();
    error NAME_NOT_AVAILABLE();

    struct User {
        bytes name;
        address address_;
    }

    event MemberEnrolled(address indexed _address, bytes indexed name);

    mapping(address => User) addressToUserInfo;

    // Since bytes cannot be used directly as a key in a mapping,
    // you might need to use a different approach for nameToAddress.
    // For simplicity, this example uses a mapping from string to address.
    mapping(string => address) nameToAddress;

    User[] public users;

    function createAccount(bytes calldata _name) external {
        if (msg.sender == address(0)) {
            revert ZERO_ADDRESS_NOT_ALLOWED();
        }
        // Convert bytes to string for the mapping key
        string memory nameStr = bytesToString(_name);
        if (nameToAddress[nameStr] != address(0)) {
            revert NAME_NOT_AVAILABLE();
        }

        nameToAddress[nameStr] = msg.sender;

        User storage newUser_ = addressToUserInfo[msg.sender];
        newUser_.name = _name;
        newUser_.address_ = msg.sender;

        users.push(newUser_);

        emit MemberEnrolled(msg.sender, _name);
    }

    // Utility function to convert bytes to string
    function bytesToString(
        bytes memory data
    ) private pure returns (string memory) {
        return string(data);
    }

    function getUserInfoFromName(
        bytes calldata _name
    ) external view returns (User memory) {
        string memory nameStr = bytesToString(_name);
        return addressToUserInfo[nameToAddress[nameStr]];
    }

    function getAddressFromName(
        bytes calldata _name
    ) external view returns (address) {
        string memory nameStr = bytesToString(_name);
        return nameToAddress[nameStr];
    }

    function usernameExist(bytes calldata _name) external view returns (bool) {
        string memory nameStr = bytesToString(_name);
        return nameToAddress[nameStr] != address(0);
    }

    function getAllUsers() external view returns (User[] memory) {
        return users;
    }

    function getUserInfo(
        address _userAddress
    ) external view returns (User memory) {
        return addressToUserInfo[_userAddress];
    }
}
