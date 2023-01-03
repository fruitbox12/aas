import React, { useRef} from "react";
import { TextField, Grid, Typography} from "@material-ui/core";
import { useStyles } from "src/views/endpointwizard/styles.js";

const DeployDotFactory = ({navBtns, handleChange, info}) => {
    const classes = useStyles();
    const btnDisplay = useRef();
    return (
        <Grid className={classes.root} container>
            <Grid className={classes.title} xs={12}>
                <Typography variant="h2" color="textPrimary">
                    Provider Information               
                </Typography>
            </Grid>
            <Grid
            alignContent={"center"}
            className={classes.content}
            container
            direction={"column"}
            justify={"space-evenly"}
            xs={12}>
            <form className={classes.inputField}>
                <TextField
                    defaultValue={info.coordinator}
                    // error={emptyEndpoint}
                    // helperText="Endpoint name cannot be empty"
                    fullWidth
                    label={"Provider Coordinator"}
                    disabled
                    required
                    variant="filled"
                />
                <TextField
                    defaultValue={info.factoryAddress}
                    fullWidth
                    disabled
                    label={"Provider Factory"}
                    required
                    variant="filled"
                />
                <TextField
                    defaultValue={info.publicKey ? info.publicKey.toString() : 0}
                    fullWidth
                    label={"Provider Public Key"}
                    required
                    disabled
                    variant="filled"
                />
                {info.providerAlready ?                 
                    <TextField
                        defaultValue={info.providerName}
                        fullWidth
                        error={info.proNameEmpty}
                        label={"Provider Title"}
                        required
                        disabled
                        variant="filled"
                    /> : 
                    <TextField
                        defaultValue={info.providerName}
                        fullWidth
                        helperText = {info.proNameEmpty ? "Provider Title cannot be empty" : ""}
                        error={info.proNameEmpty}
                        label={"Provider Title"}
                        onChange={handleChange(
                            "providerName",
                            "proNameEmpty"
                        )}
                        required
                        variant="filled"
                    />
                }
                </form>
            </Grid>
            <Grid
                className={classes.navbtns}
                ref={btnDisplay}
                container
                direction={"row"}
                item
                justify={"flex-end"}
                xs={12}>
                {navBtns}
            </Grid>
      </Grid>
    )
}

export default DeployDotFactory