import React from 'react';
import {
    TextField,
    Grid,
    Typography,
    InputAdornment
} from '@material-ui/core';
import { useStyles } from '../styles';

const ArgumentCurveBuilder = ({
    arrayErrorMsg,
    invalidArray,
    handleChange,
    navBtns,
    values
}) => {

    const classes = useStyles();

    return (
        <Grid className={classes.root} container>
            <Grid className={classes.title} xs={12}>
                <Typography
                    variant="h2"
                    color="textPrimary">
                    Argument Curve Initializer
            </Typography>
            </Grid>
            <Grid
                alignContent={'center'}
                className={classes.content}
                container
                direction={'column'}
                justify={'center'}
                xs={12}>
                <TextField
                    defaultValue={values.curveArray}
                    error={invalidArray}
                    fullWidth
                    helperText={arrayErrorMsg}
                    hintText={"Arguments to pass for your bonding curve"}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">[</InputAdornment>,
                        endAdornment: <InputAdornment position="start">]</InputAdornment>,
                      }}
                    label={"Argument Array"}
                    onChange={handleChange("curveArray", "invalidArray")}
                    required
                    variant={"filled"} />
            </Grid>
            <Grid
                className={classes.navbtns}
                container direction={'row'}
                justify={'flex-end'}
                spacing={1}
                xs={12}>
                {navBtns}
            </Grid>
        </Grid>
    );
};

export default ArgumentCurveBuilder;