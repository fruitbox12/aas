import React from 'react';
//import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
    Grid,
    Typography,
    makeStyles
} from '@material-ui/core';
//import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
    root: {},
    action: {
        marginBottom: theme.spacing(1),
        '& + &': {
            marginLeft: theme.spacing(1)
        }
    },
    actionIcon: {
        marginRight: theme.spacing(1)
    }
}));

function Header({
    className,
    onEventAdd,
    define,
    title,
    ...rest
}) {
    const classes = useStyles();

    return (
        <Grid
            className={clsx(classes.root, className)}
            container
            justify="space-between"
            spacing={3}
            {...rest}
        >
            <Grid item>
                {/* <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    <Link
                        variant="body1"
                        color="inherit"
                        to="/app"
                        component={RouterLink} >
                        Dashboard
                    </Link>
                    <Typography
                        variant="body1"
                        color="textPrimary" >
                        {title}
                    </Typography>
                </Breadcrumbs> */}
                <Typography
                    variant="h3"
                    color="textPrimary" >
                    {define}
        </Typography>
            </Grid>
        </Grid>
    );
}

Header.propTypes = {
    className: PropTypes.string,
    onEventAdd: PropTypes.func
};

Header.defaultProps = {
    onEventAdd: () => { }
};

export default Header;
