import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  video4k: {
    position: 'relative',
    top: '40%',
    left: '50%',
    transform: 'translateY(-50%) translateX(-50%)',
    overflow: 'hidden',
    height: '120%',
    width: '100%',
    minWidth: 1710,
    pointerEvents: "none"
  },
  videoHd: {
    position: 'relative',
    top: '40%',
    left: '50%',
    transform: 'translateY(-50%) translateX(-50%)',
    overflow: 'hidden',
    height: '120%',
    width: 'auto',
  },
  mobileBackground: {
    minWidth: '100%',
    minHeight: '100%',
    background: 'radial-gradient(261.39% 261.39% at 28.54% 105.89%, #282C34 28.12%, #005796 39.06%, #282C34 48.96%, #000000 100%);'
  },
}));

export default function HeroVideo({ size }) {
  const classes = useStyles();
  if (size <= 680) {
    return (
      <div className={classes.mobileBackground}>

      </div>
    )
  }
  return (
    <div className={classes.video4k}>
      <iframe width="100%" height="120%" pointerEvents="none"  src="https://www.youtube.com/embed/7aDfXqSeE7Y?autoplay=1&mute=1&controls=0&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=7aDfXqSeE7Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </div>
    )
}
