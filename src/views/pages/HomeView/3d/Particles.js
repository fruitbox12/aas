import { Canvas } from "react-three-fiber";
import React from "react";
import Sample from "./Sample";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
   root: {
      height: "calc(100vh - 84px)",
      position: "relative",
      width: '100%',
      overflow: 'hidden'
   },
   screen: {
      width: "100%",
      height: "100vh",
      top: "-100vh",
      position: "relative",
      background: fade(theme.palette.background.dark, 0.5),
   },
   video: {
      marginTop: 84,
      '-webkit-transform': 'scaleX(2) scaleY(2)',
      '-moz-transform': 'scaleX(2) scaleY(2)',
   }
}));

function Particles(props) {
   const classes = useStyles();
   const vidPath = '/static/SplashVid.mp4';

   return (
      <div className={classes.root}>


         <video loop autoPlay className={classes.video} muted>
            <source src={vidPath} type="video/mp4" />
         </video>
         {/* <Canvas
            className={classes.root}
            shadowMap
            camera={{ position: [0, 0, 100], fov: 100 }}>
            <Sample />
         </Canvas>
         <div className={classes.screen}></div> */}
      </div>
   );
}

export default Particles;
