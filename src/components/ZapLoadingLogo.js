import React from "react";
import clsx from "clsx";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
   root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      maxWidth: "95%",
      "& .MuiTextField-root": {
         margin: theme.spacing(1),
         width: "90%",
      },
      marginTop: theme.spacing(2),
      minHeight: 500,
   },
   fromDash: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      maxWidth: "100%",
      "& .MuiTextField-root": {
         margin: theme.spacing(1),
         width: "90%",
      },
   },
   svg: {
      display: "block",
      borderRadius: "4px",
      strokeWidth: "4px",
      stroke: theme.palette.secondary.main,
      strokeLinejoin: "round",
      alignSelf: "center",
   },
   text: {
      textAlign: "center",
   },
   insidePoly: {
      fill: "transparent",
   },
}));

const ZapLoadingLogo = ({ className, message, fromDash }) => {
   const classes = useStyles();
   return (
      <Grid
         className={
            fromDash
               ? clsx(classes.fromDash, classes.zapContent, className)
               : clsx(className, classes.root)
         }
         container>
         <Grid
            alignContent={"center"}
            container
            color="textPrimary"
            direction={"column"}
            justify={"space-evenly"}
            xs={12}>
            <svg width={90} height={150} className={classes.svg}>
               <polygon
                  points="49,5 49,59 82,59 38,142 38,88 5,88"
                  fill="#7fe7fd"
                  stroke="none">
                  <animate
                     attributeName="points"
                     values="38.5,68.5 38.5,68.5 38.5,68.5 38.5,68.5 38.5,68.5 38.5,68.5; 49,5 49,59 82,59 38,142 38,88 5,88"
                     dur="2s"
                     repeatCount="indefinite"></animate>
               </polygon>
               <polygon
                  points="49,5 49,59 82,59 38,142 38,88 5,88"
                  className={classes.insidePoly}
               />
            </svg>
            <Typography
               className={classes.text}
               variant="h4"
               color="textPrimary">
               {message}
            </Typography>
         </Grid>
      </Grid>
   );
};

export default ZapLoadingLogo;
