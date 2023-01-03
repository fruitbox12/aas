import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Divider
} from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "4.9574px 4.9574px 4.9574px rgba(0, 0, 0, 0.33);",
    paddingTop: theme.spacing(2),
    borderRadius: 4,
    height: '100%',
  },
}));

function CodeBox({ children }) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      variant="outlined"
    >
      <Divider />
      <CardContent>
        <Typography>
          {children}
        </Typography>
      </CardContent>
    </Card>
  );
}

CodeBox.propTypes = {
  className: PropTypes.string,
};

export default CodeBox;
