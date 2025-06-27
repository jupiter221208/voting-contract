# Voting Contract Deployment Guide

This guide will help you deploy the voting smart contract to the Sepolia testnet.

## Prerequisites

1. **Node.js and npm** (already installed)
2. **A wallet with Sepolia ETH** (for gas fees)
3. **Infura or Alchemy account** (for RPC access)

## Setup Steps

### 1. Get Sepolia ETH

- Visit [Sepolia Faucet](https://sepoliafaucet.com/) or [Alchemy Faucet](https://sepoliafaucet.com/)
- Connect your wallet and request test ETH

### 2. Get RPC URL

- Sign up at [Infura](https://infura.io/) or [Alchemy](https://alchemy.com/)
- Create a new project
- Copy the Sepolia RPC URL

### 3. Get Your Private Key

- Export your wallet's private key (keep this secret!)
- Remove the `0x` prefix if present

### 4. Configure Environment Variables

1. Copy `env.example` to `.env`:
   ```bash
   copy env.example .env
   ```
2. Edit `.env` and fill in your values:
   ```
   PRIVATE_KEY=your_actual_private_key_here
   SEPOLIA_URL=https://sepolia.infura.io/v3/your_project_id
   ETHERSCAN_API_KEY=your_etherscan_api_key_here
   ```

## Deployment

### Compile the Contract

```bash
npx hardhat compile
```

### Deploy to Sepolia

```bash
npx hardhat run scripts/deploy.ts --network sepolia
```

### Verify on Etherscan (Optional)

```bash
npx hardhat verify --network sepolia --constructor-args arguments.js DEPLOYED_CONTRACT_ADDRESS
# npx hardhat verify --network sepolia DEPLOYED_CONTRACT_ADDRESS "Proposal A" "Proposal B" "Proposal C"
```

## Contract Features

The deployed contract includes:

- **Chairperson**: The deployer who can give voting rights
- **Voting Rights**: Only addresses with voting rights can vote
- **Delegation**: Voters can delegate their vote to others
- **Proposals**: Three sample proposals (A, B, C)

## Interacting with the Contract

After deployment, you can:

1. Give voting rights to addresses using `giveRightToVote()`
2. Vote on proposals using `vote(proposalIndex)`
3. Delegate votes using `delegate(address)`
4. Check winning proposal using `winningProposal()`
5. Get winner name using `winnerName()`

## Security Notes

- Never commit your `.env` file to version control
- Keep your private key secure
- Test thoroughly on testnet before mainnet deployment
