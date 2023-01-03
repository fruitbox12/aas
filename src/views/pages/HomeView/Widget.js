import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Grid,
  Container,
  Typography,
  makeStyles,
  Box,
  Modal,
  Button
} from '@material-ui/core';
import { ProviderCurve } from 'src/components/providercurve/ProviderCurve.js';
import { ProviderCurveSvg } from 'src/components/providercurve/ProviderCurveSvg.js';
import {useDebouncedEffect} from "src/hooks/useDebouncedEffect";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 300,
    paddingBottom: 300,
    position: 'relative',
    overflow: 'hidden',
  },
  title: {
    fontWeight: theme.typography.fontWeightRegular,
  },
  sectionLightGrayDiagonalTop: {
    position: 'absolute',
    left: 0,
    top: '-20px',
    right: 0,
    bottom: 'auto',
    width: '110vw',
    height: '200px',
    marginTop: '-50px',
    marginLeft: '-5vw',
    backgroundColor: theme.palette.background.default,
    '-webkit-transform': 'rotate( -4deg)',
    '-ms-transform': 'rotate(-4deg)',
    'transform': 'rotate( -4deg )',
  },
  sectionLightGrayDiagonalBottom: {
    position: 'absolute',
    left: 0,
    top: 'auto',
    right: 0,
    bottom: 0,
    width: '110vw',
    height: '200px',
    marginTop: 0,
    marginBottom: '-100px',
    marginLeft: '-5vw',
    backgroundColor: theme.palette.background.default,
    '-webkit-transform': 'rotate( -4deg)',
    '-ms-transform': 'rotate(-4deg)',
    'transform': 'rotate( -4deg )',
  },
  subContainer: {
    paddingTop: 128,
    height: 300
  },
  codeBoxContainer: {
    width: '100%',
    heigth: '150px'
  },
  bondingCurveGrid: {
    // flexDirection: `${window.screen.width > 650 ? "row" : "column" }`,
    margin: "20px"
  }
}));

function Videos({ className, ...rest }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [refresh, setRefresh]=React.useState(false)
  const [count, setCount]=React.useState(0)
  //  const dotMaxSupply = 10000;

  const refreshed = () => {
    if(count >= 1){
      setRefresh(true);
      // setCount(count + 1)
      // console.log("refreshing")
      setRefresh(false)
    }
      else{
        setCount(count + 1)
      }

  }

  useDebouncedEffect(()=>refreshed(), 2000)

  const thumbnailParams = {
      existingCoefficientArray: [4, 0, 3000000000000000000, -600000000000000, 40000000000, 10000],
      editable: true,
      bonded: false,
      bonding: false,
      bondedDots: 0,
      tokenSymbol: "",
      parentWidth: null,
      parentHeight: null,
      axesOptions:
         window.screen.width > 650
            ? { xAxisTicks: 1, yAxisTicks: 1, showLabels: false, tickSize: 5 }
            : { xAxisTicks: 1, yAxisTicks: 1, showLabels: false, tickSize: 5 },
    zoomFit: 1,
    splash: true
   };

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <div className={classes.sectionLightGrayDiagonalTop} />
      <div className={classes.sectionLightGrayDiagonalBottom} />
      <Container
        maxWidth="lg">
        <Grid
          container
          direction="column"
          alignContent="center"
          justify="center"
          spacing={2}
        >
          <Grid
            item
            xs={10}
            sm={6}
            >
            <Typography
              variant="h1"
              align="center"
              color="textPrimary"
            >
              <strong>Monetize Tokenized Services with Customizable Bonding Curves</strong>
            </Typography>
          </Grid>

        </Grid>
        <Box mt={{xs: 2, sm: 8}}>

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid
              item
              lg={6}
              md={8}
              xs={10}
              // direction="row"
              justify="flex-end"
              className={window.screen.width > 650 ? null : classes.bondingCurveGrid}
            >
              {/* <img src={'static/images/widgetExample.png'} style={{height: 350}}/> */}
              <ProviderCurve {...thumbnailParams} />
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              xs={10}
            >
              <Typography
                variant="subtitle1"
                color="textSecondary"
                align="left"
              >
                Zap Protocol enables creation of oracles with deterministic price of tokenized services through the power of Bonding Curves. These Bonding Curves are completely customizable by you. Our platform empowers developers and data providers to create, deploy, and integrate our suite of services.
            </Typography>

            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

Videos.propTypes = {
  className: PropTypes.string
};

export default Videos;