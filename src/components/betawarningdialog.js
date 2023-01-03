import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
   makeStyles,
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
   root: {},
   card: {
      margin: theme.spacing(1),
   },
}));

const BetaWarningDialog = ({ className, open, handleClose }) => {
   const classes = useStyles();

   return (
      <Dialog
         className={clsx(className, classes.root)}
         disableBackdropClick
         open={open}
         onClose={handleClose}
         fullWidth
         maxWidth={"sm"}>
         <DialogTitle>
            Beta Version Disclaimer
         </DialogTitle>
         <DialogContent>
            <DialogContentText>
               This interface is in beta use at your own risk.
            </DialogContentText>
            <DialogActions>
               <Button
                  className={classes.item}
                  color="primary"
                  component="a"
                  href="https://v1.zap.org"
                  target={"_blank"}
                  rel={"noreferrer"}
                  variant="outlined">
                  switch to v1.0
               </Button>
               <Button
                  onClick={handleClose}
                  color={"primary"}
                  variant={"contained"}>
                  I accept
               </Button>
            </DialogActions>
         </DialogContent>
      </Dialog>
   );
};

BetaWarningDialog.propTypes = {
   className: PropTypes.string,
   open: PropTypes.bool,
   handleClose: PropTypes.func,
};

BetaWarningDialog.defaultProps = {
   className: "",
   open: false,
   handleClose: () => {},
};

export default BetaWarningDialog;