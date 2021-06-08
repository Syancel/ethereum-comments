require('dotenv').config();
const { createAlchemyWeb3 } = require('@alch/alchemy-web3');
const web3 = createAlchemyWeb3(process.env.ALCHEMY_KOVAN_WSS);

const contractAbi = require('../contract-abi.json');
const contractAddress = '0x31fEdCCb6DB0dAd8A3B1bf3cC5165d61d0ACF0C5';

export const commentSectionContract = web3.eth.Contract(
    contractAbi,
    contractAddress
)

export const connectWallet = async () => {
    // TODO: Implement
}

export const getCurrentWalletConnected = async () => {
    // TODO: Implement
}

export const loadComments = async () => {
    const comments = commentSectionContract.methods.getComments().call();
    return comments
}

export const addComment = async => {
    // TODO: Implement
}