// // SPDX-License-Identifier: UNLICENSED
// pragma solidity ^0.8.13;

// import {Script, console} from "forge-std/Script.sol";
// import "../src/SalaryStreaming.sol";

// contract SalaryScript is Script {
//     function setUp() public {}

//     function run() public {
//         uint256 privateKey = vm.envUint("DEV_PRIVATE_KEY");
//         address account = vm.addr(privateKey);
//         console.log("account", account);

//         vm.startBroadcast(privateKey);

//         SalaryStreaming salaryStreaming = new SalaryStreaming();

//         vm.stopBroadcast();
//     }
// }
