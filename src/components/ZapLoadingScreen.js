import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import { Box, makeStyles } from '@material-ui/core';
import ZapLoadingLogo from 'src/components/ZapLoadingLogo';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    minHeight: '100%',
    padding: theme.spacing(3),
    width: '100%'
  }
}));

function ZapLoadingScreen(props) {
  const classes = useStyles();

  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <div className={classes.root}>
      <Box width='100%'>
        <ZapLoadingLogo fromDash={props.fromDash} />
      </Box>
    </div>
  );
}

export default ZapLoadingScreen;
