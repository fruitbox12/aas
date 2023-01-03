import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
   makeStyles,
   Button,
   Dialog,
   DialogActions,
   DialogContentText,
   DialogTitle,
} from "@material-ui/core";
import { IoMdCopy } from "react-icons/io";

const useStyles = makeStyles((theme) => ({
   root: {},
   card: {
      margin: theme.spacing(1),
   },
}));

const WidgetDialog = ({
   className,
   oracleAddress,
   endptName,
   open,
   handleClose,
}) => {
   const classes = useStyles();

   return (
      <Dialog
         className={clsx(className, classes.root)}
         open={open}
         onClose={handleClose}
         fullWidth
         maxWidth={"md"}>
         <DialogTitle> Widget for {endptName}</DialogTitle>
         <DialogContentText>
            <DialogActions>
               <Button
                  color={"primary"}
                  variant={"contained"}
                  startIcon={<IoMdCopy />}>
                  Copy to Clipboard
               </Button>
               <Button
                  onClick={handleClose}
                  color={"primary"}
                  variant={"outlined"}>
                  Close
               </Button>
            </DialogActions>
         </DialogContentText>
      </Dialog>
   );
};

WidgetDialog.propTypes = {
   className: PropTypes.string,
   oracleAdress: PropTypes.string,
   endptName: PropTypes.string,
   open: PropTypes.bool,
   handleClose: PropTypes.func,
};

WidgetDialog.defaultProps = {
   className: "",
   oracleAdress: "",
   endptName: "",
   open: false,
   handleClose: () => {},
};

export default WidgetDialog;
