# KnowledgeKeen - Smart Contracts in Solidity on GOERLI Test Networks

Started this project as a learning and understanding of Solidity. Slowly and steadily enhanced this from a simple POC to a full-fledged application that can take any kind of Crypto as input and can be sent over a network for some gas fee.

## Network Switching

This was initially tested on the Ropsten network but as recently Ropsten was completely depreciated (you can still do the transactions, but cannot fetch the details). Hence, as a result, moved this application from the Ropsten test network to the Goerli test network with only a few modifications.

As of now, the application is much more customizable, and using only a few tweaks you can move from the Goerli test network to any other test network with ease.

## Technologies To Know

There are various packages used including [Hardhat](https://hardhat.org), [hardhat-waffle](https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-waffle#hardhat-waffle), [Solidity](https://soliditylang.org), [Alchemy](https://www.alchemy.com/), [Goerli Testnet](https://goerli.net), [Goerli Faucet](https://goerlifaucet.com), [MetaMask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en), and many more...

### `hardhat`

This help in creating a basic structure and is **Ethereum development environment for professionals**. It also help you easily deploy your contracts, run tests and debug Solidity code without dealing with live environments. Hardhat Network is a local Ethereum network designed for development.

### `hardhat-waffle`

You can use this plugin to build smart contract tests using Waffle in Hardhat, taking advantage of both.

This plugin adds a Hardhat-ready version of Waffle to the Hardhat Runtime Environment, and automatically initializes the Waffle Chai matchers.

### `Solidity`

Solidity is a statically-typed curly-braces programming language designed for developing smart contracts that run on Ethereum.

And a contract in the sense of Solidity is a collection of code (its functions) and data (its state) that resides at a specific address on the Ethereum blockchain. The line uint storedData; declares a state variable called storedData of type uint (unsigned integer of 256 bits). You can think of it as a single slot in a database that you can query and alter by calling functions of the code that manages the database.

### `Alchemy`

Alchemy is the most powerful set of web3 development tools to build and scale your dApp with ease. It's an all-in-one complete developer platform. You need an account hence you need to sign up to start using it.

### `Goerli Testnet`

A cross-client proof-of-authority testing network for Ethereum.

### `Goerli Faucet`

An Ethereum faucet is a developer tool to get testnet Ether (ETH) in order to test and troubleshoot your decentralized application or protocol before going live on Ethereum mainnet, where one must use real Ether. Most faucets require social authentication (e.g. Twitter post or login confirming you are a real human) or place you in a queue to wait for a testnet token through the faucet. The Alchemy Goerli faucet is free, fast, and does not require authentication, though you can optionally login to Alchemy to get an increased drip.

Also, the faucet is a concept with works for any test network, like each testnet has a different faucet where you can get free test crypto currency.

### `MetaMask`

MetaMask is a crypto wallet & gateway to blockchain apps. To use MetaMask with our application we need a Chrome extension of it (Link is provided above)

## Commands you need to know

### `npx hardhat`

This command will create basic structure and also will give you some sample code to start with. e.g `hardhat.config.js`, `scripts` and `contracts`.

### `npx hardhat test`

This command will run the test scripts and check if everything is running smoothly without any error. This also creates a basic Greeter Solidity contract and adds a new folder named `artifacts` to the existing structure.

### `npx hardhat run scripts/deploy.js --network goerli` or `npm run deploy`

This command with help you deploy the scripts and contracts to the Alchemy server, but before running this command you need to create an application on the Alchemy server and add its key and account information to our environment file, the key name is used in `hardhat.config.js` file.

The account name mentioned above is not an actual account name but a private key mentioned in the MetaMast chrome extension under **Account (currently selected Account) => Menu => Account Details => Export private key**.

Happy Learning!!!
