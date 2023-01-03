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
      padding: theme.spacing(6),
    },
    contentText: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    }
  
  }));
  
  function ProviderAddressDialog({ className, ...rest }) {
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
        <IconButton variant="outlined" color="secondary" onClick={handleClickOpen}>
          <Help/>
        </IconButton>
        <Dialog
          className={classes.root}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Provider Address"}</DialogTitle>
          <DialogContent>
            <DialogContentText>A Provider address is an ethereum address representing a provider account. In order for a user to create an oracle, they must become a provider using the initiateProvider solidity function</DialogContentText>
            {/* <DialogContentText id="alert-dialog-description" className={classes.contentText}>
              <ul>
                <li>n1 is the number of terms in the first polynomial</li>
                <li>c0, c1, ... are the coefficients of their respective n terms</li>
                <li>l1 is the x limit of the first polynomial function</li>
                <li>n2 is the number of terms in the second polynomial</li>
              </ul>
            </DialogContentText> */}
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
  
  ProviderAddressDialog.propTypes = {
    className: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
  };
  
  export default ProviderAddressDialog;