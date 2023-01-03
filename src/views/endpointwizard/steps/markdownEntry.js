import React, { useState, useEffect, useRef } from "react";
import { TextField, Grid } from "@material-ui/core";
import { useStyles } from "../styles";
import { useDebouncedEffect } from 'src/hooks/useDebouncedEffect'
import axios from "axios";
import marked from "marked";
// import { useDispatch, useSelector } from "react-redux";
// import { initiateProviderCurve } from "src/actions/providerCurveActions";
// import { typeOf } from "react-is";
import MarkdownDialog from "src/components/dialog/MarkdownDialog";

const MarkdownEntry = ({ handleChange, navBtns, values, info }) => {
   const [display, changeDisplay] = useState("");
   const classes = useStyles();
   const textField = useRef();

   const axiosed = () => {
      const Regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
      const check = Regex.test(info.markdownLink)
      if(check){
         axios.get(info.markdownLink).then(
            (res) => {
               console.log(res.status)
               if(info.step===3){
                  if (res.status === 200) {
                     changeDisplay(res.data);
                  } else {
                     changeDisplay("<h3>Invalid format of URL</h3>");
                  }
               }
            },
            (err) => {
               if(info.step===3){
                  textField.current.style.color = "red";
                  changeDisplay("<h3>Invalid URL</h3><h3>404</h3>");
               }
            }
         );
      }
   }

   useDebouncedEffect(() => axiosed(), 2000, [info.markdownLink])

   useEffect(() => {
      const regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
      if (info.markdownLink.length === 0) {
         changeDisplay("None Provided");
      } else {
         changeDisplay("<h3>Loading information...</h3>");
         if (regex.test(info.markdownLink)) {
            textField.current.style.color = "white";
         } else {
            textField.current.style.color = "red";
         }
      }
   }, [info.markdownLink]);

  return (
    <Grid className={classes.root} container>
         {/* <Grid className={classes.title} xs={12}>
         <Typography variant="h2" color="textPrimary">
            Markdown File
         </Typography>
         </Grid> */}
         <Grid alignContent={"center"} className={classes.url} container direction={"column"} justify={"space-evenly"} xs={12}>
         <form className={classes.root}>
            <TextField
               defaultValue={values.markdownLink}
               fullWidth
               label={"Link to Markdown file"}
               inputRef={textField}
               onChange={handleChange("markdownLink")}
               variant={"filled"}
            />
            <div className={classes.coefficientArrayDialogueButton}>
               <MarkdownDialog/>
            </div>
         </form>
         <Grid
            alignContent={"start"}
            className={classes.display}
            container
            direction={"column"}
            xs={12}
            dangerouslySetInnerHTML={{ __html: marked(display) }}
         ></Grid>
         </Grid>
         <Grid className={classes.navbtns} container direction={"row"} item justify={"flex-end"} xs={12}>
            {navBtns}
         </Grid>
      </Grid>
   );
};

export default MarkdownEntry;
