// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface ISubscriptionService {
    struct SubscriptionPlan {
        string name;
        uint256 fee;
        uint256 interval;
        address paymentAddress;
        bool active;
    }

    event SubscriptionStarted(address indexed subscriber, uint256 planId);
    event SubscriptionPaused(address indexed subscriber, uint256 planId);
    event SubscriptionResumed(address indexed subscriber, uint256 planId);
    event SubscriptionStopped(address indexed subscriber, uint256 planId);
    event SubscriptionPlanDeactivated(uint256 planId);

    function addSubscriptionPlan(string memory _name, uint256 _fee, uint256 _interval, address _paymentAddress)
        external;
    function updateSubscriptionPlan(
        uint256 planId,
        string memory _name,
        uint256 _fee,
        uint256 _interval,
        address _paymentAddress
    ) external;
    function startSubscription(uint256 planId) external;
    function pauseSubscription(uint256 planId) external;
    function resumeSubscription(uint256 planId) external;
    function stopSubscription(uint256 planId) external;
    function deactivateSubscriptionPlan(uint256 planId) external;
    function createCustomSubscription(string memory _name, uint256 _fee, uint256 _interval, address _paymentAddress)
        external;
    function getUserSubscriptions(address user) external view returns (uint256[] memory);
    function getAllSubscriptionPlans() external view returns (SubscriptionPlan[] memory);
}
