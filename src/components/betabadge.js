import React from 'react';

import {
  makeStyles,
  Chip,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '15px 0px 17px 0px'
  },
  chip: {
    background: "linear-gradient(180deg, rgba(11,124,246,1) 0%, rgba(78,190,254,1) 100%)",
    color: '#FFFFFF',
  },

}));

export default function BetaBadge() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Chip label='2.0 Beta' component="a" color='primary'
        href="https://medium.com/the-zap-project/zap-protocol-beta-2-0-launch-details-9264675e415b" target='_blank' clickable className={classes.chip}>
      </Chip>
    </div>
  )
}
