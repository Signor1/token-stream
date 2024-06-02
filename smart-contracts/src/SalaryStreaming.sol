// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "./ModalContract.sol";

contract SalaryStreaming {
    ModalContract public modalContract;

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
        string name;
        address streamOwner;
    }

    event StreamCreated(
        uint256 indexed streamId,
        address indexed recipient,
        IntervalType intervalType
    );
    event StreamPaused(address indexed recipient, IntervalType intervalType);
    event StreamResumed(address indexed recipient, IntervalType intervalType);
    event StreamStopped(address indexed recipient, IntervalType intervalType);
    event disbursementSuccessful(
        address sender,
        address recipient,
        uint256 amount
    );

    uint256 public fees = 3e18;

    Stream[] public dailyStreams;
    Stream[] public monthlyStreams;

    mapping(uint256 => Stream) public streamsById;

    struct StreamDetails {
        string name;
        address recipient;
        uint256 amount;
    }

    mapping(address => uint256) public streamIdsByAddress;
    uint256 private idDailyCounter = 0;
    uint256 private idMonthlyCounter = 0;

    constructor(address _modal) {
        modalContract = ModalContract(_modal);
    }

    function createStream(
        StreamDetails[] calldata _streamDetails,
        IntervalType intervalType
    ) external {
        if (intervalType == IntervalType.Daily) {
            for (uint256 i = 0; i < _streamDetails.length; i++) {
                uint256 _id = idDailyCounter;
                Stream memory newStream = Stream({
                    id: _id,
                    recipient: _streamDetails[i].recipient,
                    amount: _streamDetails[i].amount,
                    name: _streamDetails[i].name,
                    lastPayment: block.timestamp,
                    startTime: block.timestamp,
                    intervalType: IntervalType.Daily,
                    active: true,
                    streamOwner: msg.sender
                });
                dailyStreams.push(newStream);

                emit StreamCreated(
                    _id,
                    _streamDetails[i].recipient,
                    IntervalType.Daily
                );
                idDailyCounter++;
            }
        } else if (intervalType == IntervalType.Monthly) {
            for (uint256 i = 0; i < _streamDetails.length; i++) {
                uint256 _id = idMonthlyCounter;
                Stream memory newStream = Stream({
                    id: _id,
                    recipient: _streamDetails[i].recipient,
                    amount: _streamDetails[i].amount,
                    name: _streamDetails[i].name,
                    lastPayment: block.timestamp,
                    startTime: block.timestamp,
                    intervalType: IntervalType.Monthly,
                    active: true,
                    streamOwner: msg.sender
                });
                monthlyStreams.push(newStream);

                emit StreamCreated(
                    _id,
                    _streamDetails[i].recipient,
                    IntervalType.Monthly
                );
                idMonthlyCounter++;
            }
        }

        modalContract.subtractFromBalance(msg.sender, fees);

        modalContract.balancePlus(address(modalContract), fees);
    }

    function getAllDailyStreams() external view returns (Stream[] memory) {
        return dailyStreams;
    }

    function getAllMonthlyStreams() external view returns (Stream[] memory) {
        return monthlyStreams;
    }

    function pauseDailyStream(uint256 _streamId) external {
        require(dailyStreams[_streamId].active, "Stream is not active");
        dailyStreams[_streamId].active = false;
        streamsById[dailyStreams[_streamId].id].active = false;
        emit StreamPaused(
            dailyStreams[_streamId].recipient,
            IntervalType.Daily
        );
    }

    function pauseMonthlyStream(uint256 _streamId) external {
        require(monthlyStreams[_streamId].active, "Stream is not active");
        monthlyStreams[_streamId].active = false;
        streamsById[monthlyStreams[_streamId].id].active = false;
        emit StreamPaused(
            monthlyStreams[_streamId].recipient,
            IntervalType.Monthly
        );
    }

    function resumeDailyStream(uint256 _streamId) external {
        require(!dailyStreams[_streamId].active, "Stream is already active");
        dailyStreams[_streamId].active = true;
        streamsById[dailyStreams[_streamId].id].active = true;
        emit StreamResumed(
            dailyStreams[_streamId].recipient,
            IntervalType.Daily
        );
    }

    function resumeMonthlyStream(uint256 _streamId) external {
        require(!monthlyStreams[_streamId].active, "Stream is already active");
        monthlyStreams[_streamId].active = true;
        streamsById[monthlyStreams[_streamId].id].active = true;
        emit StreamResumed(
            monthlyStreams[_streamId].recipient,
            IntervalType.Monthly
        );
    }

    function disburseDaily() external {
        for (uint256 i = 0; i < dailyStreams.length; i++) {
            if (dailyStreams[i].active == true) {
                modalContract.transfer(
                    dailyStreams[i].streamOwner,
                    dailyStreams[i].recipient,
                    dailyStreams[i].amount
                );

                emit disbursementSuccessful(
                    dailyStreams[i].streamOwner,
                    dailyStreams[i].recipient,
                    dailyStreams[i].amount
                );
            }
        }
    }

    function disburseMonthly() external {
        for (uint256 i = 0; i < monthlyStreams.length; i++) {
            if (monthlyStreams[i].active == true) {
                modalContract.transfer(
                    monthlyStreams[i].streamOwner,
                    monthlyStreams[i].recipient,
                    monthlyStreams[i].amount
                );

                emit disbursementSuccessful(
                    monthlyStreams[i].streamOwner,
                    monthlyStreams[i].recipient,
                    monthlyStreams[i].amount
                );
            }
        }
    }
}
//  [["0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",100],["0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",200]]
