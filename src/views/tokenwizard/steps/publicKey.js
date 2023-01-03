import React, { useRef } from "react";
import { TextField, Grid, Typography } from "@material-ui/core";
import { useStyles } from "src/views/endpointwizard/styles.js";

const PublicKey = ({navBtns, info, handleChange}) => {
    const classes = useStyles();
    const btnDisplay=useRef();
    // useEffect(()=>{
    //     console.log(info.providerKey)
    // }, [info.providerKey])
    return (
        <Grid className={classes.root} container>
            <Grid className={classes.title} xs={12}>
                <Typography variant="h2" color="textPrimary">
                    Public Key
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
                    defaultValue={info.publicKey}
                    fullWidth
                    // hintText={"ProviderAddress"}
                    label={"Public Key"}
                    onChange={handleChange(
                        "publicKey",
                        "keyEmpty"
                     )}
                    multiline
                    rowsMax={16}
                    required
                    variant={"filled"}
                />
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
   );
};

export default PublicKey;
