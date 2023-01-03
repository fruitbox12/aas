import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
   makeStyles,
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
   Fade,
   CircularProgress,
   Grid,
   TextField,
   InputAdornment,
   IconButton,
   Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { BiCheckCircle } from "react-icons/bi";
import { BsArrowDownShort } from "react-icons/bs";
import { GrPowerCycle } from "react-icons/gr";

const useStyles = makeStyles((theme) => ({
   root: {},
   card: {
      margin: theme.spacing(1),
   },
   vSpace: {
      marginTop: theme.spacing(4.5),
   },
   vSpaceSm: {
      marginTop: theme.spacing(1),
   },
   icon: {
      color: theme.palette.secondary.main,
   },
   text: {
      fontSize: 19,
   },
   box: {
      outline: "none",
   },
   textColor: {
      color: theme.palette.text.primary + " !important",
   },
}));

const BondConfirmDialog = ({
   className,
   dots,
   handleAccept,
   handleCancel,
   handleTsxDone,
   mode,
   open,
   tsx,
   tsxEnum,
   tsxState,
   zap,
   symbol,
}) => {
   // ***** Hooks*****
   const classes = useStyles();
   const [perDot, setPerDot] = useState(true);

   // ***** Handle Events *****

   const handleChangeAvg = () => {
      setPerDot(!perDot);
   };

   // ***** Handle Rendering the Text and Components *****
   const isToken = symbol !== "";
   var title = "";
   // eslint-disable-next-line default-case
   switch (tsxState) {
      case tsxEnum[0]:
         title = "Confirm " + mode;
         break;
      case tsxEnum[1]:
         title = "Waiting for Transaction Confirmation";
         break;
      case tsxEnum[2]:
         title = "Transaction Confirmed";
         break;
   }

   let zapComp = (
         <TextField
            disabled
            classes={classes.box}
            fullWidth
            variant="outlined"
            InputProps={{
               className: classes.textColor,
               readOnly: true,
               endAdornment: (
                  <InputAdornment position="end">ZAP</InputAdornment>
               ),
            }}
            value={zap}
         />
      ),
      dotsComp = (
         <TextField
            disabled
            classes={classes.box}
            fullWidth
            variant="outlined"
            InputProps={{
               className: classes.textColor,
               readOnly: true,
               endAdornment: (
                  <InputAdornment position="end">
                     {isToken ? symbol.toUpperCase() : "DOT"}
                  </InputAdornment>
               ),
            }}
            value={dots}
         />
      );
   var vals = <></>;
   // eslint-disable-next-line default-case
   switch (mode) {
      case "Bond":
         vals = (
            <>
               <Typography align={"left"}>From:</Typography>
               {zapComp}
               <Grid
                  className={classes.vSpaceSm}
                  container
                  xs={12}
                  justify="center"
                  alignItems="center">
                  <BsArrowDownShort size={28} />
               </Grid>
               <Typography align={"left"}>To:</Typography>
               {dotsComp}
            </>
         );
         break;
      case "Unbond":
         vals = (
            <>
               <Typography align={"left"}>From:</Typography>
               {dotsComp}
               <Grid
                  className={classes.vSpaceSm}
                  container
                  xs={12}
                  justify="center"
                  alignItems="center">
                  <BsArrowDownShort size={28} />
               </Grid>
               <Typography align={"left"}>To:</Typography>
               {zapComp}
            </>
         );
         break;
   }

   var perUnit = perDot ? zap / dots : dots / zap;
   var text;
   if (isToken) {
      text = perDot ? `ZAP/${symbol}` : `${symbol}/ZAP`;
   } else {
      text = perDot ? "ZAP/DOT" : "DOT/ZAP";
   }
   perUnit = perUnit < 0.0001 ? "<0.0001" : perUnit.toFixed(18);
   perUnit = parseFloat(perUnit) > 1 ? parseFloat(perUnit).toFixed(4) : perUnit;

   var averageVal = (
      <Grid container xs={12}>
         <Grid container xs={9} justify="flex-start" alignItems="center">
            Average: {perUnit}
         </Grid>
         <Grid container xs={3} justify="flex-start" alignItems="center">
            <Button
               color={"inherit"}
               endIcon={<GrPowerCycle />}
               onClick={handleChangeAvg}
               size={"large"}>
               {text}
            </Button>
         </Grid>
      </Grid>
   );
   // eslint-disable-next-line default-case
   var btns = <></>;
   // eslint-disable-next-line default-case
   switch (tsxState) {
      case tsxEnum[0]:
         btns = (
            <Button
               className={classes.item}
               color={"primary"}
               fullWidth
               onClick={handleAccept}
               startIcon={<CheckCircleIcon />}
               variant={"contained"}>
               Confirm
            </Button>
         );
         break;
      case tsxEnum[1]:
      case tsxEnum[2]:
         btns = (
            <Button
               color={"primary"}
               fullWidth
               onClick={handleTsxDone}
               variant={"outlined"}>
               Close
            </Button>
         );
         break;
   }

   let tsxDets = isToken
      ? mode + " " + dots + ` ${symbol} for ` + zap + " ZAP"
      : mode + " " + dots + " DOT for " + zap + " ZAP";

   let closeDialog = tsxState === tsxEnum[0] ? handleCancel : handleTsxDone;

   useEffect(() => {}, [tsxState, zap, dots]);

   return (
      <Dialog
         className={clsx(className, classes.root)}
         open={open}
         onClose={closeDialog}
         fullWidth
         maxWidth={"xs"}>
         <DialogTitle>
            <Grid
               container
               direction="row"
               justify="space-between"
               alignItems="center">
               <p className={classes.text}>{title}</p>{" "}
               <IconButton onClick={closeDialog}>
                  <CloseIcon />
               </IconButton>
            </Grid>
         </DialogTitle>
         <DialogContent>
            <DialogContentText className={classes.text}>
               {tsxState === tsxEnum[0] && (
                  <>
                     <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center">
                        {vals}
                     </Grid>
                     <div className={classes.vSpace}>{averageVal}</div>
                  </>
               )}
               {tsxState === tsxEnum[1] && (
                  <Grid
                     container
                     direction="column"
                     justify="center"
                     alignItems="center">
                     <CircularProgress color={"secondary"} size={75} />
                     <Typography
                        className={classes.vSpace}
                        align={"center"}
                        variant={"body1"}>
                        {tsxDets}
                     </Typography>
                  </Grid>
               )}
               {tsxState === tsxEnum[2] && (
                  <Grid
                     container
                     direction="column"
                     justify="center"
                     alignItems="center">
                     <Fade in={true}>
                        <BiCheckCircle
                           className={classes.icon}
                           size={75}
                           timeout={5000}
                        />
                     </Fade>
                     <Typography
                        className={classes.vSpace}
                        align={"center"}
                        variant={"body1"}>
                        {tsxDets}
                     </Typography>
                  </Grid>
               )}
            </DialogContentText>
            <DialogActions>{btns}</DialogActions>
         </DialogContent>
      </Dialog>
   );
};

BondConfirmDialog.propTypes = {
   className: PropTypes.string,
   dots: PropTypes.number,
   handleAccept: PropTypes.func,
   handleCancel: PropTypes.func,
   mode: PropTypes.string,
   open: PropTypes.bool,
   tsx: PropTypes.object,
   tsxEnum: PropTypes.object,
   tsxState: PropTypes.string,
   zap: PropTypes.number,
};

BondConfirmDialog.defaultProps = {
   className: "",
   dots: 0,
   handleAccept: () => {},
   handleCancel: () => {},
   mode: "Bond",
   open: false,
   tsx: null,
   tsxEnum: {},
   tsxState: null,
   zap: 0,
};

export default BondConfirmDialog;
