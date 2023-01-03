import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withWidth from '@material-ui/core/withWidth';
import {
  Grid,
  Container,
  Typography,
  makeStyles,
  Box,
  Modal,
  Button
} from '@material-ui/core';
import VideoCard from '../../../components/VideoCard';
import { MEDIALINKS } from "../../../constants/medias";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    /* paddingTop: 300,
    paddingBottom: 300, */
    position: 'relative',
    overflow: 'hidden',
  },
  title: {
    fontWeight: theme.typography.fontWeightRegular,
  },
  sectionLightGrayDiagonalTop: {
    position: 'absolute',
    left: 0,
    top: '-10px',
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
  vidButtonContainer: {
    position: 'relative'
  },
  video: {
    width: 900,
    height: 506.25,
    [theme.breakpoints.down('sm')]: {
      height: 'calc((100vw * 9) / 16)',
      width: '100vw'
    },
    borderRadius: 5,
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  image: {
    width: '100%',
    height: '50%',
    position: 'relative',
    borderRadius: 5,
    '&:hover': {
      cursor: 'pointer'
    }
  },
  playButton: {
    position: 'absolute',
    transform: 'translate(-50%,-50%)',
    marginRight: '-50%',
    top: '50%',
    left: '50%',
    borderRadius: '5em',
  },
  buttonIcon: {
    width: '5em',
    height: '5em',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

function Videos({ className, width, ...rest }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const isSmallScreen = /xs/.test(width);
  const typographyProps = {
    align: isSmallScreen ? "center" : "right"
  };

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className={classes.modal}
      >
        <iframe src={'https://d2vajsp5ysqyp8.cloudfront.net/preview-103583-AShtmIXI7G-high.webm'}
          frameborder='0'
          allow='autoplay; encrypted-media'
          allowfullscreen
          title='video'
          className={classes.video}
        />
      </Modal>
      {/* <div className={classes.sectionLightGrayDiagonalTop} />
      <div className={classes.sectionLightGrayDiagonalBottom} /> */}
      <Container
        maxWidth="lg">
        <Typography
          variant="h1"
          align="center"
          color="textPrimary"
        >
          <strong>What is Zap?</strong>
        </Typography>
        <Box mt={{xs: 2, sm: 8}}>

          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            spacing={2}
          >
            <Grid
              md={4}
              item
            >
              <Typography
                component="h2"
                variant="h3"
                color="primary"
                {...typographyProps}>
                Customize Oracles and Tokens
              </Typography>
              <Typography
                component="p"
                variant="subtitle1"
                color="textSecondary"
                {...typographyProps}>
                Zap Protocol empowers the creation of tokenized services and bridging the gap between smart contracts and the off-chain world and the on-chain world with our decentralized oracle solutions.
              </Typography>
            </Grid>
            <Grid
              item
              md={5}
              className={classes.vidButtonContainer}
            >
              <img src={'/static/videoSnapshot.png'} className={classes.image} onClick={() => setOpen(true)} />
              <Button onClick={() => setOpen(true)} className={classes.playButton}>
                <PlayCircleOutlineIcon className={classes.buttonIcon} />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* <Typography
              component="h1"
              variant="h1"
              color="textPrimary"
              align="left">
              <strong>Smart Data</strong> <small>for</small>{" "}
              <strong>Smart Contracts</strong>
            </Typography>
            <Typography
              component="h2"
              variant="subtitle1"
              color="textSecondary"
              align="left">
              Smart contracts are currently limited in actualizing their true potential as an innovative and revolutionary technology. Smart contracts do not have a reliable way to communicate with off-chain events on their own. That is why smart contracts need oracles to communicate data from the off-chain world.
            </Typography> */}

      {/* <VideoCard media={MEDIALINKS[1]} className={classes.videoContainer} /> */}
    </div>
  );
}

Videos.propTypes = {
  className: PropTypes.string
};

export default withWidth()(Videos);
