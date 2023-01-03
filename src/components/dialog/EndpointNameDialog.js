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
       float: "left",
       margin: "auto",
    },
 }));
 
  
  function EndpointNameDialog({ className, ...rest }) {
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
               {"Endpoint Name"}
            </DialogTitle>
            <DialogContent>
               <DialogContentText>
                An endpoint is a specific curve on a particular provider. Each endpoint is able to have respective markdown and json files describing the purpose of the oracle endpoint (E.g: what data is able to be queried from the endpoint). A provider can have several endpoints mapped to itself, each with a different bonding curve and data querying schema.
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
  
  EndpointNameDialog.propTypes = {
    className: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
  };
  
  export default EndpointNameDialog;