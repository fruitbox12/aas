import {
   Dialog,
   DialogTitle,
   Link,
   List,
   Typography,
   makeStyles,
} from "@material-ui/core";
import {
   NoEthereumProviderError,
   UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import React, { useEffect, useState } from "react";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { injected, portis } from "../../connectors";
import {
   useEagerConnect,
   useInactiveListener,
} from "src/hooks/web3ReactHooks.js";
// import AddIcon from '@material-ui/icons/Add';
import MetamaskIcon from "../../assets/images/metamask.png";
import Option from "./Option";
import { SUPPORTED_WALLETS } from "../../constants/supportedWallets";
import { UserRejectedRequestError as UserRejectedRequestErrorFrame } from "@web3-react/frame-connector";
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from "@web3-react/walletconnect-connector";
import { isMobile } from "react-device-detect";
import { loginUsingWeb3 } from "../../actions/accountActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

// import {
//   magic,
//   network,
//   walletconnect,
//   walletlink,
//   ledger,
//   trezor,
//   frame,
//   authereum,
//   squarelink,
//   torus,
// } from '/src/connectors/index.js'

const ConnectorNames = {
   Injected: "Injected",
   Fortmatic: "Fortmatic",
   Portis: "Portis",
};
Object.freeze(ConnectorNames);

// const connectorsByName = {
//   [ConnectorNames.Injected]: injected,
//   [ConnectorNames.Fortmatic]: fortmatic,
//   [ConnectorNames.Portis]: portis,
// }

function getErrorMessage(error) {
   if (error instanceof NoEthereumProviderError) {
      return "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.";
   } else if (error instanceof UnsupportedChainIdError) {
      return "You're connected to an unsupported network.";
   } else if (
      error instanceof UserRejectedRequestErrorInjected ||
      error instanceof UserRejectedRequestErrorWalletConnect ||
      error instanceof UserRejectedRequestErrorFrame
   ) {
      return "Please authorize this website to access your Ethereum account.";
   } else if (error) {
      return error.toString();
   } else {
      console.error(error);
      return "An unknown error occurred. Check the console for more details.";
   }
}

// const wallets = ['MetaMask', 'WallectConnect', 'Coinbase Wallet'];
const useStyles = makeStyles((theme) => ({
   root: {
      padding: theme.spacing(3),
   },
   walletModalTitle: {
      backgroundColor: theme.palette.background.dark,
   },
   bottomText: {
      padding: theme.spacing(3),
   },
}));

// const WALLET_VIEWS = {
//    OPTIONS: "options",
//    OPTIONS_SECONDARY: "options_secondary",
//    ACCOUNT: "account",
//    PENDING: "pending",
// };

const WalletModal = (props) => {
   // const [walletView, setWalletView] = useState(WALLET_VIEWS.ACCOUNT);
   const { active, account, connector, activate } = useWeb3React();
   const [pendingWallet, setPendingWallet] = useState();
   const [pendingError, setPendingError] = useState();
   const dispatch = useDispatch();
   const history = useHistory();

   // useEffect(() => {
   //   console.log(account !== undefined);

   //   if (account !== undefined) {
   //     console.log('.......');

   //     // console.log(account);
   //     // dispatch(loginUsingWeb3(account));

   //     (async () => {
   //       await dispatch(loginUsingWeb3(account));
   //     })().then(()=>history.push('/app'))
   //   }

   // }, [account])

   // handle logic to recognize the connector currently being activated
   const [activatingConnector, setActivatingConnector] = useState();
   
   // runs when walletModal is opened
   useEffect(() => { 
      if(props.isOpen) {
         setPendingError(false);
      }
   }, [props.isOpen])

   useEffect(() => {
      if (props.isOpen === true && account !== undefined && active === true) {
         (async () => {
            await dispatch(loginUsingWeb3(account));
         })().then(() => history.push("/app"));
      }
   }, [dispatch, history, props.isOpen, active, account]);

   useEffect(() => {
      if (activatingConnector && activatingConnector === connector) {
         setActivatingConnector(undefined);
      }
   }, [activatingConnector, connector]);

   // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
   const triedEager = useEagerConnect();

   // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
   useInactiveListener(!triedEager || !!activatingConnector);

   const classes = useStyles();

   const tryActivation = async (connector) => {
      // let name = "";
      Object.keys(SUPPORTED_WALLETS).map((key) => {
         if (connector === SUPPORTED_WALLETS[key].connector) {
            // return (name = SUPPORTED_WALLETS[key].name);
            return SUPPORTED_WALLETS[key].name;
         }
         return true;
      });
      // log selected wallet
      // ReactGA.event({
      //   category: 'Wallet',
      //   action: 'Change Wallet',
      //   label: name
      // })
      // setPendingWallet(connector) // set wallet for pending view
      // setWalletView(WALLET_VIEWS.PENDING)

      // if the connector is walletconnect and the user has already tried to connect, manually reset the connector
      // if (connector instanceof WalletConnectConnector && connector.walletConnectProvider?.wc?.uri) {
      //   connector.walletConnectProvider = undefined
      // }

      activate(connector, undefined, true).catch((error) => {
         console.log(error);
         getErrorMessage(error);
         if (error instanceof UnsupportedChainIdError) {
            activate(connector); // a little janky...can't use setError because the connector isn't set
         } else {
            // setPendingError(true)
         }
      });
   };

   // get wallets user can switch too, depending on device/browser
   function getOptions() {
      const isMetamask = window.ethereum && window.ethereum.isMetaMask;
      return Object.keys(SUPPORTED_WALLETS).map((key) => {
         const option = SUPPORTED_WALLETS[key];
         // check for mobile options
         if (isMobile) {
            //disable portis on mobile for now
            if(isMetamask) {
               tryActivation(injected);
            }
            if (option.connector === portis) {
               return null;
            }

            if (option.name === "MetaMask") {
               console.log("MM")
               return (
                  <Option
                     id={`connect-${key}`}
                     key={key}
                     color={"#E8831D"}
                     header={"Install Metamask"}
                     subheader={null}
                     link={"https://metamask.io/download"}
                     icon={MetamaskIcon}
                     onClick={() => window.open('https://metamask.io/download')}
                  />
               );
            }
            if (!window.web3 && !window.ethereum && option.mobile) {
               return (
                  <Option
                     onClick={() => {
                        option.connector !== connector &&
                           !option.href &&
                           tryActivation(option.connector);
                     }}
                     id={`connect-${key}`}
                     key={key}
                     active={option.connector && option.connector === connector}
                     color={option.color}
                     link={option.href}
                     header={option.name}
                     subheader={null}
                     icon={require("../../assets/images/" + option.iconName)}
                  />
               );
            }
            return null;
         }

         // overwrite injected when needed
         if (option.connector === injected) {
            // don't show injected if there's no injected provider
            if (!(window.web3 || window.ethereum)) {
               if (option.name === "MetaMask") {
                  console.log("MM")
                  return (
                     <Option
                        id={`connect-${key}`}
                        key={key}
                        color={"#E8831D"}
                        header={"Install Metamask"}
                        subheader={null}
                        link={"https://metamask.io/download"}
                        icon={MetamaskIcon}
                        onClick={() =>
                           window.open("https://metamask.io/download")
                        }
                     />
                  );
               } else {
                  return null; //dont want to return install twice
               }
            }
            // don't return metamask if injected provider isn't metamask
            else if (option.name === "MetaMask" && !isMetamask) {
               return null;
            }
            // likewise for generic
            else if (option.name === "Injected" && isMetamask) {
               return null;
            }
         }

         // return rest of options
         return (
            !isMobile &&
            !option.mobileOnly && (
               <Option
                  id={`connect-${key}`}
                  onClick={() => {
                     console.log(option.connector);
                     // option.connector === connector
                     //   ? setWalletView(WALLET_VIEWS.ACCOUNT)
                     //   : !option.href && tryActivation(option.connector)
                     tryActivation(option.connector);
                  }}
                  key={key}
                  active={option.connector === connector}
                  color={option.color}
                  link={option.href}
                  header={option.name}
                  icon={require("../../assets/images/" + option.iconName)}
                  subheader={null} //use option.descriptio to bring back multi-line
                  //icon={require('../../assets/images/' + option.iconName)}
               />
            )
         );
      });
   }

   function getModalContent() {}

   return (
      <Dialog
         className={classes.root}
         open={props.isOpen}
         onClose={props.handleClose}>
         <DialogTitle
            className={classes.walletModalTitle}
            id="wallet-model-dialog-title">
            <Typography>Connect to a wallet</Typography>
         </DialogTitle>

         <List>
            <>{getOptions()}</>
            <Typography className={classes.bottomText}>
               New to Ethereum? 
               <Link
                  rel={"noopener noreferrer"}
                  href={"https://v1.zap.org"}
                  href="https://ethereum.org/use/#3-what-is-a-wallet-and-which-one-should-i-use">
                  {" "}Learn more about wallets
               </Link>
            </Typography>
            {/* <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {(
            <div>{errorMessage}</div>
          )}
        </div> */}
         </List>
         <div>{getModalContent()}</div>
      </Dialog>
   );
};

export default WalletModal;
