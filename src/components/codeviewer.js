import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

// Component Styles
const useStyles = makeStyles((theme) => ({
   root: {},
   code: {
      color: theme.palette.text.primary,
      backgroundColor: "transparent",
   },
}));

//Component Itself
function CodeViewer({ className, code }) {
   const classes = useStyles();

   var toShow = "";
   if (code === null | code === "") {
      toShow = "None Provided";
   } else {
      toShow = JSON.stringify(code, undefined, 4);
   }

   return (
      <>
         <Suspense fallback={null}>
            <pre className={classes.code} style={{ whiteSpace: "pre-wrap",  }}>
               {toShow}
            </pre>
         </Suspense>
      </>
   );
}

CodeViewer.propTypes = {
   className: PropTypes.string,
   code: PropTypes.string,
};

CodeViewer.defaultProps = {
   className: "",
   code: "",
};

export default CodeViewer;
