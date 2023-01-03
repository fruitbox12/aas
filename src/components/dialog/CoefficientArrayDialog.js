import { Button, IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Help from "@material-ui/icons/Help";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
   root: {
      padding: theme.spacing(6),
   },
   contentText: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
   },
}));

function CoefficientArrayDialog({ tokenSymbol, className, ...rest }) {
   const classes = useStyles();
   const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <div>
         <IconButton
            variant="outlined"
            color="secondary"
            onClick={handleClickOpen}>
            <Help />
         </IconButton>
         <Dialog
            className={classes.root}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
               {"Bonding Curve Formula"}
            </DialogTitle>
            <DialogContent>
               <DialogContentText>
               The bonding curve and accompanying equation defines your tokens exchange rate with ZAP depending on current token supply.
               </DialogContentText>
               <DialogContentText>
                  Example: y = 30 + 0.0007x + 0.0001x<sup>2</sup>
               </DialogContentText>
               <DialogContentText
                  id="alert-dialog-description"
                  className={classes.contentText}>
                  <ul>
                     <li>y is the amount of ZAP held in reserve </li>
                     <li>
                        x is the amount of token that is currently minted
                     </li>
                     <li>The x and y axis limits can be changed via input field</li>
                  </ul>
               </DialogContentText>
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose} color="primary">
                  OK
               </Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}

CoefficientArrayDialog.propTypes = {
   className: PropTypes.string,
   isOpen: PropTypes.bool.isRequired,
};

export default CoefficientArrayDialog;
