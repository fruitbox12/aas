import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import TopBar from "./TopBar";
import NavBar from "./navbar";

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: theme.palette.background.default,
      display: "flex",
      height: "100%",
      overflow: "hidden",
      width: "100%",
   },
   wrapper: {
      display: "flex",
      flex: "1 1 auto",
      overflow: "hidden",
      maxWidth: '100vw',
   },
   contentContainer: {
      display: "flex",
      flex: "1 1 auto",
      overflow: "hidden",
   },
   content: {
      flex: "1 1 auto",
      height: "100%",
      overflow: "auto",
   },
}));

function MainLayout({ children }) {
   const classes = useStyles();

   const [isMobileNavOpen, setMobileNavOpen] = useState(false);

   return (
      <div className={classes.root}>
         <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
         <NavBar
            onMobileClose={() => setMobileNavOpen(false)}
            openMobile={isMobileNavOpen}
         />
         <div className={classes.wrapper}>
            <div className={classes.contentContainer}>
               <div className={classes.content}>{children}</div>
            </div>
         </div>
      </div>
   );
}

MainLayout.propTypes = {
   children: PropTypes.any,
};

export default MainLayout;
