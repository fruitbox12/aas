import React, {useState, useEffect, useRef} from 'react';
import {
    TextField,
    Grid,
    // Typography
} from '@material-ui/core';
import { useStyles } from '../styles';
import { useDebouncedEffect } from 'src/hooks/useDebouncedEffect'
import axios from 'axios';
import JsonDialog from "src/components/dialog/JsonDialog";

const JSONEntry = ({handleChange, navBtns, values, info}) => {
    const classes = useStyles();
    const [display, changeDisplay] = useState("")
    const textField= useRef();
    const parent= useRef();
    const displayCont= useRef(); 

    const axiosed = () => {
        const Regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
        const check = Regex.test(info.jsonLink)
        if(check){
           axios.get(info.jsonLink).then(
              (res) => {
                 console.log(res.status)
                 if(info.step===4){
                    if (res.status === 200) {
                        const width=parent.current.offsetWidth
                        if(width < 600){
                            displayCont.current.style.whiteSpace="pre-line"
                        }
                       changeDisplay(JSON.stringify(res.data, null, 2));
                    } else {
                       changeDisplay("<h3>Invalid format of URL</h3>");
                    }
                 }
              },
              (err) => {
                 if(info.step===4){
                    textField.current.style.color = "red";
                    changeDisplay("<h3>Invalid URL</h3><h3>404</h3>");
                 }
              }
           );
        }
     }
  
     useDebouncedEffect(() => axiosed(), 2000, [info.jsonLink])

    useEffect(()=>{
        if (info.jsonLink.length===0){
            changeDisplay("None Provided")
        }
        else {
            changeDisplay("<p>Loading Information...</p>")
            const regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi; 
            if (regex.test(info.jsonLink)){
                textField.current.style.color='white';
                console.log(info.jsonLink)
            }else{
                textField.current.style.color='red'
            }
        }
    }, [info.jsonLink])
    
    return(
        <Grid className={classes.root} container ref={parent}>
            {/* <Grid className={classes.title} xs={12}>
                <Typography
                    variant="h2"
                    color="textPrimary">
                    JSON Schema
                </Typography>
            </Grid> */}
            <Grid 
                alignContent={'center'} 
                className={classes.url} 
                container
                direction={'column'}
                justify={'space-evenly'}
                xs={12}>
                <form className={classes.root}>
        
                    <TextField
                        defaultValue={values.jsonLink}
                        fullWidth
                        label={"Link to JSON Schema"}
                        onChange={handleChange("jsonLink")}
                        inputRef={textField}
                        variant={"filled"} />
            <div className={classes.coefficientArrayDialogueButton}>
                <JsonDialog/>
              </div>
                </form>
            <Grid
                ref={displayCont}
                alignContent={'start'}
                className={classes.display}
                direction={'column'}
                container
                xs={12}
                dangerouslySetInnerHTML={{__html:display}}
            >
            </Grid>
            </Grid>
            <Grid className={classes.navbtns} container direction={'row'} item justify={'flex-end'} xs={12}>
                {navBtns}
            </Grid>
        </Grid>
    )
}

export default JSONEntry;