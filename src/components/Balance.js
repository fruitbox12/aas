import { Avatar, Chip, makeStyles } from "@material-ui/core";
import React from "react";
import EthIcon2 from "../components/icons/EthIcon2";
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

function Balance({ balance, className, ...rest }) {
   const classes = useStyles();

   return (
      <div className={clsx(classes.root, className)}>
         <Chip
            avatar={
               <Avatar className={classes.avatar}>
                  <EthIcon2 className={classes.icon} />
               </Avatar>
            }
            label={balance}
         />
      </div>
   );
}

Balance.propTypes = {
   className: PropTypes.string,
};

export default Balance;
