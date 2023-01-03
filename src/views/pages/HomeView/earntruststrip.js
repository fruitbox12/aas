import React from "react";
import clsx from "clsx";
import {
   Grid,
   Typography,
   makeStyles,
   Divider,
} from "@material-ui/core";
import ExchangeIcon from "../../../components/icons/exchangeicon";

const useStyles = makeStyles((theme) => ({
   root: {
      minimumHeight: 100,
      maxWidth: 1200,
      paddingLeft: 64,
      paddingRight: 64,
      margin: "auto",
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      "& dt": {
         marginTop: theme.spacing(2),
      },
   },
   bg: {
      backgroundColor: theme.palette.background.dark,
   },
   spaceVert: {
      paddingTop: 32,
      paddingBottom: 32,
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
      width: 388,
      height: 330,
      [theme.breakpoints.down("md")]: {
         width: "97%",
         margin: "auto",
      },
   },
}));

const EarnTrustStrip = () => {
   const classes = useStyles();

   return (
      <div className={classes.bg}>
         <Grid
            alignItems={"center"}
            className={classes.root}
            container
            direction={"row"}
            justify={"center"}
            xs={12}>
            <Grid
               alignItems={"flex-start"}
               className={clsx(classes.spaceVert, classes.mobileBot)}
               container
               direction={"column"}
               justify={"center"}
               md={7}
               xs={12}>
               <Typography
                  component="h2"
                  variant="h2"
                  color="textPrimary"
                  align="left">
                  <strong>Earn Trust</strong> <small>while you</small>{" "}
                  <strong>Earn ZAP</strong>
               </Typography>
               <Divider className={classes.line} />
               <Typography
                  component="h2"
                  variant="subtitle1"
                  color="textPrimary"
                  align="left">
                  Grow your data's worth with demonstrated trust and investment
               </Typography>
            </Grid>
            <Grid
               alignItems={"center"}
               className={clsx(classes.spaceVert, classes.mobileTop)}
               container
               direction={"column"}
               justify={"flex-start"}
               md={5}
               xs={12}>
               <ExchangeIcon className={classes.img} />
            </Grid>
         </Grid>
      </div>
   );
};

export default EarnTrustStrip;
