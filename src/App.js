import {
  StylesProvider,
  ThemeProvider,
  createStyles,
  jssPreset,
  makeStyles,
} from "@material-ui/core";
import { Web3ReactProvider, createWeb3ReactRoot } from "@web3-react/core";
import Auth from "src/components/Auth";
import CookiesNotification from "src/components/CookiesNotification";
import GoogleAnalytics from "src/components/GoogleAnalytics";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import React, { useEffect } from "react";
import { Router } from "react-router-dom";
import Routes from "src/Routes";
import ScrollReset from "src/components/ScrollReset";
// import SettingsNotification from 'src/components/SettingsNotification';
import { SnackbarProvider } from "notistack";
import { Web3Provider } from "@ethersproject/providers";
import { create } from "jss";
import { createBrowserHistory } from "history";
import { createTheme } from "src/theme";
import rtl from "jss-rtl";
import useSettings from "src/hooks/useSettings";
import { useSelector, useDispatch } from "react-redux";
import { RELOAD_MARKET } from "src/actions/oracleactions.js";

const history = createBrowserHistory();
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const NetworkContextName = "NETWORK";

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName);

if (window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false;
}

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 15000;
  return library;
}

const useStyles = makeStyles(() =>
  createStyles({
     "@global": {
        "*": {
           boxSizing: "border-box",
           margin: 0,
           padding: 0,
        },
        html: {
           "-webkit-font-smoothing": "antialiased",
           "-moz-osx-font-smoothing": "grayscale",
           height: "100%",
           width: "100%",
        },
        body: {
           height: "100%",
           width: "100%",
        },
        "#root": {
           height: "100%",
           width: "100%",
        },
     },
  })
);

function App() {
  useStyles();
  const dispatch = useDispatch();
  const marketplace = useSelector((state) => state.oracles);

  useEffect(() => {
     try {
        const fromLocalStore = JSON.parse(
           localStorage.getItem("zap-marketplace")
        );
        if (fromLocalStore === null || typeof fromLocalStore !== "object") {
           return;
        }
        dispatch({
           type: RELOAD_MARKET,
           payload: fromLocalStore,
        });
     } catch (e) {
        console.log("Iusse with reviving oracle store from localStorage");
        console.error(e);
     }
  }, []);

  useEffect(() => {
     localStorage.setItem("zap-marketplace", JSON.stringify(marketplace));
  });

  const { settings } = useSettings();

  return (
     <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ProviderNetwork getLibrary={getLibrary}>
           <ThemeProvider theme={createTheme(settings)}>
              <StylesProvider jss={jss}>
                 <MuiPickersUtilsProvider utils={MomentUtils}>
                    <SnackbarProvider maxSnack={1}>
                       <Router history={history}>
                          <Auth>
                             <ScrollReset />
                             <GoogleAnalytics />
                             <CookiesNotification />
                             {/* <SettingsNotification /> */}
                             <Routes />
                          </Auth>
                       </Router>
                    </SnackbarProvider>
                 </MuiPickersUtilsProvider>
              </StylesProvider>
           </ThemeProvider>
        </Web3ProviderNetwork>
     </Web3ReactProvider>
  );
}

export default App;