async function main() {
    const commentSectionContractFactory = await ethers.getContractFactory("CommentSection");
    const commentSectionContract = await commentSectionContractFactory.deploy();
    console.log("Contract deployed to: " + commentSectionContract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });