import React from 'react';
import { 
    Button, 
    Typography,
    Grid 
} from '@material-ui/core';
import { useStyles } from '../styles';

const ChooseBuilder = ({
    changeBuilder,
    navBtns
}) => {

    const classes = useStyles();

    return (
        <Grid className={classes.root} container>
            <Grid className={classes.title} xs={12}>
                <Typography
                    variant="h2"
                    color="textPrimary">
                    Choose a Curve Initializer 
            </Typography>
            </Grid>
            <Grid 
                alignContent={'center'} 
                className={classes.content} 
                container
                direction={'column'}
                justify={'space-evenly'}
                xs={12}>
                <Button
                    color={"primary"}
                    className={classes.vSpace}
                    fullWidth
                    size={"large"}
                    onClick={() => changeBuilder(1)}
                    variant={"contained"}>
                    Visual Curve Initializer
                </Button>
                <Button
                    color={"secondary"}
                    className={classes.vSpace}
                    fullWidth
                    size={"large"}
                    onClick={() => changeBuilder(2)}
                    variant={"outlined"}>
                    Argument Curve Initializer
            </Button>
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

export default ChooseBuilder;