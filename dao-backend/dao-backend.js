require("dotenv").config();
const express = require("express");
const Web3 = require("web3");
const { abi } = require("./build/DAOContract.json"); // Smart Contract ABI

const app = express();
app.use(express.json());

const web3 = new Web3(`https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`);
const contract = new web3.eth.Contract(abi, process.env.CONTRACT_ADDRESS);

const account = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
web3.eth.accounts.wallet.add(account);

app.post("/create-dao", async (req, res) => {
    const { name, symbol } = req.body;

    try {
        const tx = contract.methods.createDAO(name, symbol);
        const gas = await tx.estimateGas({ from: account.address });
        const txData = tx.encodeABI();

        const txReceipt = await web3.eth.sendTransaction({
            from: account.address,
            to: process.env.CONTRACT_ADDRESS,
            gas,
            data: txData,
        });

        res.status(200).json({ success: true, txReceipt });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: err.message });
    }
});

app.post("/stake", async (req, res) => {
    const { amount } = req.body;

    try {
        const tx = contract.methods.stakeTokens(amount);
        const gas = await tx.estimateGas({ from: account.address });
        const txData = tx.encodeABI();

        const txReceipt = await web3.eth.sendTransaction({
            from: account.address,
            to: process.env.CONTRACT_ADDRESS,
            gas,
            data: txData,
        });

        res.status(200).json({ success: true, txReceipt });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
