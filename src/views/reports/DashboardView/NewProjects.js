import {
  Avatar,
  Box,
  Card,
  Typography,
  makeStyles
} from '@material-ui/core';
import Label from 'src/components/Label';
import PropTypes from 'prop-types';
import React from 'react';
import ZapZIcon from '../../../components/icons/ZapZIcon'
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  label: {
    marginLeft: theme.spacing(1)
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    height: 48,
    width: 48
  }
}));

function NewProjects({ className, ...rest }) {
  const classes = useStyles();
  const data = {
    value: 1000,
    difference: -10
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box flexGrow={1}>
        <Typography
          component="h3"
          gutterBottom
          variant="overline"
          color="textSecondary"
        >
          ZAP BALANCE
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          flexWrap="wrap"
        >
          <Typography
            variant="h3"
            color="textPrimary"
          >
            {data.value}
          </Typography>
          <Label
            className={classes.label}
            color={data.difference > 0 ? 'success' : 'error'}
          >
            {data.difference > 0 ? '+' : ''}
            {data.difference}
            %
          </Label>
        </Box>
      </Box>
      <Avatar className={classes.avatar}>
        <ZapZIcon />
      </Avatar>
    </Card>
  );
}

NewProjects.propTypes = {
  className: PropTypes.string
};

export default NewProjects;
