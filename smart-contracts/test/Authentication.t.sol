// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "../lib/forge-std/src/Test.sol";
import "../src/Authentication.sol";

contract AuthenticationTest is Test {
    Authentication auth;

    function setUp() public {
        auth = new Authentication();
    }

    function testCreateAccount() public {
        bytes memory name1 = bytes("alice");

        vm.prank(address(0)); // Test zero address case
        vm.expectRevert(Authentication.ZERO_ADDRESS_NOT_ALLOWED.selector);
        auth.createAccount(name1);

        vm.prank(address(this));
        auth.createAccount(name1);
        assertEq(auth.getAddressFromName(name1), address(this));

        vm.expectRevert(Authentication.NAME_NOT_AVAILABLE.selector);
        auth.createAccount(name1);
    }

    function testGetUserInfoFromName() public {
        bytes memory name = bytes("charlie");
        vm.prank(address(this));
        auth.createAccount(name);

        Authentication.User memory user = auth.getUserInfoFromName(name);
        assertEq(user.name, name);
        assertEq(user.address_, address(this));
    }

    function testUsernameExist() public {
        bytes memory name1 = bytes("david");
        bytes memory name2 = bytes("eve");
        
        vm.prank(address(this));
        auth.createAccount(name1);
        assertTrue(auth.usernameExist(name1));
        assertFalse(auth.usernameExist(name2));
    }

    function testGetAllUsers() public {
        bytes memory name1 = bytes("frank");
        bytes memory name2 = bytes("grace");

        vm.prank(address(this));
        auth.createAccount(name1);

        vm.prank(address(0x1234));
        auth.createAccount(name2);

        Authentication.User[] memory users = auth.getAllUsers();
        assertEq(users.length, 2);
        assertEq(users[0].name, name1);
        assertEq(users[0].address_, address(this));
        assertEq(users[1].name, name2);
        assertEq(users[1].address_, address(0x1234));
    }
}
