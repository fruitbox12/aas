import { Chip, makeStyles } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { IoIosFlashOff } from "react-icons/io";

const useStyles = makeStyles((theme) => ({
   root: {
      padding: theme.spacing(2),
   },
   chip: {
      backgroundColor: "#ff443a",
   },
}));

const NETWORKS = {
   1: "Mainnet",
   42: "Kovan",
   31337: "Zap Devnet",
};

function NetworkBadge({ className, ...rest }) {
   const classes = useStyles();

   const chainIdHex = window.ethereum.chainId,
      chainId = parseInt(chainIdHex, 16),
      validChain = NETWORKS.hasOwnProperty(chainId),
      toShow = validChain ? NETWORKS[chainId] : "Network Not Supported";

   return (
      <>
         {chainId !== 1 && (
            <div className={clsx(classes.root, className)}>
               <Chip
                  className={validChain ? "" : classes.chip}
                  color={"primary"}
                  icon={validChain ? <></> : <IoIosFlashOff />}
                  label={toShow}
               />
            </div>
         )}
      </>
   );
}

NetworkBadge.propTypes = {
   className: PropTypes.string,
};

NetworkBadge.defaultProps = {
   className: "",
};

export default NetworkBadge;
