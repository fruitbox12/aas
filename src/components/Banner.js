import React from 'react';

import {
  makeStyles,
  Chip,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  chip: {
    backgroundColor: theme.palette.primary.main,
    color: '#000000DE'
  },

}));

export default function BetaBadge() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Chip label='Zap 2.0 Beta - Learn more'
        component='a'
        href='https://medium.com/the-zap-project'
        target='_blank'
        color='primary'
        clickable
        className={classes.chip}>
      </Chip>
    </div>
  )
}
