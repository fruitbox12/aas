import {
   Box,
   Container,
   Divider,
   Typography,
   makeStyles,
} from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";
import SocialIcons from "src/components/SocialIcons";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: theme.palette.background.dark,
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      "& dt": {
         marginTop: theme.spacing(2),
      },
   },
}));

function SocialStrip({ className, ...rest }) {
   const classes = useStyles();

   return (
      <div className={clsx(classes.root, className)} {...rest}>
         <Container maxWidth="lg">
            <Typography variant="h1" color="textPrimary">
               Engage with Us
            </Typography>
            <Box my={3}>
               <Divider />
            </Box>
            <SocialIcons />
         </Container>
      </div>
   );
}

SocialStrip.propTypes = {
   className: PropTypes.string,
};

export default SocialStrip;
