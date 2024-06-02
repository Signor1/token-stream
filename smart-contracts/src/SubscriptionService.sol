// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "./ModalContract.sol";

error INSUFFICIENT_FUNDS();
error INVALID_ID_PLAN();
error SUBSCRIPTION_HAS_NOT_BEEN_STOPPED();
error SUBSCRIPTION_ACTIVE();
error YOU_ARE_NOT_SUBSCRIBED();
error SUBSCRIPTION_NOT_ACTIVE();
error ALREADY_SUBSCRIBED_TO_THIS_PLAN();
error PLAN_IS_NOT_ACTIVE();
error INVALID_PLAN_ID();
error ONLY_THE_ONLY_OWNER_CAN_CALL_THIS_FUNCTION();

contract SubscriptionService {
    ModalContract public modalContract;

    address public owner;
    address paymentAddress;

    struct SubscriptionPlan {
        string name;
        uint256 fee;
        bool active;
    }

    struct Subscriber {
        bool active;
        string name;
        uint256 fee;
        address userAddress;
        uint256 subPlanId;
        string email;
        string password;
    }

    Subscriber[] public subArr;

    mapping(address => Subscriber[]) public subs;

    uint256 public charges = 1e18;

    SubscriptionPlan[] plans;

    mapping(address => uint256) public balances;
    mapping(address => mapping(uint256 => bool)) public activeSubscriptions;
    mapping(address => mapping(uint256 => bool)) public stoppedSubscriptions;

    event SubscriptionPlanCreated(
        address creator,
        uint256 planfee,
        string planName
    );
    event SubscriptionPlanUpdated(
        address creator,
        uint256 planfee,
        string planName
    );
    event SubscriptionStarted(address indexed subscriber, uint256 planId);
    event SubscriptionPaused(address indexed subscriber, uint256 planId);
    event SubscriptionResumed(address indexed subscriber, uint256 planId);
    event SubscriptionPaid(address from, address to, uint256 fee);
    event SubscriptionPlanDeactivated(uint256 planId);
    event SubscriptionPlanActivated(uint256 planId);

    constructor(address _modal, address _paymentAddr) {
        modalContract = ModalContract(_modal);
        owner = msg.sender;
        paymentAddress = _paymentAddr;
    }

    function onlyOwner() private view {
        if (msg.sender != owner) {
            revert ONLY_THE_ONLY_OWNER_CAN_CALL_THIS_FUNCTION();
        }
    }

    function addSubscriptionPlan(string memory _name, uint256 _fee) external {
        onlyOwner();
        plans.push(SubscriptionPlan(_name, _fee, true));
        emit SubscriptionPlanCreated(msg.sender, _fee, _name);
    }

    function updateSubscriptionPlan(
        uint256 planId,
        string memory _name,
        uint256 _fee
    ) external {
        onlyOwner();
        if (planId >= plans.length) {
            revert INVALID_PLAN_ID();
        }
        plans[planId] = SubscriptionPlan(_name, _fee, true);
        emit SubscriptionPlanUpdated(msg.sender, _fee, _name);
    }

    function startSubscription(
        uint256 planId,
        string memory _email,
        string memory _password
    ) public {
        if (planId >= plans.length) {
            revert INVALID_PLAN_ID();
        }
        if (!plans[planId].active) {
            revert PLAN_IS_NOT_ACTIVE();
        }
        if (activeSubscriptions[msg.sender][planId]) {
            revert ALREADY_SUBSCRIBED_TO_THIS_PLAN();
        }
        if (modalContract.getBalances(msg.sender) <= plans[planId].fee) {
            revert INSUFFICIENT_FUNDS();
        }
        Subscriber memory newSubscriber;
        newSubscriber.active = true;
        newSubscriber.name = plans[planId].name;
        newSubscriber.fee = plans[planId].fee;
        newSubscriber.userAddress = msg.sender;
        newSubscriber.subPlanId = planId;
        newSubscriber.email = _email;
        newSubscriber.password = _password;
        subArr.push(newSubscriber);
        activeSubscriptions[msg.sender][planId] = true;
        subs[msg.sender].push(newSubscriber);

        modalContract.subtractFromBalance(msg.sender, charges);

        modalContract.balancePlus(address(modalContract), charges);

        emit SubscriptionStarted(msg.sender, planId);
    }

    function pauseSubscription(uint256 planId) external {
        if (!activeSubscriptions[msg.sender][planId]) {
            revert SUBSCRIPTION_NOT_ACTIVE();
        }
        activeSubscriptions[msg.sender][planId] = false;
        stoppedSubscriptions[msg.sender][planId] = true;
        subs[msg.sender][planId].active = false;

        emit SubscriptionPaused(msg.sender, planId);
    }

    function resumeSubscription(uint256 planId) external {
        if (activeSubscriptions[msg.sender][planId]) {
            revert SUBSCRIPTION_ACTIVE();
        }
        if (!stoppedSubscriptions[msg.sender][planId]) {
            revert SUBSCRIPTION_HAS_NOT_BEEN_STOPPED();
        }
        activeSubscriptions[msg.sender][planId] = true;
        stoppedSubscriptions[msg.sender][planId] = false;
        subs[msg.sender][planId].active = true;

        emit SubscriptionResumed(msg.sender, planId);
    }

    function deactivateSubscriptionPlan(uint256 planId) external {
        onlyOwner();
        if (planId >= plans.length) {
            revert INVALID_ID_PLAN();
        }
        plans[planId].active = false;
        emit SubscriptionPlanDeactivated(planId);
    }

    function activateSubscriptionPlan(uint256 planId) external {
        onlyOwner();
        if (planId >= plans.length) {
            revert INVALID_ID_PLAN();
        }
        plans[planId].active = true;
        emit SubscriptionPlanActivated(planId);
    }

    function processSubscriptionPayments() external {
        for (uint256 i = 0; i < subArr.length; i++) {
            Subscriber memory subscriber = subArr[i];
            if (subscriber.active) {
                modalContract.transfer(
                    subscriber.userAddress,
                    paymentAddress,
                    subscriber.fee
                );

                emit SubscriptionPaid(
                    subscriber.userAddress,
                    paymentAddress,
                    subscriber.fee
                );
            }
        }
    }

    function getAllSubscriptionPlans()
        external
        view
        returns (SubscriptionPlan[] memory)
    {
        return plans;
    }

    function getSubscriptionsOfAddress(
        address _add
    ) external view returns (Subscriber[] memory) {
        return subs[_add];
    }
}
// 80002
// TNCB3W517S27IWUWG84TPF1PCJI5YQTZEA
// https://rpc-amoy.polygon.technology/
