import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Avatar,
  Button,
  Box,
  Container,
  Grid,
  Link,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { FaGithub } from "react-icons/fa";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    overflow: "hidden",
    minHeight: 300,
    paddingTop: 40,
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    textTransform: "none",
    height: 65,
    width: 230,
    fontSize: 20,
    "&:hover": {
      backgroundColor: "rgb(33, 118, 178)",
    },
    marginLeft: theme.spacing(3.5),
    marginRight: theme.spacing(3.5),
    marginTop: theme.spacing(1),
    textTransform: "none",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      width: 250,
      height: 55,
    },
  },
}));

function JoinUs({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Typography variant="h1" align="center" color="textPrimary">
          <strong>Develop With Us</strong>
        </Typography>
        <Typography
          component="p"
          variant="overline"
          color="primary"
          align="center"
        >
          Source code and tools to get started
        </Typography>
        <Typography
          component="h2"
          variant="subtitle1"
          color="textSecondary"
          align="center"
        >
          The Zap Platform empowers developer and data providers to create,
          deploy, and integrate our suite of services.
        </Typography>
        <Box mt={{ xs: 2, sm: 8 }}>
          <Grid container spacing={3}>
            <Grid
              className={classes.spaceAbove}
              alignItems={"center"}
              container
              direction={"row"}
              item
              justify={"center"}
              xs={12}
            >
              <Button
                className={classes.button}
                href="https://github.com/zapproject"
                component="a"
                variant="contained"
                size="large"
                target="_blank"
              >
                <FaGithub size="30px" style={{ marginRight: 10 }} />
                Github
              </Button>
              <Button
                className={classes.button}
                href="/docs/welcome"
                component="a"
                variant="contained"
                size="large"
                target="_blank"
              >
                <InsertDriveFileIcon size="30px" style={{ marginRight: 10 }} />
                Developer Docs
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

JoinUs.propTypes = {
  className: PropTypes.string,
};

export default JoinUs;
