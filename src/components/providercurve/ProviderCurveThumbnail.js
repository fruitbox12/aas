import React from "react";
// import PropTypes from "prop-types";
import { Box, makeStyles } from "@material-ui/core";
import {ProviderCurve} from "src/components/providercurve/ProviderCurve";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
   root: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
   },
   providerCurve: {},
}));

const ProviderCurveThumbnail = (props) => {
   const {
      className,
      existingCoefficientArray,
      bondedDots,
      parentWidth,
      parentHeight,
      axesOptions,
      bonded,
      zoomFit,
      // editable,
      // bonding
   } = props;
   let editable = false;
   let bonding = false;
   const classes = useStyles();

   return (
      <Box
        display="flex"
        justifyContent="center"
        mb={6}
        className={clsx(className, classes.root)}>
          <ProviderCurve
          className={classes.providerCurve}
          existingCoefficientArray={existingCoefficientArray}
          editable={editable}
          bondedDots={bondedDots}
          bonded={bonded}
          bonding={bonding}
          parentWidth={parentWidth}
          parentHeight={parentHeight}
          axesOptions={axesOptions}
          curveId={props.curveId} 
          zoomFit={zoomFit}
          values={props.values}
          />
      </Box>
   );
};

ProviderCurveThumbnail.defaultProps = {
   className: "",
  //  existingCoefficientArray: [
  //     4,
  //     0,
  //     0,
  //     0.002962962962962963,
  //     -0.0000038506172839506175,
  //     450,
  //  ],
  //  editable: false,
  //  bondedDots: 0,
  //  bonded: false,
  //  bonding: false,
  //  parentWidth: null,
  //  parentHeight: null,
  //  axesOptions: { xAxisTicks: 3, yAxisTicks: 3, showLabels: false },
   zoomFit: 1.1
};

export default ProviderCurveThumbnail;
