import { Avatar, Chip, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useContracts } from "src/hooks/contractHooks.js";
import { useSelector } from "react-redux";
import ZapZIcon from "src/components/icons/ZapZIcon";
import PropTypes from "prop-types";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
   root: {
      padding: theme.spacing(2),
   },
   avatar: {
      backgroundColor: theme.palette.secondary.main,
      height: 48,
      width: 48,
      justifyContent: "center",
      display: "flex",
   },
   icon: {
      color: theme.palette.background.dark,
      width: "35%",
   },
}));

function ZapBalance({ className, ...rest }) {
   const contracts = useContracts();
   const { zapToken } = contracts;
   const account = useSelector((state) => state.account);
   const [balance, setBalance] = useState();
   const classes = useStyles();

   // zapToken.balanceOf(account.user.account).then((bal) => {
   //    // console.log("hi "+ bal)
   //    let converted = bal.toString();
   //    converted = converted.slice(0, -18);
   //    if (converted.length > 18) {
   //       let string1=converted.slice(0,-18)
   //       let string2=converted.slice(-18,-15)
   //       converted=string1.concat(".", string2);
   //     }
   //     else {
   //       converted=converted+".000"
   //     }
   //    setBalance(converted);
   // });

   useEffect(() => {
      let mounted = true;
      async function getBalance(address) {
         if (zapToken !== null) {
            const bal = await zapToken.balanceOf(address);
            console.log("BALANCE", bal);
            let converted = bal.toString();
            // converted = converted.slice(0, -18);
            if (converted.length > 18) {
               let string1 = converted.slice(0, -18);
               let string2 = converted.slice(-18, -15);
               converted = string1.concat(".", string2);
            } else {
               converted = converted + ".000";
            }

            setBalance(converted);
         }
      }
      if (mounted) {
         getBalance(account.user.account);
      }
      return () => (mounted = false);
      // eslint-disable-next-line
   }, [account.user.account, account.user.zapBalance]);

   return (
      <div className={clsx(classes.root, className)}>
         <Chip
            avatar={
               <Avatar className={classes.avatar}>
                  <ZapZIcon className={classes.icon} />
               </Avatar>
            }
            label={balance}
         />
      </div>
   );
}

ZapBalance.propTypes = {
   className: PropTypes.string,
};

export default ZapBalance;
