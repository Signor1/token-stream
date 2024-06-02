// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// import "forge-std/Test.sol";

// import {SalaryStreaming} from "../src/SalaryStreaming.sol";
// import {ModalContract} from "../contracts/ModalContract.sol";

// contract SalaryStreamingTest is Test {
//     SalaryStreaming public salaryStreaming;
//     ModalContract public modalContract;

//     address public recipient1 = address(1);
//     address public recipient2 = address(2);
//     address public streamOwner = address(this);

//     function setUp() public {
//         modalContract = new ModalContract();
//         salaryStreaming = new SalaryStreaming();
//     }

//     function testCreateStream() public {
//         StreamDetails[] memory streamDetails = [
//             StreamDetails(recipient1, 100),
//             StreamDetails(recipient2, 200)
//         ];..

//         salaryStreaming.createStream(streamDetails, IntervalType.Daily);

//         assertEq(salaryStreaming.dailyStreams.length, 2);
//         assertEq(salaryStreaming.streamIdsByAddress[recipient1], 0);
//         assertEq(salaryStreaming.streamIdsByAddress[recipient2], 1);
//     }

//     function testStopStream() public {
//         StreamDetails[] memory streamDetails = [StreamDetails(recipient1, 100)];

//         salaryStreaming.createStream(streamDetails, IntervalType.Daily);
//         salaryStreaming.stopDailyStream(recipient1);

//         assertEq(salaryStreaming.dailyStreams[0].active, false);
//     }

//     function testResumeStream() public {
//         StreamDetails[] memory streamDetails = [StreamDetails(recipient1, 100)];

//         salaryStreaming.createStream(streamDetails, IntervalType.Daily);
//         salaryStreaming.stopDailyStream(recipient1);
//         salaryStreaming.resumeDailyStream(recipient1);

//         assertEq(salaryStreaming.dailyStreams[0].active, true);
//     }

//     function testDisburseDaily() public {
//         StreamDetails[] memory streamDetails = [StreamDetails(recipient1, 100)];

//         salaryStreaming.createStream(streamDetails, IntervalType.Daily);
//         salaryStreaming.disburseDaily();

//         // Assert that the disbursement was successful
//     }
// }
