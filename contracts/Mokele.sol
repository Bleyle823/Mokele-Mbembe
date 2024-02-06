// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Address.sol";

contract FossilCrowdfunding {
    using SafeMath for uint256;
    using Address for address payable;

    address payable public projectOwner;
    uint256 public fundingGoal;
    uint256 public deadline;
    mapping(address => uint256) public contributions;
    uint256 public totalContributions;

    bool public fundingGoalReached;
    bool public crowdsaleClosed;

    event FundingGoalReached(uint256 totalAmountRaised);
    event ContributionReceived(address contributor, uint256 amountContributed);
    event RefundSent(address contributor, uint256 amountRefunded);

    constructor(address payable _projectOwner, uint256 _fundingGoal, uint256 _durationInDays) {
        require(_projectOwner != address(0), "Invalid project owner address");
        require(_fundingGoal > 0, "Funding goal must be greater than zero");
        require(_durationInDays > 0, "Crowdfunding duration must be greater than zero");

        projectOwner = _projectOwner;
        fundingGoal = _fundingGoal;
        deadline = block.timestamp.add(_durationInDays * 1 days);
    }

    modifier onlyOwner() {
        require(msg.sender == projectOwner, "Only project owner can call this function");
        _;
    }

    modifier notClosed() {
        require(!crowdsaleClosed, "Crowdsale is closed");
        _;
    }

    function contribute() external payable notClosed {
        require(block.timestamp < deadline, "Crowdfunding period has ended");
        require(msg.value > 0, "Contribution amount must be greater than zero");

        contributions[msg.sender] = contributions[msg.sender].add(msg.value);
        totalContributions = totalContributions.add(msg.value);
        
        emit ContributionReceived(msg.sender, msg.value);

        if (totalContributions >= fundingGoal) {
            fundingGoalReached = true;
            emit FundingGoalReached(totalContributions);
        }
    }

    function withdrawFunds() external onlyOwner {
        require(fundingGoalReached, "Funding goal has not been reached");
        require(address(this).balance > 0, "No funds available to withdraw");

        projectOwner.sendValue(address(this).balance);
        crowdsaleClosed = true;
    }

    function reclaimContribution() external {
        require(!fundingGoalReached, "Funding goal has been reached");
        require(block.timestamp >= deadline, "Crowdfunding period has not ended");
        require(contributions[msg.sender] > 0, "No contribution to reclaim");

        uint256 refundAmount = contributions[msg.sender];
        contributions[msg.sender] = 0;
        totalContributions = totalContributions.sub(refundAmount);
        payable(msg.sender).sendValue(refundAmount);

        emit RefundSent(msg.sender, refundAmount);
    }
}