import React from "react";
import {
   Grid,
   Typography,
   FormControl,
   InputLabel,
   Select,
   MenuItem,
} from "@material-ui/core";
import { useStyles } from "src/views/endpointwizard/styles.js";
import ArtifactDialog from "src/components/dialog/ArtifactDialog";

const ArtifactSelection = ({navBtns, info, handleDropChange}) => {
    const classes = useStyles();
   return (
      <Grid className={classes.root} container>
         <Grid className={classes.title} xs={12}>
            <Typography variant="h2" color="textPrimary">
               Artifact Selection
            </Typography>
            </Grid>
            <Grid alignContent={"center"} className={classes.content} container direction={"column"} justify={"space-evenly"} xs={12}>
                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-filled-label">Artifact</InputLabel>
                    <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={info.drop}
                    onChange={handleDropChange}
                    >
                    <MenuItem value="" disabled>
                        <em>Artifact Selection</em>
                    </MenuItem>
                    <MenuItem value={"SampleContest"}>SampleContest</MenuItem>
                    <MenuItem value={"TokenDotFactory"}>TokenDotFactory</MenuItem>
                    </Select>
                    <div className={classes.coefficientArrayDialogueButton}>
                <ArtifactDialog/>
              </div>
                </FormControl>
            <Grid
               alignContent={"start"}
               className={classes.display}
               container
               direction={"column"}
               xs={12}
               dangerouslySetInnerHTML={{ __html: info.artifact !== "" ?  JSON.stringify(info.artifact, null, 2) :"Please selection from the drop down menu"}}></Grid>
         </Grid>
         <Grid
            className={classes.navbtns}
            container
            direction={"row"}
            item
            justify={"flex-end"}
            xs={12}>
            {navBtns}
         </Grid>
      </Grid>
   );
};

export default ArtifactSelection;
