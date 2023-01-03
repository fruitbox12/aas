import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import {
  Button,
  ListItem,
  makeStyles,
  Link
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    item: {
        display: 'block',
        marginTop: 10,
        marginBottom: 10
    },
    button: {
        color: theme.palette.text.secondary,
        padding: '10px 8px',
        justifyContent: 'flex-start',
        textTransform: 'none',
        letterSpacing: 0,
        width: '100%'
    },
    icon: {
        display: 'flex',
        alignItems: 'center',
        marginRight: theme.spacing(1)
    },
    title: {
        marginRight: 'auto'
    },
    active: {
        color: theme.palette.secondary.main,
        '& $title': {
            fontWeight: theme.typography.fontWeightMedium
        },
        '& $icon': {
            color: theme.palette.secondary.main
        }
    }
}));

const NavItem = ({
    external,
    href,
    icon: Icon,
    title,
}) => {

    const classes = useStyles();

    return (
        <ListItem
            className={classes.item}
            disableGutters
            key={title}
        >
            {!external &&
                <Button
                    activeClassName={classes.active}
                    className={classes.button}
                    component={RouterLink}
                    exact
                    // style={style}
                    to={href}
                >
                    {Icon && (
                        <Icon
                            className={classes.icon}
                            size="20"
                        />
                    )}
                    <span className={classes.title}>
                        {title}
                    </span>
                </Button>
            }
            {external &&
                <Button
                    activeClassName={classes.active}
                    className={classes.button}
                    component={Link}
                    exact
                    // style={style}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                >
                    {Icon && (
                        <Icon
                            className={classes.icon}
                            size="20"
                        />
                    )}
                    <span className={classes.title}>
                        {title}
                    </span>
                </Button>
            }
        </ListItem>
    );
}

export default NavItem;