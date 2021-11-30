import data from './token-data';

const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/6a4cbd7fc6ad4baebf471fcdd89cfd55')






export const fetchData = async(address, callback)=>{
    try {
        const value = await web3.eth.getBalance(address);
        const converted = await web3.utils.fromWei(String(value), 'ether')
        callback('');
        return converted;
        
    } catch (error) {
        console.log(error)
        return 'Invalid address';
    }
    
    
}



export const fetchTokenData = async(token, address) => {
    try {
        let tokenObject = data.find(x => x.id == token)
        let abi = await JSON.parse(tokenObject.abi);
        let tokenAddress = tokenObject.contract;
        let contract = await new web3.eth.Contract(abi, tokenAddress);
        let balance = await contract.methods.balanceOf(address).call();
        let digits = await contract.methods.decimals().call();
        console.log(digits);
        console.log(balance);
        let balanceToDigit = (balance/(10**digits));
        return balanceToDigit + ' ' + token;
    }
    catch(error) {
        console.log(error)
        return 'Invalid address'
    }

}

