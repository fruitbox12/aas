import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';
import React, { useState } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Help from '@material-ui/icons/Help';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    //padding: theme.spacing(6),
  },
  contentText: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  icon: {
     //float: "right",
     margin: "right",
  },
}));


function BrokerAddressDialog({ className, ...rest }) {
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
             {"Broker Address"}
          </DialogTitle>
          <DialogContent>
             <DialogContentText>
                Ethereum address that allows the user to ensure that a specific Ethereum address is the only account allowed to Bond and Unbond to that bonding curve.
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

BrokerAddressDialog.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
};

export default BrokerAddressDialog;