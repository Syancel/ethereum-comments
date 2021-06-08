async function main() {
    const commentsSectionContractFactory = await ethers.getContractFactory("CommentsSection");
    const commentsSectionContract = await commentsSectionContractFactory.deploy();
    console.log("Contract deployed to: " + commentsSectionContract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });