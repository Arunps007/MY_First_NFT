async function main() {
    const MyNFT = await ethers.getContractFactory("MyNFT");
  
    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await MyNFT.deploy();
    console.log("Contract deployed to address:", myNFT.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
    // 0x5469A1FE2Ea2b3DE9cBC86a92A09cfE054421BDd
    //0x1CFeD4F77ED8C846624474558ae25a2fAb061bE9
    //0x1929bBD4AeB152EaaebC6cD711B27BeD2365dEE9