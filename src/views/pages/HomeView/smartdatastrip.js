import React from "react";
import { Grid, Typography, makeStyles, Divider } from "@material-ui/core";
import clsx from "clsx";
//import SplashPriceOracle from "src/components/splashPriceOracle";
import {SvgIcon} from '@material-ui/core';
import ExchangeIcon from "../../../components/icons/exchangeicon";
import SplashIcon from '../../../components/icons/splashIcon';

const useStyles = makeStyles((theme) => ({
   root: {
      minimumHeight: 100,
      maxWidth: 1200,
      paddingLeft: 64,
      paddingRight: 64,
      paddingTop: theme.spacing(16),
      paddingBottom: theme.spacing(6),
      "& dt": {
         marginTop: theme.spacing(2),
      },
      margin: "auto",
   },
   spaceVert: {
      [theme.breakpoints.down('md')]: {
         paddingBottom: theme.spacing(3),
         paddingTop: theme.spacing(3)
      }
   },
   spaceVertB: {
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(6)
   },
   spaceVertImg: {
      /* [theme.breakpoints.up('md')]: {
         marginTop: '-' + theme.spacing(22) + 'px',
      }, */
   },
   spaceVertWidget: {
      marginBottom: theme.spacing(2),
   },
   card: {
      boxShadow: theme.shadows,
      margin: "auto",
      height: "90%",
      width: "90%",
   },
   line: {
      height: 7,
      width: "70%",
      background:
         "linear-gradient(90deg," +
         theme.palette.primary.main +
         " 2%, " +
         theme.palette.background.default +
         " 100%)",
      marginBottom: theme.spacing(1),
   },
   mobileTop: {
      order: 1,
      [theme.breakpoints.up("md")]: {
         order: 2,
      },
   },
   mobileBot: {
      order: 2,
      [theme.breakpoints.up("md")]: {
         order: 1,
      },
   },
   img: {
      width: 300,
      height: 250,
      [theme.breakpoints.down("md")]: {
         width: "97%",
         margin: "auto",
      },
   },
   imgTwo: {
      width: 350,
      height: 200,
      marginTop: 20,
      [theme.breakpoints.down("md")]: {
         width: "97%",
         margin: "auto",
      },
   }
}));

const SmartDataStrip = () => {
   const classes = useStyles();

   return (
      <Grid
         alignItems={"flex-start"}
         className={classes.root}
         container
         direction={"row"}
         justify={"center"}
         xs={12}>
         <Grid
            alignItems={"center"}
            className={classes.spaceVert}
            container
            direction={"column"}
            justify={"center"}
            md={5}
            xs={12}>
            <SplashIcon className={classes.imgTwo}/>
         </Grid>
         <Grid
            alignItems={"flex-start"}
            className={classes.spaceVert}
            container
            direction={"column"}
            justify={"center"}
            md={7}
            xs={12}>
            <Typography
               component="h1"
               variant="h1"
               color="textPrimary"
               align="left">
               <strong>Smart Data</strong> <small>for</small>{" "}
               <strong>Smart Contracts</strong>
            </Typography>
            <Divider className={classes.line} />
            <Typography
               component="h2"
               variant="subtitle1"
               color="textSecondary"
               align="left">
               Smart contracts are currently limited in actualizing their true potential as an innovative and revolutionary technology. Smart contracts do not have a reliable way to communicate with off-chain events on their own. That is why smart contracts need oracles to communicate data from the off-chain world.
            </Typography>
         </Grid>
         <Grid
            alignItems={"flex-start"}
            className={clsx(classes.spaceVertB, classes.mobileBot)}
            container
            direction={"column"}
            justify={"center"}
            md={7}
            xs={12}>
            <Typography
               component="h1"
               variant="h1"
               color="textPrimary"
               align="left">
               <strong>Earn Trust</strong> <small>while you</small>{" "}
               <strong>Earn ZAP</strong>
            </Typography>
            <Divider className={classes.line} />
            <Typography
               component="h2"
               variant="subtitle1"
               color="textSecondary"
               align="left"
            >
               Grow the value of your data by establishing your credibility on our ecosystem. Zap Protocol enables data providers to create and monetize trust through their data and digital assets in a truly decentralized and permissionless marketplace.
            </Typography>
         </Grid>
         <Grid
            alignItems={"center"}
            className={clsx(classes.spaceVertImg, classes.mobileTop)}
            container
            direction={"column"}
            justify={"flex-start"}
            md={5}
            xs={12}>
            <ExchangeIcon className={classes.img} />
         </Grid>
      </Grid>
   );
};

export default SmartDataStrip;
