import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import { Grid, Button, Typography } from '@material-ui/core';
//import Icon from '@material-ui/core/Icon';



const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4),
  },
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(1),
    width: 240,
    [theme.breakpoints.down('sm')]: {
      width: 180
    }
  },
  button: {
    margin: theme.spacing(1),
  },
  text: {
    margin: theme.spacing(1),
  }
}));

export default function SubscribeToNewsLetter() {
  const classes = useStyles();

  return (

    <form className={classes.root}>
      <Typography
        variant="h4"
        align="center"
        color="textPrimary"
        className={classes.text}
      >
        Stay Up to Date with Zap Protocol
      </Typography>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <TextField
            placeholder="Enter email: "
            // label="Enter email"
            name="email"
            size="small"
            id="newsletter-email-input"
            variant="outlined"
            className={classes.textField}
          />
        </Grid>
        <Grid item>
          <Button
            size='medium'
            variant='contained'
            endIcon={<SendIcon></SendIcon>}
            onClick={() => alert('send form data somewhere')}
          >
            Send
            </Button>
        </Grid>
      </Grid>
    </form>
  );
}
