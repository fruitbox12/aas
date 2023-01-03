import React from "react";
import {
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
   makeStyles,
   Grid,
   Typography,
} from "@material-ui/core/";
import copyToClipboard from "../../utils/copyToClipboard";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import useQrCode from "../../api/qrgenerator";

const useStyles = makeStyles((theme) => ({
   qr: {
      marginBottom: theme.spacing(2.5),
   },
}));

const QrModal = ({ address, handleClose, open }) => {
   const classes = useStyles();
   let [qrCodeTag, qrError, qrLoading] = useQrCode(address);

   return (
      <Dialog
         aria-labelledby="alert-dialog-title"
         aria-describedby="alert-dialog-description"
         onClose={handleClose}
         open={open}>
         <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' }}>
            <Typography variant={"h4"}>Your Ethereum Wallet Address</Typography>
         </DialogTitle>
         <DialogContent>
            <Grid
               alignItems="center"
               className={classes.qr}
               container
               direction="column"
               item
               justify="center">
               {qrCodeTag}
            </Grid>
            <DialogContentText id="alert-dialog-description">
               <Button
                  endIcon={<FileCopyIcon />}
                  onClick={copyToClipboard(address)}>
                  {address}
               </Button>
            </DialogContentText>
         </DialogContent>
         <DialogActions>
            <Button onClick={handleClose} color="primary" variant={"outlined"}>
               Close
            </Button>
         </DialogActions>
      </Dialog>
   );
};

QrModal.defaultProps = {
   address: "0x6781a0f84c7e9e846dcb84a9a5bd49333067b104",
   handleClose: () => {},
   open: false,
};

export default QrModal;
