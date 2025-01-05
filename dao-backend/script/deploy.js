async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const DAO = await ethers.getContractFactory("DAO");
    const dao = await DAO.deploy("MyDAO");
    console.log("DAO contract deployed to:", dao.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
