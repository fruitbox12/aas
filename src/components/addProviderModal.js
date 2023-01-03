import {
   Button,
   Dialog,
   makeStyles,
   DialogTitle,
   DialogActions,
   DialogContent,
   DialogContentText,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

// const useStyles = makeStyles((theme) => ({
//    root: {},
// }));

function AddProviderModal({ className, open, handleClose }) {
   // const classes = useStyles();

   return (
      <Dialog
         maxWidth={"sm"}
         open={open}
         onClose={handleClose}
         aria-labelledby="responsive-dialog-title">
         <DialogTitle id="responsive-dialog-title">
            No Web3 Provider Detected.
         </DialogTitle>
         <DialogContent>
            <DialogContentText>
               Please install and enable MetaMask or another Web3 Provider in
               order to continue listing the Zap token in your wallet.
            </DialogContentText>
         </DialogContent>
         <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
               Close
            </Button>
         </DialogActions>
      </Dialog>
   );
}

AddProviderModal.propTypes = {
   className: PropTypes.string,
   open: PropTypes.bool,
   handleClose: PropTypes.func,
};

AddProviderModal.defaultProps = {
   className: "",
   open: false,
   handleClose: () => {},
};

export default AddProviderModal;
