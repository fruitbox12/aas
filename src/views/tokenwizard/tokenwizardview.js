import React from "react";
import { Button, Grid, Hidden } from "@material-ui/core";
import { NavigateNextSharp, NavigateBeforeSharp } from "@material-ui/icons";
import ProgressNav from "src/views/endpointwizard/progressnav.js";
import TokenName from "./steps/tokenName";
// import PublicKey from "./steps/publicKey";
//import ArtifactSelection from './steps/artifactSelection';
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
// import MaxDotSupply from 'src/views/endpointwizard/steps/maxDotSupply';
import DragCurveBuilder from "src/views/endpointwizard/steps/dragcurvebuilder";
import { useStyles } from "src/views/endpointwizard/styles.js";
import ConfirmToken from "./steps/confirmToken";
import ListTokens from "./steps/listToken";
//import DeployDotFactory from './steps/deployDotFactory';
import ProviderDetails from "./steps/providerDetails";
import PropTypes from "prop-types";

const TokenWizardView = ({
   listBtn,
   contractButtons,
   handleChange,
   handleDragCurve,
   handleAxesArgs,
   errClose,
   jumpStep,
   nextStep,
   prevStep,
   progToggle,
   addTokens,
   state,
}) => {
   console.log(state)
   const classes = useStyles();

   const wizPages = [
      {
         title: "Provider Information",
         step: 0,
      },
      {
         title: "Token Name",
         step: 1,
      },
      // {
      //   title: "Public Key",
      //   step: 1
      // },
      // {
      //   title: "Artifact Selection",
      //   step: 1
      // },
      // {
      //   title: "Max Dots",
      //   step: 1
      // },
      {
         title: "Initial Curve",
         step: 2,
      },
      {
         title: "Confirm Token",
         step: 3,
      },
      {
         title: "List Token",
         step: 4,
      },
   ];

   // Reusable buttons
   const nextStepBtn = (
      <Button
         endIcon={<NavigateNextSharp />}
         onClick={nextStep}
         variant={"contained"}
         className={classes.nextBtn}>
         Next
      </Button>
   );
   const prevStepBtn = (
      <Button
         startIcon={<NavigateBeforeSharp />}
         onClick={prevStep}
         variant={"outlined"}
         className={classes.backBtn}>
         Back
      </Button>
   );

   return (
      <Grid container spacing={3} justify={"center"}>
         <Grid container item xs={12}>
            <Hidden only={["lg", "md", "xl"]}>
               {state.toggle ? null : (
                  <Button
                     onClick={() => progToggle()}
                     className={classes.toggle}>
                     <KeyboardArrowDownIcon /> Show Navigation
                  </Button>
               )}
               {state.toggle ? (
                  <ProgressNav
                     progToggle={progToggle}
                     done={state.done}
                     jumpStep={jumpStep}
                     step={state.step}
                     wizPages={wizPages}
                  />
               ) : null}
            </Hidden>
            <Hidden only={["sm", "xs"]}>
               <ProgressNav
                  progToggle={progToggle}
                  done={state.done}
                  jumpStep={jumpStep}
                  step={state.step}
                  wizPages={wizPages}
               />
            </Hidden>
         </Grid>
         <Grid xs={12}>
            {state.step === 0 && (
               <ProviderDetails
                  handleChange={handleChange}
                  info={state}
                  navBtns={nextStepBtn}
               />
            )}
            {state.step === 1 && (
               <TokenName
                  handleChange={handleChange}
                  info={state}
                  navBtns={[prevStepBtn, nextStepBtn]}
               />
            )}

            {state.step === 2 && (
               <DragCurveBuilder
                  // handleChange={handleChange}
                  handleDragCurve={handleDragCurve}
                  handleAxesArgs={handleAxesArgs}
                  navBtns={[prevStepBtn, nextStepBtn]}
                  values={state}
               />
            )}
            {state.step === 3 && (
               <ConfirmToken
                  info={state}
                  navBtns={prevStepBtn}
                  listBtn={listBtn}
               />
            )}
            {state.step === 4 && (
               <ListTokens
                  info={state}
                  errClose={errClose}
                  addTokens={addTokens}
                  contractButtons={contractButtons}
               />
            )}
         </Grid>
      </Grid>
   );
};

TokenWizardView.propTypes = {
   listBtn: PropTypes.func,
   contractButtons: PropTypes.func,
   handleChange: PropTypes.func,
   handleDragCurve: PropTypes.func,
   handleAxesArgs: PropTypes.func,
   errClose: PropTypes.func,
   jumpStep: PropTypes.func,
   nextStep: PropTypes.func,
   prevStep: PropTypes.func,
   progToggle: PropTypes.func,
   addTokens: PropTypes.func,
   state: PropTypes.object,
};

TokenWizardView.defaultProps = {
   listBtn: () => {},
   contractButtons: () => {},
   handleChange: () => {},
   handleDragCurve: () => {},
   handleAxesArgs: () => {},
   errClose: () => {},
   jumpStep: () => {},
   nextStep: () => {},
   prevStep: () => {},
   progToggle: () => {},
   addTokens: () => {},
   state: {},
};

export default TokenWizardView;
