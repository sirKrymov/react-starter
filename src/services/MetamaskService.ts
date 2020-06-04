// import Web3 from 'web3'

export class MetamaskService {
  // constructor() {
  //   if (typeof window.web3 !== 'undefined') {
  //     this.web3js = new Web3(window.web3.currentProvider)
  //   }
  //   if (window.ethereum) {
  //     window.ethereum.autoRefreshOnNetworkChange = false
  //   }
  // }
  // detectNetwork(cb: Function) {
  //   if (this.web3js) {
  //     this.web3js.version.getNetwork((_error: string, netId: string) => {
  //       switch (netId) {
  //         case '1':
  //           console.log('This is mainnet')
  //           break
  //         case '2':
  //           console.log('This is the deprecated Morden test network.')
  //           break
  //         case '3':
  //           console.log('This is the ropsten test network.')
  //           break
  //         case '4':
  //           console.log('This is the Rinkeby test network.')
  //           break
  //         case '42':
  //           console.log('This is the Kovan test network.')
  //           break
  //         default:
  //           console.log('This is an unknown network.')
  //       }
  //       cb()
  //     })
  //   }
  // }
  // isWeb3() {
  //   return this.web3js ? true : false
  // }
  // getContractInstance(abi, address: string) {
  //   const contract = new this.web3js.eth.Contract(abi, address)
  //   return contract
  // }
  // async getAccount() {
  //   const accounts = await window.ethereum.enable()
  //   return accounts[0]
  // }
  // sendTransaction(data: Record<string, any>, onInit: Function, onSuccess: Function, onFail: Function) {
  //   this.web3js.eth
  //     .sendTransaction(data)
  //     .on('transactionHash', function(hash: string) {
  //       console.log('TRANSACTION HASH:')
  //       console.log(hash)
  //       onInit(hash)
  //     })
  //     .on('receipt', function(receipt: Record<string, any>) {
  //       console.log('SUCCESS RECEIPT:')
  //       console.log(receipt)
  //       onSuccess(receipt.status)
  //     })
  //     .on('confirmation', function(confirmationNumber: string, receipt: Record<string, any>) {
  //       console.log(`CONFIRMATION ${confirmationNumber}:`)
  //       console.log(receipt)
  //     })
  //     .on('error', (error: Record<string, any>) => {
  //       console.log(error)
  //       onFail(error.message)
  //     })
  // }
  // async getEthTransactionStatus(hash: string) {
  //   const hashTransaction = await this.web3js.eth.getTransactionReceipt(hash)
  //   return hashTransaction ? hashTransaction.status : false
  // }
  // callFunc(data: Record<string, any>) {
  //   return new Promise((resolve, reject) => {
  //     this.web3js.eth.sendTransaction(data, (error: string, result: string) => {
  //       if (error) {
  //         reject(error)
  //       }
  //       resolve(result)
  //     })
  //   })
  // }
  // toWei(ether: Function) {
  //   return this.web3js.toWei(ether, 'ether')
  // }
  // toEther(wei: Function) {
  //   return this.web3js.fromWei(wei, 'ether')
  // }
  // isConnected() {
  //   if (this.web3js.isConnected() && this.web3js.eth.accounts && this.web3js.eth.accounts[0]) return true
  //   return false
  // }
}

export default new MetamaskService();
