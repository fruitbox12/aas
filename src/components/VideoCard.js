import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
   Box,
   Card,
   CardMedia,
   Link,
   colors,
   makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
   root: {
      paddingBottom: 10,
      boxShadow: "4.9574px 4.9574px 4.9574px rgba(0, 0, 0, 0.33);",
   },
   media: {
      height: 200,
      backgroundColor: theme.palette.background.dark,
   },
   likedButton: {
      color: colors.red[600],
   },
   subscribersIcon: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(1),
   },
}));

function VideoCard({ media, className, ...rest }) {
   const classes = useStyles();

   return (
      <Card
         className={clsx(classes.root, className)}
         {...rest}
         variant="outlined">
         <Box p={3}>
            <CardMedia
               component="iframe"
               className={classes.media}
               src={media.media}
               allowfullscreen
            />
            <Box display="flex" alignItems="center" mt={2}>
               <Box ml={2}>
                  <Link
                     color="textPrimary"
                     target={"_blank"}
                     rel={"noopener noreferrer"}
                     href={media.url}
                     variant="h5">
                     {media.title}
                  </Link>
               </Box>
            </Box>
         </Box>
      </Card>
   );
}

VideoCard.propTypes = {
   className: PropTypes.string,
   media: PropTypes.object.isRequired,
};

export default VideoCard;
