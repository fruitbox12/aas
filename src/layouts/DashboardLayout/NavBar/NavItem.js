import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  ListItem,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0
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
    marginRight: theme.spacing(1),
    width: 24
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

function NavItem({
  title,
  href,
  icon: Icon,
  onClick,
}) {
  const classes = useStyles();

  let padding = 10;
  let minWidth = 44;
  let borderRadius = 8;

  let style = { padding, minWidth };
  if (title === null) style = { padding, minWidth, borderRadius };

  return (
    <ListItem
      className={classes.item}
      disableGutters
      key={title}
    >
      {href ?
      <Button
        activeClassName={classes.active}
        className={classes.button}
        component={RouterLink}
        exact
        style={style}
        to={href}
        onClick={onClick}
      >
        <Icon
          className={classes.icon}
        />
        <span className={classes.title}>
          {title}
        </span>
      </Button>: 
      <Button
        activeClassName={classes.active}
        className={classes.button}
        exact
        style={style}
        onClick={onClick}
      >
        <Icon
          className={classes.icon}
        />
        <span className={classes.title}>
          {title}
        </span>
      </Button>}
    </ListItem>
  );
}

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.any,
  title: PropTypes.string.isRequired
};

export default NavItem;
