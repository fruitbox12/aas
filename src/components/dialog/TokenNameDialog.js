import {
    Button,
    IconButton,
    makeStyles
  } from '@material-ui/core';
  import React from 'react';
  
  import Dialog from '@material-ui/core/Dialog';
  import DialogActions from '@material-ui/core/DialogActions';
  import DialogContent from '@material-ui/core/DialogContent';
  import DialogContentText from '@material-ui/core/DialogContentText';
  import DialogTitle from '@material-ui/core/DialogTitle';
  import Help from '@material-ui/icons/Help';
  import PropTypes from 'prop-types';
  
  const useStyles = makeStyles((theme) => ({
    root: {
      //padding: theme.spacing(6),
    },
    contentText: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    icon: {
       float: "auto",
      //  margin: "auto",
    },
 }));
 
  
  function TokenNameDialog({ className, ...rest }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div className={classes.icon}>
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
               {"Token Name"}
            </DialogTitle>
            <DialogContent>
               <DialogContentText>
                This is a name corresponding to the ERC20 standard, learn more here: https://ethereum.org/en/developers/docs/standards/tokens/erc-20/
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
  
  TokenNameDialog.propTypes = {
    className: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
  };
  
  export default TokenNameDialog;