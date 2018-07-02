pragma solidity ^0.4.4;

contract CompaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint m) public {
        // this return node's address
        address newCampaign = new Campaign(m, msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns(address[]) {
        return deployedCampaigns;
    }

}
contract Campaign {
    struct Request {
        string description;
        uint amount;
        address recipient;
        bool compelete;
        mapping(address => bool) approvals;
        uint approvalCount;
    }

    address public manager;
    uint public minimumContribution = 0;
    mapping(address => bool) public approvers;
    Request[] public requests;
    uint public totalApprovers = 0;
    uint pool = 0;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    constructor (uint m, address sender) public {
        require(m >= 0);
        //require(manager == undefined);
        minimumContribution = m;
        manager = sender;
    }


    function contribute() public payable {
        require(msg.value >= minimumContribution);
        approvers[msg.sender] = true;
        totalApprovers ++;
        // pool += transfered money
    }

    function createRequest (string des, uint amount, address rec) public restricted {
        Request memory newRequest = Request({
            description: des,
            amount: amount,
            recipient: rec,
            compelete: false,
            approvalCount: 0
        });
        requests.push(newRequest);
    }

    function approveRequest(uint i) public {
        require(approvers[msg.sender]);
        require(!requests[i].approvals[msg.sender]);
        requests[i].approvalCount ++;
        requests[i].approvals[msg.sender] = true;
    }

    function finalizeRequest(uint i) public restricted payable{
        require(requests[i].approvalCount * 2 > totalApprovers);
        require(!requests[i].compelete);

        requests[i].compelete = true;
        requests[i].recipient.transfer(requests[i].amount);

    }

}
