// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

interface IAuthentication {
    struct User {
        bytes name;
        address address_;
    }

    event MemberEnrolled(address indexed _address, bytes indexed name);

    function createAccount(bytes calldata _name) external;
    function getUserInfoFromName(bytes calldata _name) external view returns (User memory);
    function getAddressFromName(bytes calldata _name) external view returns (address);
    function usernameExist(bytes calldata _name) external view returns (bool);
    function getAllUsers() external view returns (User[] memory);
}
