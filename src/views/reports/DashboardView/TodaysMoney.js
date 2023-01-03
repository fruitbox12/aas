import { Avatar, Box, Card, Typography, makeStyles } from "@material-ui/core";
import EthIcon2 from "../../../components/icons/EthIcon2";
import Label from "src/components/Label";
import PropTypes from "prop-types";
import React from "react";
import clsx from "clsx";
import { useAccountBalance } from "src/hooks/web3ReactHooks";

const useStyles = makeStyles((theme) => ({
   root: {
      padding: theme.spacing(3),
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
   },
   label: {
      marginLeft: theme.spacing(1),
   },
   avatar: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      height: 48,
      width: 48,
      justifyContent: "center",
      display: "flex",
   },
}));

function TodaysMoney({ className, ...rest }) {
   const classes = useStyles();
   const balance = useAccountBalance();
   console.log(balance);
   const data = {
      value: "24,000",
      currency: "",
      difference: 4,
   };

   return (
      <Card className={clsx(classes.root, className)} {...rest}>
         <Box flexGrow={1}>
            <Typography
               component="h3"
               gutterBottom
               variant="overline"
               color="textSecondary">
               ETH BALANCE
            </Typography>
            <Box display="flex" alignItems="center" flexWrap="wrap">
               <Typography variant="h3" color="textPrimary">
                  {data.currency}
                  {balance}
               </Typography>
               <Label
                  className={classes.label}
                  color={data.difference > 0 ? "success" : "error"}>
                  {data.difference > 0 ? "+" : ""}
                  {data.difference}%
               </Label>
            </Box>
         </Box>
         <Avatar className={classes.avatar}>
            <EthIcon2 />
         </Avatar>
      </Card>
   );
}

TodaysMoney.propTypes = {
   className: PropTypes.string,
};

export default TodaysMoney;
