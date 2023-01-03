import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
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
import { Alert, AlertTitle } from "@material-ui/lab";
import { BondIcon } from "src/components/icons/bondicon";
import { updateOracle } from "src/actions/oracleactions";
import ZapZIcon from "src/components/icons/ZapZIcon";
import { useStyles } from "src/views/endpointwizard/styles.js";

function getSteps() {
   return ["Initialize Provider Title", "Deploy Token Factory", "Create Token"]; //, 'List Artifact Selection', 'Deploy New Token'];
}

const ListToken = ({ info, contractButtons, errClose, addTokens }) => {
   const [confirmed, setConfirmed] = useState(false);
   const steps = getSteps();
   const history = useHistory();
   const classes = useStyles();
   const filled = useRef();
   const button1 = useRef();
   const button2 = useRef();
   const confirm = useRef();
   const dispatch = useDispatch();

   const supply = info.curveArray[info.curveArray.length - 1];

   function getStepContent(step) {
      switch (step) {
         case 0:
            return `Sets Provider Title of ${info.providerName} for account: ${info.providerAddress}.`;
         case 1:
            return "Deploys a new Token Factory to mint tokens.";
         case 2:
            return `Mints new ${info.tokenName} Token with supply of ${supply} ${info.tokenSymbol}.`;
         // case 2:
         //     return 'Register Artifact Selection';
         // case 3:
         //     return 'List Token'
         default:
            return "Unknown step";
      }
   }

   const updateCurrent = (endpointAddress, endpointName) => {
      console.log(endpointAddress, endpointName);
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
      if (info.created) {
         updateCurrent(info.deployedAddress, info.tokenName);

         filled.current.style.fill = "#7fe7fd";
         filled.current.style.stroke = "#7fe7fd";
         confirm.current.style.display = "inherit";
         confirm.current.style.alignSelf = "center";
         // button1.current.style.display="inherit"
         button1.current.style.color = "theme.palette.text.primary";
         button1.current.style.border = "3px solid #7fe7fd";
         button2.current.style.color = "theme.palette.text.primary";
         // button2.current.style.backgroundColor="#30a9ff"
         button2.current.style.border = "3px solid #30a9ff";
      } else {
         filled.current.style.fill = "transparent";
         confirm.current.style.display = "none";
         // button1.current.style.display = "none"
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [info.created]);

   function btn1Click() {
      // ## Uncomment bottom two lines for actual production code ##
      const tokenName = info.deployedAddress + info.tokenName;
      history.push(`/app/bondwizard/${tokenName}`);

      // test route, not used for production
      // history.push(`/app/bondwizard/0xA4E5cD0B3d4A050734d2Fe310B30AB0a80e72eAeBitStampAPI`)
   }

   // function btn2Click() {
   //     history.push("/app/oraclemarket")
   // }

   return (
      <Grid className={classes.confirmListing} container>
         <Grid
            alignContent={"center"}
            className={classes.zapContent}
            container
            color="textPrimary"
            direction={"column"}
            justify={"space-evenly"}
            xs={12}>
            <svg width={90} height={150} className={classes.svg}>
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
               Token Listing Complete!
            </Typography>
            <Grid className={classes.confirmListing}>
               <Stepper activeStep={info.contractStep} alternativeLabel>
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
                                 className={classes.finalBtn}
                                 variant={"contained"}
                                 endIcon={
                                    <ZapZIcon className={classes.loader} />
                                 }>
                                 Pending
                              </Button>
                           ) : (
                              <Button
                                 alignSelf={"center"}
                                 variant="contained"
                                 className={classes.finalBtn}
                                 onClick={contractButtons}>
                                 {info.contractStep === 0
                                    ? "Initialize Provider Title"
                                    : info.contractStep === 1
                                    ? "Deploy Token Factory"
                                    : info.contractStep === 2
                                    ? "Create New Token"
                                    : // info.contractStep === 3 ? "Console.log " :
                                      // info.contractStep === 2 ? "Register Artifact" :
                                      "List Token"}
                              </Button>
                           )}
                        </Grid>
                     </Grid>
                  )}
               </Grid>
            </Grid>
            <Grid
               direction={"column"}
               container
               className={classes.parent}
               alignContent={"center"}
               justify={"space-around"}>
               {/* <Button startIcon={<BondIcon />} ref={button1} variant="outlined" onClick={btn1Click}>
                            Bond to Token {info.endpoint}
                        </Button> */}
               {info.created ? (
                  <>
                     <Grid
                        container
                        item
                        justify={"space-around"}
                        xs={6}
                        className={classes.listBtnGroup}>
                        <Button
                           startIcon={<BondIcon />}
                           ref={button1}
                           disabled={!confirmed}
                           variant="outlined"
                           onClick={btn1Click}>
                           {confirmed
                              ? "Mint New " + info.tokenName
                              : "Pulling from Blockchain"}
                        </Button>
                        <Button
                           startIcon={<BondIcon />}
                           ref={button2}
                           variant="outlines"
                           onClick={() => addTokens()}>
                           Create New Token
                        </Button>
                     </Grid>
                     <Typography
                        className={classes.text}
                        variant="p"
                        ref={confirm}
                        color="textPrimary">
                        Token Factory Address: {info.deployedAddress}
                     </Typography>
                     <Typography
                        className={classes.text}
                        variant="p"
                        ref={confirm}
                        color="textPrimary">
                        Token Address: {info.tokenAddress}
                     </Typography>
                  </>
               ) : null}
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
               This Token Name already exists in the Token Factory. Choose
               another Name.
            </Alert>
         </Dialog>
      </Grid>
   );
};

export default ListToken;
