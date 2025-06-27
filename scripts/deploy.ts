import { ethers } from "hardhat";

async function main() {
  console.log("Deploying Voting Contract...");

  // Sample proposal names for the ballot
  const proposalNames = ["Proposal A", "Proposal B", "Proposal C"];

  const Ballot = await ethers.getContractFactory("Ballot");
  const ballot = await Ballot.deploy(proposalNames);

  await ballot.waitForDeployment();

  const address = await ballot.getAddress();
  console.log("Voting Contract deployed to:", address);
  console.log("Proposals:");
  for (let i = 0; i < proposalNames.length; i++) {
    console.log(`  ${i}: ${proposalNames[i]}`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
