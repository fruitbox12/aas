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
  
  function MaxPriceDialog({ className, ...rest }) {
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
          <DialogTitle id="alert-dialog-title">{"Maximum price of dots in Zap"}</DialogTitle>
          <DialogContent>
            <DialogContentText>This field allows you to set the maximum price of Dots. This is the price in Zap that Dots cannot surpass</DialogContentText>
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
  
  MaxPriceDialog.propTypes = {
    className: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
  };
  
  export default MaxPriceDialog;