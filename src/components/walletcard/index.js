import React, { useState, useEffect } from "react";
import {
  makeStyles,
  useTheme,
  Paper,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import CropFreeIcon from "@material-ui/icons/CropFree";
import OfflineBoltRoundedIcon from "@material-ui/icons/OfflineBoltRounded";
import OfflineBoltOutlinedIcon from "@material-ui/icons/OfflineBoltOutlined";
import EthIcon from "../icons/ethicon";
import WalletChart from "./walletchart";
import useZapPrices from "../../api/zapconversions";
import QrModal from "./qrmodal";
import SendTokenModal from "./sendtokenModal";
import copyToClipboard from "../../utils/copyToClipboard";
import clsx from "clsx";
import FileCopyIcon from "@material-ui/icons/FileCopy";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    // minWidth: "100%",
    // minHeight: "100%",
    // maxWidth: 500,
  },
  button: {
    textTransform: "none",
    margin: theme.spacing(0.5),
  },
  section: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
  },
  space: {
    padding: theme.spacing(0.5),
  },
  chartContainer: {
    // minWidth: "100%"
  },
}));

const WalletCard = ({ address, className, dots, eth, zap }) => {
  const classes = useStyles();
  let [{ toUsd, toEth }, zapPriceError, zapPriceLoading] = useZapPrices();
  let [openQr, setOpenQr] = useState(false);
  let [openToken, setOpenToken] = useState(false);

  const handleQrOpen = () => {
    setOpenQr(true);
  };

  const handleQrClose = () => {
    setOpenQr(false);
  };

  const handleTokenOpen = () => {
    setOpenToken(true);
  };

  const handleTokenClose = () => {
    setOpenToken(false);
  };

  // Icon spacing for breakdown
  const iconSpace = 4;
  const valSpace = 7;

  /*
      Data to show
      shorter: truncated address
      ---Val: converted token values 
   */
  const ethUsdPrice = toUsd / toEth;
  const shorter =
    address.substring(0, 6) + "..." + address.substring(address.length - 4);
  const ethVal = eth * ethUsdPrice;
  const zapVal = zap * toUsd;
  const dotsVal = dots * toUsd;
  const chartData = [ethVal, zapVal, dotsVal];

  return (
    <Paper className={clsx(classes.root, className)}>
      {/* Main Grid */}
      <Grid alignItems='center' container direction='column' justify='center'>
        {/* Visual Wallet Breakdown */}
        <Grid
          className={classes.chartContainer}
          alignItems='center'
          container
          direction='column'
          item
          justify='center'
          xs={12}
        >
          <WalletChart tokens={chartData} />
          <Button
            endIcon={<FileCopyIcon />}
            onClick={() => copyToClipboard(address)}
          >
            {shorter}
          </Button>
        </Grid>
        {/* Numerical Break Down */}
        <Grid className={classes.section} container>
          <Grid
            alignItems='flex-end'
            container
            direction='column'
            item
            justify='center'
            xs={iconSpace}
          >
            <EthIcon />
            <OfflineBoltRoundedIcon />
            <OfflineBoltOutlinedIcon />
          </Grid>
          <Grid
            className={classes.space}
            alignItems='stretch'
            container
            direction='column'
            justify='center'
            item
            xs={valSpace}
          >
            <Typography align={"left"} color={"textPrimary"} variant={"body1"}>
              {ethVal.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}{" "}
              in ETH <br />
              {zapVal.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}{" "}
              in ZAP <br />
              {dotsVal.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}{" "}
              in bonded DOTs
            </Typography>
          </Grid>
        </Grid>
        {/* Action Buttons */}
        <Grid
          alignItems='stretch'
          container
          direction='column'
          item
          justify='center'
          xs={6}
        >
          <Button
            className={classes.button}
            color={"primary"}
            onClick={handleTokenOpen}
            startIcon={<SendIcon />}
            variant={"outlined"}
          >
            Send Tokens
          </Button>
          <Button
            className={classes.button}
            color={"primary"}
            onClick={handleQrOpen}
            startIcon={<CropFreeIcon />}
            variant={"outlined"}
          >
            Get QR Code
          </Button>
          <Button
            className={classes.button}
            color={"primary"}
            startIcon={<OfflineBoltRoundedIcon />}
            variant={"outlined"}
          >
            Get ZAP
          </Button>
        </Grid>
      </Grid>
      <SendTokenModal handleClose={handleTokenClose} tokenopen={openToken} />
      <QrModal address={address} handleClose={handleQrClose} open={openQr} />
    </Paper>
  );
};

WalletCard.defaultProps = {
  address: "0x6781a0f84c7e9e846dcb84a9a5bd49333067b104",
  eth: 16.9963,
  zap: 152927,
  dots: 93286,
};

export default WalletCard;
