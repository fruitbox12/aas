import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { makeStyles, Typography } from "@material-ui/core";
import * as marked from "marked";

// Component Styles
const useStyles = makeStyles((theme) => ({
   root: {},
   text: {
      color: theme.palette.text.primary,
   },
}));

//Component Itself
function MarkdownViewer({ className, file }) {
   const classes = useStyles();

   var toShow = "";
   if (file === null | file === "") {
      toShow = "None Provided";
   } else {
      toShow = marked(file);
   }

   console.log(toShow)

   return (
      <>
         <Suspense fallback={null}>
            <Typography>
               <div
                  className={classes.text}
                  dangerouslySetInnerHTML={{ __html: toShow }}
               />
            </Typography>
         </Suspense>
      </>
   );
}

MarkdownViewer.propTypes = {
   className: PropTypes.string,
   file: PropTypes.string,
};

MarkdownViewer.defaultProps = {
   className: "",
   file: "",
};

export default MarkdownViewer;
