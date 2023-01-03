import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import {
   Grid,
   Typography,
   Button,
   Box,
   Stepper,
   Step,
   StepLabel,
   Dialog,
} from "@material-ui/core";
import { BondIcon } from "src/components/icons/bondicon";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useDispatch } from "react-redux";
import { updateOracle } from "src/actions/oracleactions";
import ZapZIcon from "src/components/icons/ZapZIcon";
import { useStyles } from "../styles";

function getSteps() {
   return [
      "List Title",
      "Initialize Curve",
      "Set Endpoint Params",
      "Set Markdown Link",
      "Set JSON Link",
   ];
}

function getStepContent(step) {
   switch (step) {
      case 0:
         return "Initiate Provider Title";
      case 1:
         return "List Provider Curve to network";
      case 2:
         return "Initiate Endpoint Curve Params";
      case 3:
         return "Set Markdown Link ";
      case 4:
         return "Set JSON Link";
      default:
         break;
   }
}

const ZapLoader = ({ contractButtons, info, errClose }) => {
   const [confirmed, setConfirmed] = useState(false);
   const dispatch = useDispatch();
   const steps = getSteps();
   const history = useHistory();
   const classes = useStyles();
   const filled = useRef();
   const button1 = useRef();
   // const button2 = useRef();
   const confirm = useRef();

   const updateCurrent = (endpointAddress, endpointName) => {
      updateOracle(endpointAddress, endpointName)
         .then((res) => {
            // Dispatch each Oracle endpoint object to the Redux store
            dispatch({
               type: res.type,
               payload: res.payload,
            });
            setConfirmed(true);
         })
         .catch((err) => {
            return err;
         });
   };

   useEffect(() => {
      if (info.listed) {
         updateCurrent(info.providerAddress, info.endpoint);
         filled.current.style.fill = "#7fe7fd";
         filled.current.style.stroke = "#7fe7fd";
         confirm.current.style.display = "inherit";
         confirm.current.style.alignSelf = "center";
         button1.current.style.display = "inherit";
         button1.current.style.color = "theme.palette.text.primary";
         button1.current.style.border = "3px solid #7fe7fd";
         // button2.current.style.display="inherit"
         // button2.current.style.color="theme.palette.text.primary"
         // button2.current.style.border="3px solid #7fe7fd"
      } else {
         filled.current.style.fill = "transparent";
         confirm.current.style.display = "none";
         button1.current.style.display = "none";
         // button2.current.style.display = "none"
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [info.listed]);

   function btn1Click() {
      // ## Uncomment bottom two lines for actual production code ##
      const oracleName =
         info.providerAddress + encodeURIComponent(info.endpoint);
      history.push(`/app/bondwizard/${oracleName}`);

      // test route, not used for production
      // history.push(`/app/bondwizard/0xA4E5cD0B3d4A050734d2Fe310B30AB0a80e72eAeBitStampAPI`)
   }

   return (
      <Grid className={classes.root} container>
         <Grid
            alignContent={"center"}
            className={classes.zapContent}
            container
            color="textPrimary"
            direction={"column"}
            justify={"space-evenly"}
            xs={12}>
            <svg width={90} height={150} className={classes.svg}>
               {/* <defs>  
                        <linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%" > 
                            
                            <stop offset="0%" stop-color="transparent">
                                <animate attributeName="stop-color" values="transparent" dur="4s" repeatCount="indefinite"></animate>
                            </stop>

                            <stop offset="100%" stop-color="#7fe7fd">
                                <animate attributeName="stop-color" values="#7fe7fd" dur="4s" repeatCount="indefinite"></animate>
                            </stop>

                        </linearGradient> 

                    </defs> */}
               <polygon
                  points="49,5 49,59 82,59 38,142 38,88 5,88"
                  fill="#7fe7fd"
                  stroke="none">
                  <animate
                     attributeName="points"
                     values="38.5,68.5 38.5,68.5 38.5,68.5 38.5,68.5 38.5,68.5 38.5,68.5; 49,5 49,59 82,59 38,142 38,88 5,88"
                     dur="2s"
                     repeatCount="indefinite"></animate>
               </polygon>
               <polygon
                  points="49,5 49,59 82,59 38,142 38,88 5,88"
                  ref={filled}
               />
            </svg>
            <Typography
               className={classes.text}
               variant="h4"
               ref={confirm}
               color="textPrimary">
               Listing Complete!
            </Typography>
            <Grid className={classes.root}>
               <Stepper
                  activeStep={info.contractStep}
                  alternativeLabel={window.innerWidth < 600 ? false : true}
                  orientation={window.innerWidth < 600 ? "vertical" : null}>
                  {steps.map((label) => (
                     <Step key={label}>
                        <StepLabel className={classes.stepper}>
                           {label}
                        </StepLabel>
                     </Step>
                  ))}
               </Stepper>
               <Grid>
                  {info.contractStep === steps.length ? (
                     <Grid></Grid>
                  ) : (
                     <Grid
                        container
                        alignContent={"center"}
                        direction={"column"}
                        justiy={"space-between"}
                        item
                        xs={12}>
                        <Box m={1} alignSelf={"center"}>
                           <Typography className={classes.instructions}>
                              {getStepContent(info.contractStep)}
                           </Typography>
                        </Box>
                        <Grid container justify={"center"} xs={12}>
                           {info.pending ? (
                              <Button
                                 alignSelf={"center"}
                                 className={classes.listBtn}
                                 disabled={info.pending}
                                 variant={"contained"}
                                 endIcon={
                                    <ZapZIcon className={classes.loader} />
                                 }>
                                 Pending
                              </Button>
                           ) : (
                              <Button
                                 alignSelf={"center"}
                                 disabled={info.pending}
                                 variant="contained"
                                 className={classes.listBtn}
                                 onClick={contractButtons}>
                                 {info.contractStep === 0
                                    ? "Register Title"
                                    : info.contractStep === 1
                                    ? "List Curve"
                                    : info.contractStep === 2
                                    ? "Register Params"
                                    : info.contractStep === 3
                                    ? "Register Markdown Link"
                                    : info.contractStep === 4
                                    ? "Register JSON Link"
                                    : "List Endpoint"}
                              </Button>
                           )}
                        </Grid>
                     </Grid>
                  )}
               </Grid>
            </Grid>
            <Grid
               direction={"row"}
               container
               className={classes.parent}
               alignContent={"center"}
               justify={"center"}>
               <Button
                  startIcon={<BondIcon />}
                  disabled={!confirmed}
                  ref={button1}
                  variant="outlined"
                  onClick={btn1Click}>
                  {confirmed
                     ? "Bond to " + info.endpoint
                     : "Pulling from Blockchain"}
               </Button>
            </Grid>
         </Grid>
         <Dialog open={info.genError} onClose={errClose} fullWidth={true}>
            <Alert severity="error">
               <AlertTitle>TRANSACTION ERROR</AlertTitle>
               There was a transaction error. Check Metamask for more
               information.
            </Alert>
         </Dialog>
         <Dialog open={info.userError} onClose={errClose} fullWidth={true}>
            <Alert severity="error">
               <AlertTitle>TRANSACTION ERROR</AlertTitle>
               User rejected the transaction.
            </Alert>
         </Dialog>
         <Dialog open={info.tokenError} onClose={errClose} fullWidth={true}>
            <Alert severity="error">
               <AlertTitle>TRANSACTION ERROR</AlertTitle>
               This Endpoint already exists. Choose another Name.
            </Alert>
         </Dialog>
      </Grid>
   );
};

export default ZapLoader;
