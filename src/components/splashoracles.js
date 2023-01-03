import React, { useState, useEffect } from "react";
import { makeStyles, Paper, Typography, Grid, Button } from "@material-ui/core";
import BondIcon from "./icons/bondicon";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { ethers } from "ethers";
import { Oracle } from "src/reducers/classes/oracledata.js";
import { ProviderCurve } from "src/components/providercurve/ProviderCurve";
import { registryAddress, registryAbi } from "src/contracts/registrycontract";
import { bondageAddress, bondageAbi } from "src/contracts/bondagecontract.js";
import useZapPrices from "src/api/zapconversions";
import WalletModal from "src/components/WalletModal";

const useStyles = makeStyles((theme) => ({
   root: {},
   card: {
      height: "100%",
      width: "85%",
      margin: "auto",
      padding: theme.spacing(3),
      "& h4": {
         [theme.breakpoints.down("sm")]: {
            fontSize: "12px",
         }
      },
   },
   vertSpace: {
      paddingTop: theme.spacing(1),
   },
   stats: {
      marginTop: theme.spacing(1),
      margin: "auto",
   },
}));

const SplashOracles = (props) => {
   const classes = useStyles();
   const [oracle, setOracle] = useState(new Oracle());
   const [openWallet, setOpenWallet] = useState(false);
   let prices = useZapPrices();
   const alignTxt = isWidthUp("md", props.width) ? "flex-start" : "center";

   const handleCloseWalletModal = () => {
      console.log("close");
      setOpenWallet(false);
   };

   let price = prices.prices.toUsd;

   useEffect(() => {
      getOne().then((toSet) => {
         setOracle(toSet);
      });
   }, []);

   useEffect(() => { }, [oracle]);

   let thumbnailParams = {
      existingCoefficientArray: oracle.coeffecientArr
         ? oracle.coeffecientArr
         : [2, 0, 0, 900],
      editable: false,
      bondedDots: oracle.dotsBonded,
      bonded: true,
      bonding: false,
      tokenSymbol: oracle.symbol,
      parentWidth: window.screen.width > 650 ? 250 : 60,
      parentHeight: window.screen.width > 650 ? 200 : 48,
      axesOptions: window.screen.width > 650 ? { xAxisTicks: 2, yAxisTicks: 2, showLabels: true, tickSize: 5 } : { xAxisTicks: 1, yAxisTicks: 1, showLabels: false, tickSize: 5 },
      zoomFit: 1,
   };

   let stats = [
      {
         type: "Locked Value",
         val: (oracle.zapBound * price).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
         }),
      },
      {
         type: "Supply Cap",
         val: oracle.dotLimit + " Dots",
      },
   ];

   var priceToShow = oracle.pricePerDot * price;
   priceToShow =
      priceToShow < 0.01
         ? "< $0.01"
         : priceToShow.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
         });

   return (
      <>
         <Paper className={classes.card} elevation={3}>
            <Typography variant="h3" color="textPrimary" align="center">
               {oracle.oracleTitle}
            </Typography>
            <Typography variant="h4" color="textPrimary" align="center">
               {priceToShow}
            </Typography>

            <ProviderCurve
               className={classes.curve}
               key={thumbnailParams.existingCoefficientArray.join()}
               {...thumbnailParams}
            />
            <Grid
               alignItems={"center"}
               className={classes.stats}
               container
               direction={"row"}
               justify={"center"}
               xs={12}>
               {stats.map((stat) => {
                  return (
                     <Grid
                        alignItems={"stretch"}
                        className={classes.vertSpace}
                        container
                        direction={"column"}
                        item
                        justify={"center"}
                        sm={12 / stats.length}
                        xs={12}>
                        <Typography
                           variant="overline"
                           color="textSecondary"
                           align={alignTxt}>
                           {stat.type}
                        </Typography>
                        <Typography
                           variant="h4"
                           color="textPrimary"
                           align={alignTxt}>
                           {stat.val}
                        </Typography>
                     </Grid>
                  );
               })}
               <Grid
                  alignItems={"center"}
                  className={classes.vertSpace}
                  container
                  direction={"column"}
                  item
                  justify={"center"}
                  xs={12}>
                  <Button
                     onClick={() => setOpenWallet(true)}
                     size={"large"}
                     startIcon={<BondIcon />}
                     variant={"contained"}
                     color={"primary"}>
                     Bond to Oracle
                  </Button>
               </Grid>
            </Grid>
         </Paper>
         <WalletModal
            isOpen={openWallet}
            handleClose={handleCloseWalletModal}
         />
      </>
   );
};

async function getOne() {
   var retVal = new Oracle();

   try {
      // Connects to the Ethereum Mainnet
      // const web3provider = new ethers.providers.EtherscanProvider(
      //    "homestead",
      //    "4BXFZM1M4RQD6M2B2CPERVH8NH7YKFC5JY"
      // );
      let web3provider = new ethers.getDefaultProvider("mainnet", {
         etherscan: "4BXFZM1M4RQD6M2B2CPERVH8NH7YKFC5JY",
      });

      // Ethers connection to Registry.sol
      const registryContract = new ethers.Contract(
         registryAddress[1],
         registryAbi,
         web3provider
      );

      // Ethers connection to Bondage.sol
      const bondageContract = new ethers.Contract(
         bondageAddress[1],
         bondageAbi,
         web3provider
      );

      const providerAddresses = await registryContract.getAllOracles();
      var provider = "";
      var endpts = [];
      while (endpts.length === 0) {
         provider =
            providerAddresses[
            Math.floor(
               Math.random() * Math.floor(providerAddresses.length - 1)
            )
            ];
         endpts = await registryContract.getProviderEndpoints(provider);
      }
      const endpt =
         endpts[Math.floor(Math.random() * Math.floor(endpts.length - 1))];
      const title = await registryContract.getTitle(provider);
      const dotsIssued = await bondageContract.getDotsIssued(provider, endpt);
      const dotLimit = await bondageContract.dotLimit(provider, endpt);
      const curve = await registryContract.getProviderCurve(provider, endpt);
      const bound = await bondageContract.getBoundDots(
         provider,
         provider,
         endpt
      );
      const cost = await bondageContract.currentCostOfDot(
         provider,
         endpt,
         bound
      );
      const zapBound = await bondageContract.getZapBound(provider, endpt);

      retVal = new Oracle(
         ethers.utils.parseBytes32String(title),
         provider,
         null,
         "0",
         curve.map((c) => {
            const s = c.toString();
            return parseFloat(s);
         }),
         ethers.utils.parseBytes32String(endpt),
         parseFloat(bound.toString()),
         parseFloat(dotsIssued.toString()),
         parseFloat(dotLimit.toString()),
         parseFloat(cost.toString()) /
         parseFloat(ethers.constants.WeiPerEther.toString()),
         null,
         null,
         0,
         parseFloat(zapBound.toString()) /
         parseFloat(ethers.constants.WeiPerEther.toString()),
         false
      );
   } catch (e) {
      console.error(e);
      console.log("Issue with loading a splash page oracle");
   }

   return retVal;
}

export default withWidth()(SplashOracles);
