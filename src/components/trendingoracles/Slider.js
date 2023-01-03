import React from "react";
import { Card, makeStyles, Typography } from "@material-ui/core";
import { ProviderCurve } from "src/components/providercurve/ProviderCurve";
import { symbol } from "prop-types";

export default function Slider(props) {
   // const { backgroundColor } = props.content;
   const {
      oracleTitle,
      endpointName,
      // dotsIssued,
      // dotLimit,
      // pricePerDot,
      dotsBounded,
      coeffecientArr,
      symbol,
   } = props.oracle;

   const useStyles = makeStyles(() => ({
      card: {
         borderRadius: 5,
         padding: "1vh 0vw",
         margin: "0px 5px",
         width: "100%",
         // height: "100%",
         height: '30vh',
         boxShadow: "8px 8px 8px black",
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         flexDirection: "column",
         backgroundColor: "#282c34",
         border: "1px solid #5c8c9a",
      },
   }));

   const classes = useStyles();

   const thumbnailParams = {
      existingCoefficientArray: coeffecientArr,
      editable: false,
      bondedDots: dotsBounded,
      bonded: true,
      bonding: false,
      tokenSymbol: symbol,
      parentWidth: window.screen.width > 650 ? 150 : 75,
      parentHeight: window.screen.width > 650 ? 80 : 40,
      axesOptions: { xAxisTicks: 0, yAxisTicks: 0, showLabels: false, tickSize: 0 },
      zoomFit: 1,
   };

   return (
      <Card className={classes.card}>
         {/* <Typography variant="h5" color="textPrimary">
        {`${dotsIssued * Math.pow(10,-9)} dots issued`}
      </Typography>
      <Typography variant="h5" color="textPrimary">
        {`${dotLimit * Math.pow(10,-9)} dot limit`}
      </Typography> */}

         {/* <Typography variant="overline" color="textSecondary">
        {oracleTitle}
      </Typography>
      <Typography variant="h3" color="textPrimary">
        {endpointName}
      </Typography> */}
         <ProviderCurve {...thumbnailParams} />
         <Typography variant="overline" color="textSecondary">
            {oracleTitle}
         </Typography>
         <Typography variant="h5" color="textPrimary">
            {endpointName}
         </Typography>
      </Card>
   );
}
