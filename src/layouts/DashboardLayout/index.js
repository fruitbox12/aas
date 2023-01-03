import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import ScrollDialogue from "src/components/termsofservice/index";
import { Modal } from "@material-ui/core";
import {
  getOracles,
  getOraclesFromBlockchain,
  getVolumeTraded,
  clearMarket,
} from "src/actions/oracleactions";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "src/actions/accountActions.js";
import { getTransactions } from "src/actions/transactionActions";
import BetaWarningDialog from "src/components/betawarningdialog";
import Banner from "src/components/Banner";
import { isMobile } from "react-device-detect";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
    minHeight: "100vh",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 64,
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 0,
    },
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
}));

function DashboardLayout({ children }) {
  const account = useSelector((state) => state.account);
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [open, setOpen] = useState(true);
  const [openWarning, setOpenWarning] = useState(!account.acceptBetaWarning);
  const dispatch = useDispatch();

  console.log(account.acceptBetaWarning);

  const handleAcceptWarning = () => {
    setOpenWarning(false);
    dispatch(updateUser("acceptBetaWarning", true));
    const user = JSON.parse(localStorage.getItem("accessToken"));
    localStorage.setItem(
      "accessToken",
      JSON.stringify({ ...user, acceptBetaWarning: true })
    );
  };

  window.addEventListener("load", async () => {
    try {
      await window.ethereum.enable();
    } catch (e) {
      console.error(e);
    }
  });

  window.ethereum.on("accountsChanged", (accounts) => {
    dispatch(updateUser("account", accounts[0]));
    loadOracles();
  });

  window.ethereum.on("chainChanged", () => {
    dispatch(clearMarket());
    loadTradeVolume();
    loadOracles();
  });

  // Hook to grab transaction history for bonding contract
  const loadOracles = () => {
    if (parseInt(Number(window.ethereum.chainId), 10) === 42 || isMobile ) {
      getOraclesFromBlockchain()
        .then((res) => {
          // Dispatch each Oracle endpoint object to the Redux store
          dispatch({
            type: res.type,
            payload: res.payload,
          });
        })
        .catch((err) => {
          return err;
        });
    } else {
      getOracles()
        .then((res) => {
          // Dispatch each Oracle endpoint object to the Redux store
          dispatch({
            type: res.type,
            payload: res.payload,
          });
        })
        .catch((err) => {
          return err;
        });
    }
  };

  const loadTradeVolume = () => {
    getVolumeTraded()
      .then((res) => {
        // Dispatch the volume to the Redux store

        dispatch({
          type: res.type,
          payload: res.payload,
        });
      })
      .catch((err) => {
        return err;
      });
  };

  useEffect(() => {
    let mounted = true;
    if (localStorage.getItem("TOSsigned") === account.user.account) {
      setOpen(false);
    }
    if (mounted) {
      dispatch(getTransactions());
      loadTradeVolume();
      loadOracles();
    }
    return () => (mounted = false);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account.user.account]);

  return (
    <>
      <div className={classes.root}>
        <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
        <NavBar
          onMobileClose={() => setMobileNavOpen(false)}
          openMobile={isMobileNavOpen}
        />
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>{children}</div>
          </div>
        </div>
      </div>
      <Modal open={open} disableBackdropClick disableEscapeKeyDown>
        <ScrollDialogue setModalOpen={setOpen} />
      </Modal>
      <BetaWarningDialog open={openWarning} handleClose={handleAcceptWarning} />
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.any,
};

export default DashboardLayout;
