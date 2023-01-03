import React, { useRef, useEffect } from "react";
import { Grid, Typography, TextField } from "@material-ui/core";
import { useStyles } from "../styles";
import MaxSupplyPriceDialog from "src/components/dialog/MaxSupplyPriceDialog";
import MaxPriceDialog from "src/components/dialog/MaxPriceDialog.js"

const MaxDotSupply = ({ handleChange, navBtns, values }) => {
  const classes = useStyles();
  const textField = useRef();
  const parent = useRef();


  useEffect(()=>{
    const width=parent.current.offsetWidth
      textField.current.style.width=`${width/2}px`
  }, [])
  return (
    <Grid className={classes.root} container ref={parent}>
      <Grid className={classes.title} xs={12}>
        <Typography variant="h2" color="textPrimary">
          Max Supply and Price
        </Typography>
      </Grid>
      <Grid alignContent={"center"} className={classes.content} container direction={"column"} justify={"space-evenly"} xs={12}>
        <form className={classes.root}>
          <TextField
            defaultValue={values.maxDots}
            fullWidth
            label={"Maximum y-axis"}
            type={"number"}
            inputProps={{ min: 1, max: 100000 }}
            inputRef={textField}
            onChange={handleChange("maxDots")}
            variant={"filled"}
          />
          <div className={classes.coefficientArrayDialogueButton}>
              <MaxSupplyPriceDialog/>
          </div>
        </form>
        <form className={classes.root}>
          <TextField
            defaultValue={values.maxYAxis}
            fullWidth
            label={"Maximum x-axis"}
            type={"number"}
            inputProps={{ min: 1, max: 100000 }}
            inputRef={textField}
            onChange={handleChange("maxYAxis")}
            variant={"filled"}
          />
          <div className={classes.coefficientArrayDialogueButton}>
              <MaxPriceDialog/>
          </div>
        </form>
      </Grid>
      <Grid className={classes.navbtns} container direction={"row"} item justify={"flex-end"} xs={12}>
        {navBtns}
      </Grid>
    </Grid>
  );
};

export default MaxDotSupply;