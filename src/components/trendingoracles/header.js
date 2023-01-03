import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "5vh",
  },
  action: {
      marginBottom: theme.spacing(1),
      "& + &": {
         marginLeft: theme.spacing(1),
      },
   },
   actionIcon: {
      marginRight: theme.spacing(1),
   },
}));

function Header({ className, onEventAdd, headerDescription, ...rest }) {
   const classes = useStyles();

   return (
      <Grid
         className={clsx(classes.root, className)}
         container
         justify="space-between"
         spacing={3}
         {...rest}>
         <Grid item>
            <Typography variant="h3" color="textPrimary">
               {headerDescription}
            </Typography>
         </Grid>
      </Grid>
   );
}

Header.propTypes = {
   className: PropTypes.string,
   onEventAdd: PropTypes.func,
};

Header.defaultProps = {
   onEventAdd: () => {},
};

export default Header;
