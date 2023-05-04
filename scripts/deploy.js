const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account: ", deployer.address);

    console.log("Account balance: ", (await deployer.getBalance()).toString());

    const LunarToken = await ethers.getContractFactory("LunarToken");
    const lunartoken = await LunarToken.deploy();

    console.log("Lunar Token address: ", lunartoken.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });