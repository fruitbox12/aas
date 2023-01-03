import React from "react";
import { Grid, /* Typography, TextField*/ } from "@material-ui/core";
import { useStyles } from "../styles";
import { ProviderCurve } from "src/components/providercurve/ProviderCurve"; 
import {useDebouncedEffect} from "src/hooks/useDebouncedEffect";

const DragCurveBuilder = ({ handleDragCurve, handleAxesArgs, navBtns, values, handleChange }) => {
  console.log(values.curveArray, "updated curve")
  const classes = useStyles();
  const editable = true;
  const bonding = false;
  const bonded = false;
  const bondedDots = 0;
// const parentWidth = window.screen.width > 1920 ? 600 : window.screen.width > 600 ?  400 : window.screen.width * (50/100);
// const parentHeight = window.screen.width > 1920 ? 600 : window.screen.width > 600 ? 400 : window.screen.width * (60/100);
  const axesOptions = window.screen.width > 600 ? { xAxisTicks: 5, yAxisTicks: 5, showLabels: true, tickSize: 5 } : { xAxisTicks: 3, yAxisTicks: 3, showLabels: true, tickSize: 3, };
  const zoomFit = 1;

  const [refresh, setRefresh]=React.useState(false)
  const [count, setCount]=React.useState(0)
  //  const dotMaxSupply = 10000;

  const refreshed = () => {
    if(count >= 1){
      setRefresh(true);
      // setCount(count + 1)
      // console.log("refreshing")
      setRefresh(false)
    }
      else{
        setCount(count + 1)
      }

  }

  useDebouncedEffect(()=>refreshed(), 2000, [values.maxDots, values.maxYAxis])


  return (
    <Grid className={classes.root} container>
      {/* <Grid className={classes.title} xs={12}>
        <Typography variant="h2" color="textPrimary">
          Initialize Curve
        </Typography>
      </Grid> */}
      <Grid alignContent={"center"} className={classes.content} container direction={"column"} justify={"space-around"} xs={12}>
        {refresh? null : <ProviderCurve
          editable={editable}
          bonding={bonding}
          bonded={bonded}
          bondedDots={bondedDots}
          // dotMaxSupply={dotMaxSupply}
          // curveId={curveId}
          // parentWidth={parentWidth}
          // parentHeight={parentHeight}
          values={values}
          tokenSymbol={values.tokenSymbol}
          existingCoefficientArray={values.curveArray}
          handleDragCurve={handleDragCurve}
          axesOptions={axesOptions}
          zoomFit={zoomFit}
          // handleChange={handleChange}
          handleAxesArgs={handleAxesArgs}
        />
        }
      </Grid>
      <Grid>
      {/* <TextField
            defaultValue={values.maxYAxis}
            fullWidth
            label={"Maximum y-axis"}
            type={"number"}
            id="maxYAxis"
            inputProps={{ min: 1, max: 100000 }}
            onChange={handleChange("maxYAxis")}
            variant={"filled"}
          />
          <TextField
            defaultValue={values.maxDots}
            fullWidth
            label={"Maximum x-axis"}
            type={"number"}
            id="maxXAxis"
            inputProps={{ min: 1, max: 100000 }}
            onChange={handleChange("maxDots")}
            variant={"filled"}
          /> */}
      </Grid>
      <Grid className={classes.navbtns} container item justify={"flex-end"} spacing={0} xs={12}>
        {navBtns}
      </Grid>
    </Grid>
  );
};

export default DragCurveBuilder;
