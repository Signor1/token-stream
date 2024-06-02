// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "./Interfaces/IERC20.sol";

error ONLY_THE_OWNER_CAN_PERFORM_THIS_ACTION();
error INSUFFICIENT_BALANCE();
error YOU_DO_NOT_HAVE_REWARDS();
error YOU_ARE_NOT_THE_NEXT_OWNER();
error INSUFFICIENT_ALLOWANCE();

contract ModalContract {
    IERC20 public OPToken;
    address public owner;
    address nextOwner;
    uint256 public totalFees;
    uint256 totalDeposit;
    uint256 totalWithdrawal;

    event DepositSuccessful(address indexed user, uint256 _amount);
    event WithdrawalSuccessful(address indexed user, uint256 _amount);
    event DeductionSuccessful(address user, uint256 _amount);
    event AdditionSuccessful(address user, uint256 _amount);
    event TransferSuccessful(address sender, address receiver, uint256 _amount);

    constructor(address _OPToken) {
        OPToken = IERC20(_OPToken);
        owner = msg.sender;
    }

    // user balance in the contract
    mapping(address => uint256) public balances;

    function onlyOwner() private view {
        if (msg.sender != owner) {
            revert ONLY_THE_OWNER_CAN_PERFORM_THIS_ACTION();
        }
    }

    function deposit(uint256 _amount) external {
        if (OPToken.balanceOf(msg.sender) < _amount) {
            revert INSUFFICIENT_BALANCE();
        }

        OPToken.transferFrom(msg.sender, address(this), _amount);
        balances[msg.sender] += _amount;
        totalDeposit += _amount;
        emit DepositSuccessful(msg.sender, _amount);
    }

    function getTotalDeposit() external view returns (uint256) {
        return totalDeposit;
    }

    function getTotalWithdrawal() external view returns (uint256) {
        return totalWithdrawal;
    }

    // Function to withdraw from the contract
    function withdraw(uint256 _amount) external {
        if (balances[msg.sender] < _amount) {
            revert INSUFFICIENT_BALANCE();
        }
        totalWithdrawal += _amount;
        balances[msg.sender] -= _amount;
        OPToken.transfer(address(this), _amount);
        emit WithdrawalSuccessful(msg.sender, _amount);
    }

    //change ownership
    function transferOwnership(address _newOwner) external {
        onlyOwner();
        nextOwner = _newOwner;
    }

    function claimOwnership() external {
        if (msg.sender != nextOwner) {
            revert YOU_ARE_NOT_THE_NEXT_OWNER();
        }

        owner = msg.sender;

        nextOwner = address(0);
    }

    function getBalances(address _address) external view returns (uint256) {
        return balances[_address];
    }

    function subtractFromBalance(
        address _userAddress,
        uint256 _amount
    ) external {
        balances[_userAddress] = balances[_userAddress] - _amount;
        emit DeductionSuccessful(_userAddress, _amount);
    }

    function transfer(
        address _sender,
        address _recipient,
        uint256 _amount
    ) external {
        if (balances[_sender] <= _amount) {
            revert INSUFFICIENT_BALANCE();
        }

        balances[_sender] = balances[_sender] - _amount;

        OPToken.transfer(_recipient, _amount);
        emit TransferSuccessful(_sender, _recipient, _amount);
    }

    function contractBalance() public view returns (uint256) {
        return balances[address(this)];
    }

    function balancePlus(address _address, uint256 _amount) external {
        balances[_address] = balances[_address] + _amount;
        emit AdditionSuccessful(_address, _amount);
    }

    function depositBalance() public view returns (uint256) {
        return OPToken.balanceOf(address(this));
    }
}
