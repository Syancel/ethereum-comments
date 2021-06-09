require('dotenv').config();
const { createAlchemyWeb3 } = require('@alch/alchemy-web3');
const web3 = createAlchemyWeb3(process.env.REACT_APP_ALCHEMY_KOVAN_WSS);

const contractAbi = require('../contract-abi.json');
const contractAddress = '0x31fEdCCb6DB0dAd8A3B1bf3cC5165d61d0ACF0C5';

export const commentSectionContract = new web3.eth.Contract(
    contractAbi,
    contractAddress
)

export const connectWallet = async () => {
    if(window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
            return {
                address: addressArray[0],
                status: ""
            }
        } catch(error) {
            return {
                address: "",
                status: `😟 ${error.message}`
            }
        }
    } else {
        return {
            address: "",
            status: "🦊 Please install Metamask."
        }
    }
}

export const getCurrentWalletConnected = async () => {
    if(window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: 'eth_accounts'
            });
            if(addressArray.length > 0) {
                return {
                    address: addressArray[0],
                    status: ""
                }
            } else {
                return {
                    address: "",
                    status: "🦊 Connect to Metamask using the top-right button."
                }
            }
        } catch(error) {
            return {
                address: "",
                status: `😟 ${error.message}`
            }
        }
    } else {
        return {
            address: "",
            status: "🦊 Please install Metamask."
        }
    }
}

export const loadComments = async () => {
    const comments = commentSectionContract.methods.getComments().call();
    return comments
}

export const addComment = async => {
    // TODO: Implement
}