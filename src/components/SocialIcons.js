import { Grid, IconButton, makeStyles } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";
import { SOCIAL } from "../constants/socialmedia";
import clsx from "clsx";

const useStyles = (width) => { 
   return makeStyles((theme) => ({
      root: {},
      btn: {
         width: width,
         margin: "0 1vw",
      },
   }));
}

function SocialIcons({ className, color,  width, ...rest }) {
   const classes = useStyles(width);

   return (
      <div className={clsx(classes.root, className)} {...rest}>
         <Grid
            item={true}
            container
            direction="row"
            justify="center"
            alignItems="center"
            xs={12}>
            {SOCIAL(width).map((link) => (
               <IconButton
                  color={color}
                  className={classes.btn}
                  href={link.link}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  >
                  {link.icon}
                  
               </IconButton>
            ))}
         </Grid>
      </div>
   );
}

SocialIcons.propTypes = {
   className: PropTypes.string,
   color: PropTypes.string,
};

SocialIcons.defaultProps = {
   color: "primary",
};

export default SocialIcons;
