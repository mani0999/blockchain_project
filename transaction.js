var Tx = require('ethereumjs-tx').Transaction

const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/6e3a03c223764a82832f3efd31d7482c')


const account1 = '0xdC1EF2D8c92dA7b83550e9a72F1acC081b68cB11' // Your account address 1
const account2 = '0x1CE3dD2b706Fa25dfB2f4E8A3240454b3831cf1d' // Your account address 2

const privateKey1 = Buffer.from('54c746d04d70282964155beb7a1d28d63da72632339320be7a8e7fcb2280ad57', 'hex')
const privateKey2 = Buffer.from('21865ef7df2c3a2cfc0138cbf49d43427d1d021a3666c695c2228e0d613ed476', 'hex')

const sendTransaction = async(raw) => {
  return await web3.eth.sendSignedTransaction(raw)
}

const getTransactionCount = async(account) => {
  return await web3.eth.getTransactionCount(account)
}

const transferFunds = async(account1, account2, amount) => {

  let txCount = await getTransactionCount(account1)

  console.log("txCount returned: " + txCount)

  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(21000), 
    gasPrice: web3.utils.toHex(web3.utils.toWei('30', 'gwei')),
    to: account2,
    value:    web3.utils.toHex(web3.utils.toWei(amount, 'ether')),
  }

  const tx = new Tx(txObject, {chain:'ropsten', hardfork: 'petersburg'})

  tx.sign(privateKey1)

  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')

  console.log("about to send transaction")
  let minedTransaction = await sendTransaction(raw)
  console.log(minedTransaction)
  console.log("txHash: " + minedTransaction.transactionHash)
}

const transfer = async() => {
  await transferFunds(account1, account2, "0.001")
}

transfer()

