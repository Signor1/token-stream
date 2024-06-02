// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../src/SubscriptionService.sol";
import "../src/ModalContract.sol";
import "../src/Interfaces/IERC20.sol";

contract SubscriptionServiceTest is Test {
    // Set up the contract and variables
    IERC20 public OpToken;
    SubscriptionService public subscriptionService;
    ModalContract public modalContract;
    address public owner;
    address public paymentAddress;

    function setUp() public {
        owner = address(this);
        paymentAddress = address(0x123);
        modalContract = new ModalContract(address(OpToken));
        subscriptionService = new SubscriptionService(address(modalContract), paymentAddress);
    }

    // Test adding a subscription plan
    function testAddSubscriptionPlan() public {
        string memory planName = "Basic Plan";
        uint256 planFee = 1000;
        subscriptionService.addSubscriptionPlan(planName, planFee);
        assertEq(subscriptionService.getAllSubscriptionPlans().length, 1);
        assertEq(subscriptionService.getAllSubscriptionPlans()[0].name, planName);
        assertEq(subscriptionService.getAllSubscriptionPlans()[0].fee, planFee);
    }

    // Test starting a subscription
    // function testStartSubscription() public {
    //     string memory planName = "Basic Plan";
    //     uint256 planFee = 1e18;
    //     OpToken.approve(address(modalContract),10e18);
    //     modalContract.deposit(5e18);
    //     subscriptionService.addSubscriptionPlan(planName, planFee);
    //     subscriptionService.startSubscription(0); 
    //     assertEq(subscriptionService.getSubscriptionsOfAddress(msg.sender).length, 1);
    // }

//     // Test pausing a subscription
//     function testPauseSubscription() public {
//         string memory planName = "Basic Plan";
//         uint256 planFee = 1000;
//         subscriptionService.addSubscriptionPlan(planName, planFee);
//         assertTrue(subscriptionService.startSubscription(0)); // Start the subscription
//         assertTrue(subscriptionService.pauseSubscription(0)); // Pause the subscription
//         assertFalse(subscriptionService.getSubscriptionsOfAddress(msg.sender)[0].active);
//     }

//     // Test resuming a subscription
//     function testResumeSubscription() public {
//         string memory planName = "Basic Plan";
//         uint256 planFee = 1000;
//         subscriptionService.addSubscriptionPlan(planName, planFee);
// assertEq(subscriptionService.startSubscription(0), true);
//         assertEq(subscriptionService.pauseSubscription(0)); // Pause the subscription
//         assertTrue(subscriptionService.resumeSubscription(0)); // Resume the subscription
//         assertTrue(subscriptionService.getSubscriptionsOfAddress(msg.sender)[0].active);
//     }

//     // Test processing subscription payments
//     function testProcessSubscriptionPayments() public {
//         string memory planName = "Basic Plan";
//         uint256 planFee = 1000;
//         subscriptionService.addSubscriptionPlan(planName, planFee);
//         assertTrue(subscriptionService.startSubscription(0)); // Start the subscription
//         assertTrue(subscriptionService.processSubscriptionPayments()); // Process payments
//         // Additional assertions to verify the payment was processed correctly
//     }
}