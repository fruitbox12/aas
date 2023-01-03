import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
   makeStyles,
   Typography,
   Grid,
   Button,
   Card,
   CardContent,
   IconButton,
   MenuItem,
   Menu,
} from "@material-ui/core";
import { ProviderCurve } from "src/components/providercurve/ProviderCurve";
import LaunchIcon from "@material-ui/icons/Launch";
import { BondIcon } from "src/components/icons/bondicon";
import { NavLink as RouterLink } from "react-router-dom";
import { useHistory } from "react-router";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import WidgetDialog from "src/components/widgetdialog.js";

 let cardHeight = 50;
const useStyles = makeStyles((theme) => ({
   root: {},
   card: {
      margin: theme.spacing(1),
   },
   // curve: {
   //    marginLeft: theme.spacing(-5.5),
   // },
   vSpace: {
     marginTop: theme.spacing(1.5),
   },
   vSpace2: {
      marginTop: theme.spacing(3.5),
   },
   text: {
      marginLeft: theme.spacing(2),
   },
   btn: {
      width: "75%",
      marginLeft: theme.spacing(1.5),
   },
   cardHeight: {
      height: `${cardHeight}vh`,
   },
   graph:{
      height:`${cardHeight * .7}vh`
   }
}));

const EndpointCard = ({
   className,
   oracleName,
   oracleAddress,
   endptName,
   coefficientArr,
   // markdownLink,
   // jsonLink,
   dotPrice,
   dotsBonded,
   symbol,
   dotLimit,
   dotsIssued,
}) => {
   const classes = useStyles();
   const history = useHistory();
   const [rise, setRise] = useState(3);
   const [clickFn, setClickFn] = useState({
      fn: () => {
         history.push(
            "/app/bondwizard/" + oracleAddress + encodeURIComponent(endptName)
         );
      },
   });
   // const [open, setOpen] = useState(false);
   const [openDialog, setOpenDialog] = useState(false);
   const [anchorEl, setAnchorEl] = useState(null);

   var fromWei = dotPrice / Math.pow(10, 18);
   fromWei = fromWei < 0.0001 ? "< 0.0001 " : fromWei.toFixed(4);

   const thumbnailParams = {
      existingCoefficientArray: coefficientArr,
      editable: false,
      bondedDots: dotsBonded,
      bonded: true,
      bonding: false,
      tokenSymbol: symbol,
      // parentWidth: window.screen.width > 650 ? 200 : 100,
      // parentHeight: window.screen.width > 650 ? 200 : 100,
      axesOptions: { xAxisTicks: 0, yAxisTicks: 0, showLabels: false, tickSize: 0 },
      zoomFit: 1,
   };

   const onMouseOverCard = () => setRise(24),
      onMouseOutCard = () => setRise(3),
      onClickReroute = () => {
         // console.log(encodeURIComponent(endptName));
         history.push(
            "/app/bondwizard/" + oracleAddress + encodeURIComponent(endptName)
         );
      },
      onMouseOnClickable = () => setClickFn({ fn: () => {} }),
      onMouseOutClickable = () => setClickFn({ fn: onClickReroute });

   const handleToggle = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = (event) => {
      setAnchorEl(null);
   };

   function handleListKeyDown(event) {
      if (event.key === "Tab") {
         event.preventDefault();
      }
   }

   const handleOpenDialog = () => {
      setOpenDialog(true);
   };

   const handleCloseDialog = () => {
      setOpenDialog(false);
   };

   return (
      <>
          <Card
            className={clsx(className, classes.card)}
            elevation={rise}
            raised={rise === 24}
          >
            <CardContent
              onClick={clickFn.fn}
              onMouseOver={onMouseOverCard}
              onMouseOut={onMouseOutCard}            
            >
               <Grid
                  container
                  direction="row"
                  justify="space-evenly"
                  alignItems="center"
                  className={classes.cardHeight}
                >
                  <Grid
                     container
                     direction="row"
                     justify="space-between"
                     alignItems="center"
                     xs={12}>
                     <Typography color={"textPrimary"} variant={"h3"}>
                        {endptName}
                     </Typography>
                     <IconButton
                        aria-haspopup="true"
                        onClick={handleToggle}
                        onMouseOver={onMouseOnClickable}
                        onMouseOut={onMouseOutClickable}>
                        <MoreVertIcon />
                     </IconButton>
                  </Grid>
                     <Grid
                     className={/*clsx(classes.vSpace, classes.graph)*/ classes.graph}
                     container
                     direction="row"
                     justify="flex-start"
                     alignItems="center"
                     xs={12}>
                     <ProviderCurve
                        className={classes.curve}
                        {...thumbnailParams}
                     />
                  </Grid>
                  {/* Curve Grpahic */}
                  {/* <Grid
                     className={clsx(classes.vSpace, classes.test)}
                     container
                     direction="row"
                     justify="flex-start"
                     alignItems="center"
                     xs={12}>
                     <ProviderCurve
                        className={classes.curve}
                        {...thumbnailParams}
                     />
                  </Grid> */}
                  {/* Curve Details */}
                  <Grid /*className={classes.vSpace}*/ container xs={12}>
                     <Grid item sm={7} xs={12}>
                        <Typography
                           className={clsx(classes.vSpace, classes.text)}
                           color={"textPrimary"}
                           variant={"h4"}>
                           {fromWei} {symbol !== "" ? `ZAP/${symbol}` : `ZAP/Dot`}
                        </Typography>

                        <RouterLink
                           onMouseOver={onMouseOnClickable}
                           onMouseOut={onMouseOutClickable}
                           // target={"_blank"}
                           // rel={"noopener noreferrer"}
                           // href={
                           //    "https://etherscan.io/address/" +
                           //    oracleAddress
                           // }
                           to={"/app/provider/" + oracleAddress}>
                           <Typography
                              className={classes.text}
                              color={"textSecondary"}
                              variant={"subtitle1"}>
                              {oracleName}
                              <LaunchIcon fontSize={"inherit"} />
                           </Typography>
                        </RouterLink>
                     </Grid>
                     <Grid sm={5} xs={12}>
                        <Button
                           className={clsx(classes.vSpace, classes.btn)}
                           color={"primary"}
                           fullWidth
                           variant={"contained"}
                           startIcon={<BondIcon />}
                           onClick={onClickReroute}>
                           Bond
                        </Button>
                     </Grid>
                  </Grid>
               </Grid>
            </CardContent>
         </Card>
         {/* popup menu */}
         <Menu
            onKeyDown={handleListKeyDown}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <MenuItem onClick={onClickReroute}>Bond</MenuItem>
            <MenuItem onClick={onClickReroute}>Details</MenuItem>
            <MenuItem onClick={handleOpenDialog}>Widget</MenuItem>
         </Menu>
         {/* For the code snippet */}
         <WidgetDialog
            oracleAddress={oracleAddress}
            endptName={endptName}
            open={openDialog}
            handleClose={handleCloseDialog}
         />
      </>
   );
};

EndpointCard.propTypes = {
   className: PropTypes.string,
   oracleName: PropTypes.string,
   oracleAddress: PropTypes.string,
   endptName: PropTypes.string,
   coefficientArr: PropTypes.array,
   markdownLink: PropTypes.string,
   jsonLink: PropTypes.string,
   dotPrice: PropTypes.number,
   dotsBonded: PropTypes.number,
   dotLimit: PropTypes.number,
   dotsIssued: PropTypes.number,
};

EndpointCard.defaultProps = {
   className: "",
   oracleName: "",
   oracleAddress: "",
   endptName: "",
   coefficientArr: [],
   markdownLink: "",
   jsonLink: "",
   dotPrice: 0,
   dotsBonded: 0,
   dotLimit: 0,
   dotsIssued: 0,
};

export default EndpointCard;
