// import Onboard from "bnc-onboard";

// const dappId = process.env.REACT_APP_API_KEY //API KEY
// const networkId = 42 //The network id is the network that our dapp runs on
// // const networkId: parseInt(window.ethereum.networkVersion), //The network id is the network that our dapp runs on

// export function initOnboard(subscriptions, networkIdInt) {
//   const onboard = Onboard
//   return onboard({
//     dappId,
//     hideBranding: false,
//     networkId: networkIdInt,
//     // apiUrl,
//     // darkMode: true,
//     subscriptions,

//     // walletCheck: [
//     //   { checkName: 'derivationPath' },
//     //   { checkName: 'connect' },
//     //   { checkName: 'accounts' },
//     //   { checkName: 'network' },
//     //   { checkName: 'balance', minimumBalance: '100000' }
//     // ]
//   })
// }

// export async function loginMetaMask() {
//    await onboard.walletSelect().then(async () => await onboard.walletCheck());
// }

// export const onboard = Onboard({
//   dappId: process.env.REACT_APP_API_KEY, //API KEY
//   networkId: parseInt(window.ethereum.networkVersion), //The network id is the network that our dapp runs on
//   subscriptions: {
//     wallet: (wallet) => {
//       console.log(`${wallet.name} is now connected!`);
//     },
//   },
// });