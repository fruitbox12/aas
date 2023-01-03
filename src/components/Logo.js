import React from 'react';
import { makeStyles, useTheme, withWidth } from '@material-ui/core';
import { isWidthUp } from '@material-ui/core/withWidth';

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: theme.spacing(2),
    height: 34
  }
}));

function Logo(props) {
  // Hooks must be called at the beginning and never conditionally
  const classes = useStyles();
  const theme = useTheme();

  // Returns logo with "Zap.org" if the width is large enough
  if (isWidthUp('md', props.width)) {
    const pallette = theme.palette.type;      // Theme and pallette details can be found in src/theme/index.js
    var logoURL = '/static/darkzaplogo.png';
    if (pallette === 'dark') {
      logoURL = '/static/zapprotocollogo.png';
    }

    return (
      <img
        alt="ZAP.org Logo"
        src={logoURL}
        {...props}
        className={classes.root}
      />
    );
  }

  // Otherwise returns logo with "Zap.org" if thw width is large enough
  return (
    <img
      alt="ZAP Protocol Logo"
      src={'/static/zapprotocollogo.png'}
      {...props}
      className={classes.root}
    />
  );

}

export default withWidth()(Logo);
