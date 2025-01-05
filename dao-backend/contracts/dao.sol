// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DAO {
    address public owner;
    uint256 public memberCount;
    mapping(address => bool) public members;
    mapping(address => uint256) public votes;

    event NewMember(address indexed member);
    event NewProposal(address indexed proposer, uint256 proposalId);
    event VoteCasted(
        address indexed voter,
        uint256 proposalId,
        uint256 voteCount
    );

    struct Proposal {
        string description;
        uint256 voteCount;
        bool executed;
        mapping(address => bool) voters;
    }

    Proposal[] public proposals;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can execute this");
        _;
    }

    modifier onlyMember() {
        require(members[msg.sender], "Only members can execute this");
        _;
    }

    constructor() {
        owner = msg.sender;
        memberCount = 0;
    }

    // Add a new member to the DAO
    function addMember(address newMember) public onlyOwner {
        require(!members[newMember], "Already a member");
        members[newMember] = true;
        memberCount++;
        emit NewMember(newMember);
    }

    // Remove a member from the DAO
    function removeMember(address member) public onlyOwner {
        require(members[member], "Not a member");
        members[member] = false;
        memberCount--;
    }

    // Create a new proposal
    function createProposal(string memory description) public onlyMember {
        uint256 proposalId = proposals.length;
        Proposal storage newProposal = proposals.push();
        newProposal.description = description;
        emit NewProposal(msg.sender, proposalId);
    }

    // Cast a vote for a proposal
    function vote(uint256 proposalId) public onlyMember {
        Proposal storage proposal = proposals[proposalId];
        require(
            !proposal.voters[msg.sender],
            "You have already voted for this proposal"
        );
        proposal.voters[msg.sender] = true;
        proposal.voteCount++;
        emit VoteCasted(msg.sender, proposalId, proposal.voteCount);
    }

    // Execute the proposal if it has enough votes
    function executeProposal(uint256 proposalId) public onlyMember {
        Proposal storage proposal = proposals[proposalId];
        require(
            proposal.voteCount > memberCount / 2,
            "Not enough votes to execute the proposal"
        );
        require(!proposal.executed, "Proposal already executed");
        proposal.executed = true;
        // Implement the execution logic here
    }

    // Retrieve the proposal count
    function getProposalCount() public view returns (uint256) {
        return proposals.length;
    }
}
