# Voting Contract

A decentralized voting system built on Ethereum using Solidity smart contracts. This project implements a ballot system with delegation capabilities, allowing voters to delegate their voting rights to other addresses.

## 🎯 Features

- **Decentralized Voting**: Secure and transparent voting on the Ethereum blockchain
- **Voting Rights Management**: Chairperson can grant voting rights to specific addresses
- **Vote Delegation**: Voters can delegate their votes to other addresses
- **Multiple Proposals**: Support for multiple ballot proposals
- **Automatic Winner Calculation**: Built-in functions to determine the winning proposal
- **Gas Efficient**: Optimized for cost-effective transactions

## 📋 Smart Contract Functions

### Core Functions

- `constructor(bytes32[] memory proposalNames)` - Initialize ballot with proposals
- `giveRightToVote(address voter)` - Grant voting rights (chairperson only)
- `delegate(address to)` - Delegate vote to another address
- `vote(uint proposal)` - Cast vote for a specific proposal
- `winningProposal()` - Get the index of the winning proposal
- `winnerName()` - Get the name of the winning proposal

### View Functions

- `voters(address)` - Get voter information
- `proposals(uint)` - Get proposal information
- `chairperson()` - Get the chairperson address

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A wallet with Sepolia testnet ETH
- Infura or Alchemy account for RPC access

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd voting-contract

# Install dependencies
npm install
```

### Configuration

1. Copy the environment template:

   ```bash
   copy env.example .env
   ```

2. Edit `.env` with your credentials:
   ```
   PRIVATE_KEY=your_private_key_here
   SEPOLIA_URL=https://sepolia.infura.io/v3/your_project_id
   ETHERSCAN_API_KEY=your_etherscan_api_key_here
   ```

### Compilation

```bash
npx hardhat compile
```

### Deployment

```bash
# Deploy to Sepolia testnet
npx hardhat run scripts/deploy.ts --network sepolia
```

### Testing

```bash
# Run tests
npx hardhat test
```

## 📖 Usage

### After Deployment

1. **Grant Voting Rights**:

   ```javascript
   await ballot.giveRightToVote(voterAddress);
   ```

2. **Cast a Vote**:

   ```javascript
   await ballot.vote(proposalIndex); // 0, 1, or 2
   ```

3. **Delegate Vote**:

   ```javascript
   await ballot.delegate(delegateAddress);
   ```

4. **Check Winner**:
   ```javascript
   const winnerIndex = await ballot.winningProposal();
   const winnerName = await ballot.winnerName();
   ```

## 🔧 Development

### Project Structure

```
voting-contract/
├── contracts/
│   └── voting.sol          # Main voting contract
├── scripts/
│   └── deploy.ts           # Deployment script
├── test/                   # Test files
├── hardhat.config.ts       # Hardhat configuration
├── package.json
└── README.md
```

### Adding New Proposals

Edit `scripts/deploy.ts` and modify the `proposalNames` array:

```typescript
const proposalNames = [
  ethers.encodeBytes32String("Your Proposal 1"),
  ethers.encodeBytes32String("Your Proposal 2"),
  // Add more proposals as needed
];
```

## 🔒 Security Considerations

- **Private Key Security**: Never commit your `.env` file or expose your private key
- **Access Control**: Only the chairperson can grant voting rights
- **Vote Validation**: Contract prevents double voting and invalid proposals
- **Delegation Loops**: Contract prevents circular delegation

## 🌐 Networks

- **Sepolia Testnet**: Recommended for testing
- **Mainnet**: For production deployment (not recommended for testing)

## 📚 Documentation

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues:

1. Check the [DEPLOYMENT.md](./DEPLOYMENT.md) guide
2. Ensure your environment variables are correctly set
3. Verify you have sufficient Sepolia ETH for gas fees
4. Check that your RPC URL is working correctly
