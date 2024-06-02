// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IStakingPool {
    struct PoolDataReturnedType {
        uint256 totalStakers;
        uint256 totalStaked;
        uint256 rewardReserve;
        uint256 rewardRate;
    }

    event poolCreated(uint256 PoolID, uint256 poolReward, uint256 at, address by);
    event Stake(uint256 poolID, address indexed account, uint256 indexed amount, uint256 at);
    event Unstake(uint256 poolID, address indexed account, uint256 indexed amount, uint256 at);
    event RewardClaim(uint256 poolID, address indexed account, uint256 indexed amount, uint256 at);

    function createPool(uint256 _rewardRate) external;
    function getPoolByID(uint256 _id) external view returns (PoolDataReturnedType memory _pool);
    function stake(uint256 _poolID, uint256 _amount) external;
    function unstake(uint256 _poolID) external;
    function claimReward(uint256 _poolID) external;
    function getUserClaimableReward(uint256 _poolID, address _staker) external view returns (uint256 _reward);
    function getUserStakeBalance(uint256 _poolID, address _account) external view returns (uint256 _stake);
    function getUserPoolRewardPerSec(uint256 _poolID, address _account)
        external
        view
        returns (uint256 _rewardPerSecond);
}
