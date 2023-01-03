import React from "react";
import EndpointDetails from "./steps/endpointdetails";
import MarkdownEntry from "./steps/markdownEntry";
import JSONEntry from "./steps/jsonEntry";
import DragCurveBuilder from "./steps/dragcurvebuilder";
import ConfirmListing from "./steps/confirmlisting";
// import MaxDotSupply from "./steps/maxDotSupply";
import ZapLoader from "./steps/zaploader";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Button, Grid, Hidden } from "@material-ui/core";
import { NavigateNextSharp, NavigateBeforeSharp } from "@material-ui/icons";
import ProgressNav from "./progressnav";
import { useStyles } from 'src/views/endpointwizard/styles.js';

const WizardView = ({ 
   changeBuilder, 
   handleChange, 
   handleDragCurve, 
   handleMaxDots,
   progToggle, 
   jumpStep, 
   nextStep, 
   prevStep, 
   state, 
   listBtn, 
   values,
   errClose,
   brokerMessage, 
   contractButtons }) => {
   const classes = useStyles();

   const wizPages = [
      {
        title: "Endpoint Name",
        step: 0
      },
      // {
      //   title: "Max Dots",
      //   step: 1
      // },
      {
        title: "Initial Curve",
        step: 1
      },
      {
        title: "Markdown File",
        step: 2
      },
      {
        title: "JSON Schema",
        step: 3
      },
    
      {
        title: "Confirm Details",
        step: 4
      },
      {
        title: "List Endpoint",
        step: 5
      },
    ];

   // Reusable buttons
   const nextStepBtn = (
      <Button
         endIcon={<NavigateNextSharp />}
         onClick={nextStep}
         variant={"contained"}>
         Next
      </Button>
   );
   const prevStepBtn = (
      <Button
         startIcon={<NavigateBeforeSharp />}
         onClick={prevStep}
         variant={"outlined"}>
         Back
      </Button>
   );

   return (
      <Grid container spacing={3} justify={"center"}>
         <Grid container item xs={12}>
            <Hidden only={["lg", "md", "xl"]}>
               {state.toggle? null: <Button onClick={()=>progToggle()} className={classes.toggle}><KeyboardArrowDownIcon/> Show Navigation</Button>}
               {state.toggle? 
                  <ProgressNav progToggle={progToggle} done={state.done} jumpStep={jumpStep} step={state.step} wizPages={wizPages}/> : 
                  null}
            </Hidden>
            <Hidden only={["sm", "xs"]}>
               <ProgressNav progToggle={progToggle} done={state.done} jumpStep={jumpStep} step={state.step} wizPages={wizPages}/>
            </Hidden>
         </Grid>
         <Grid xs={12}>
            {state.step === 0 && (
               <EndpointDetails
                  emptyEndpoint={state.emptyEndpoint}
                  emptyProvider={state.emptyProvider}
                  emptyProviderAddress={state.emptyProviderAddress}
                  emptyBrokerAddress={state.emptyBrokerAddress}
                  invalidBroker={state.invalidBroker}
                  handleChange={handleChange}
                  key={state.done}
                  navBtns={nextStepBtn}
                  values={values}
                  unique={state.unique}
                  brokerMessage={brokerMessage}
               />
            )}
            {/* {state.step === 1 && (
               <MaxDotSupply
                  handleChange={handleChange}
                  navBtns={[prevStepBtn, nextStepBtn]}
                  values={values}
               />
            )} */}
            {state.step === 1 && (
               <DragCurveBuilder
                  handleDragCurve={handleDragCurve}
                  navBtns={[prevStepBtn, nextStepBtn]}
                  handleChange={handleChange}
                  values={values}
               />
            )}
            {state.step === 2 && (
               <MarkdownEntry
                  handleChange={handleChange}
                  key={state.done}
                  navBtns={[prevStepBtn, nextStepBtn]}
                  values={values}
                  info={state}
               />
            )}
            {state.step === 3 && (
               <JSONEntry
                  handleChange={handleChange}
                  key={state.done}
                  navBtns={[prevStepBtn, nextStepBtn]}
                  values={values}
                  info={state}
               />
            )}
            {state.step === 4 && (
               <ConfirmListing
                  info={state}
                  navBtns={prevStepBtn}
                  listBtn={listBtn}
                  values={values}
               />
            )}
            {state.step === 5 && (
               <ZapLoader info={state} contractButtons={contractButtons} errClose={errClose}/>
            )}
         </Grid>
      </Grid>
   );
};

export default WizardView;
