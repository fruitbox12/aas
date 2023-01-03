import React from "react";
import {
  Button,
  makeStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
  DialogTitle,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  Send: {
    background: "black",
  },
  radioButtonTextContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  radioButtonText: {
    display: 'inline-block',
    marginLeft: 10,
  },
  radioButtonIcon: {
    marginLeft: 2,
  }
}));

const SendTokenModal = ({ handleClose, tokenopen }) => {
  const classes = useStyles();
  return (
    <Dialog
      //   fullWidth
      //   disableBackdropClick='true'
      open={tokenopen}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
    >
      <DialogContent>
        <DialogTitle id='alert-dialog-title'>
          Send To:
          <TextField
            autoFocus
            margin='dense'
            id='flat'
            label='Public Address (0x)'
            type='text'
            fullWidth
          />
        </DialogTitle>
        <DialogTitle id='alert-dialog-title'>
          Tokens:
          <RadioGroup>
            <FormControlLabel value='ether' control={<Radio />} label={<div className={classes.radioButtonTextContainer}>
              <img src={"/static/ETH_logo_512.png"} height="30px" width="auto" className={classes.radioButtonIcon} />
              <Typography variant="h6" className={classes.radioButtonText}>ETHER</Typography>
            </div>} />
            <FormControlLabel value='zap' control={<Radio />} label={<div className={classes.radioButtonTextContainer}>
              <img src={"/static/Unbonded Zap Logo.png"} height="30px" width="auto" className={classes.radioButtonIcon} />
              <Typography variant="h6" className={classes.radioButtonText}>ZAP</Typography>
            </div>} />
          </RadioGroup>
        </DialogTitle>
        <DialogTitle id='alert-dialog-title'>
          Amount:{" "}
          <Button size='small' variant='contained' color='secondary'>
            Max
          </Button>
          <TextField
            autoFocus
            margin='dense'
            id='flat'
            label='Amount'
            type='text'
            fullWidth
          />
        </DialogTitle>
        <DialogTitle id='alert-dialog-title'>
          Gas Limit:
          <TextField
            autoFocus
            margin='dense'
            id='flat'
            label='Amount'
            type='text'
            fullWidth
          />
        </DialogTitle>
        <Button variant='contained' color='secondary'>
          Send
        </Button>
      </DialogContent>
    </Dialog>
  );
};

SendTokenModal.defaultProps = {
  handleClose: () => { },
  tokenopen: true,
};

export default SendTokenModal;
