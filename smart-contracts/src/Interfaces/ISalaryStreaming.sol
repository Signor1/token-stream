// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ISalaryStreaming {
    enum IntervalType {
        None,
        Daily,
        Monthly
    }

    struct Stream {
        uint256 id;
        address recipient;
        uint256 amount;
        uint256 lastPayment;
        uint256 startTime;
        IntervalType intervalType;
        bool active;
    }

    event StreamPaused(uint256 indexed streamId, address indexed recipient);
    event StreamResumed(uint256 indexed streamId, address indexed recipient);
    event StreamCreated(uint256 indexed streamId, address indexed recipient, IntervalType intervalType);
    event StreamStopped(uint256 indexed streamId, address indexed recipient);

    function createStream(address[] calldata recipients, uint256[] calldata amounts, uint8[] calldata intervalTypes)
        external;

    function pauseStream(address recipient) external;
    function resumeStream(address recipient) external;
    function stopStream(address recipient) external;
    function checkDailySubscriptions() external view returns (Stream[] memory);
    function checkMonthlySubscriptions() external view returns (Stream[] memory);
}
