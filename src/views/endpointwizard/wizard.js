import React, { useState, useEffect, useRef } from "react";
import WizardView from "./wizardview";
import { useSelector } from "react-redux";
import Web3 from "web3";
import { ethers } from "ethers";
import { useContracts } from "../../hooks/contractHooks.js";
import { callInitProvider } from "src/contractcalls/initprovidercall.js";
import { callSetEndpointParams } from "src/contractcalls/setendpointparams.js";
import { callInitiateProviderCurve } from "src/contractcalls/initprovidercurvecall.js";
import { callSetProviderParameter } from "src/contractcalls/setproviderparametercall.js";
// import { convertFromWeiZapToZap } from "src/utils/zapConversion.ts";
import { convertFromWeiZapToZap } from "src/utils/providerCurveUtil.js";

let defaultCoefficientArray = [2, 0, 1000000000000000000, 10000];

const Wizard = () => {
   const brokerMessage = useRef();
   let contracts = useContracts();
   const account = useSelector((state) => state.account);
   const oraclesState = useSelector((state) => state.oracles);

   let oracles = Object.entries(oraclesState.oracles);
   let tempArr = [];
   for (let i = 0; i < oracles.length; i++) {
      tempArr.push(oracles[i][1].endpointName);
   }

   let initialState = {
      step: 0,
      builder: 1,
      done: 0, // Increments with `step` but doesn't decrement to let user jump using wizard nav
      emptyProvider: false,
      emptyProviderAddress: false,
      emptyEndpoint: false,
      invalidArray: false,
      provider: account.user.providerTitle ? account.user.providerTitle : "",
      providerAddress: account.user.account,
      endpoint: "",
      markdownLink: "",
      jsonLink: "",
      arrayErrorMsg: "",
      maxDots: 10000,
      maxYAxis: 10000,
      curveArray: defaultCoefficientArray,
      brokerAddress: "0x0000000000000000000000000000000000000000",
      markdownName: "",
      jsonName: "",
      unique: true,
      oracleNames: tempArr,
      publicKey: Math.floor(Math.random() * Math.floor(999999)),
      pending: false,
      contractStep: account.user.providerTitle ? 1 : 0,
      listed: false,
      toggle: false,
      userError: false,
      genError: false,
      tokenError: false,
   };
   const [state, setState] = useState(initialState);

   let {
      step,
      done,
      emptyProvider,
      emptyProviderAddress,
      emptyEndpoint,
      invalidArray,
      provider,
      providerAddress,
      endpoint,
      markdownLink,
      jsonLink,
      maxDots,
      maxYAxis,
      curveArray,
      brokerAddress,
      contractStep,
   } = state;

   const gas = { gasPrice: 30000000000, gasLimit: 400000 };

   var params = [state.markdownName, state.jsonName];

   params = params.map((param) => ethers.utils.formatBytes32String(param));

   const detailsIsEmpty = () => {
      return {
         ...state,
         emptyProvider: provider === "",
         emptyProviderAddress: providerAddress === "",
         emptyEndpoint: endpoint === "",
      };
   };

   /**
    * Handles incrementation of the pages.
    * Calls setState once at the very end so all updates go through.
    */
   const nextStep = () => {
      var newState = { ...state };
      if (step === 0) {
         newState = { ...newState, ...detailsIsEmpty() };
      }

      if (step === 1) {
         let newCoeff = [...newState.curveArray];
         let xValue = newState.maxDots;
         let yValue = newState.maxYAxis;
         if (xValue === "" || xValue < 1 || yValue === "" || yValue < 1) {
            if (xValue === "" || xValue < 1) {
               xValue = 1;
            }
            if (yValue === "" || yValue < 1) {
               yValue = 1;
            }
            const slope = yValue / xValue;
            newCoeff[2] = slope * 1000000000000000000;
            newCoeff[3] = parseInt(xValue);
         }

         newState = {
            ...newState,
            curveArray: newCoeff,
            maxDots: xValue,
            maxYAxis: yValue,
         };

         newState = {
            ...newState,
            curveArray: newCoeff,
            maxDots: xValue,
            maxYAxis: yValue,
         };
      }

      if (step === 4) {
         arrayIsInvalid();
      }

      if (step === done) {
         // Increments number of pagers visited only if button is labeled next
         newState = { ...newState, step: state.step + 1, done: state.done + 1 };
      } else {
         newState = { ...newState, step: state.step + 1 };
      }

      setState(newState);
   };

   // Checks to see if the entred array is valid
   // 1) Not empty
   // 2) Has the proper number of arguments
   // 3) Each x-limit is in increasing order
   const arrayIsInvalid = () => {
      const empty = curveArray.length === 0;
      const longEnough = validArgArray(curveArray);
      const valid = !longEnough || empty;
      setState({ ...state, invalidArray: valid });
   };

   // Go back a step
   const prevStep = () => {
      const { step } = state;
      setState({ ...state, step: step - 1 });
   };

   // Allows for jumping between completed steps
   const jumpStep = (i) => {
      let newCoeff = [...state.curveArray];
      let xValue = state.maxDots;
      let yValue = state.maxYAxis;
      if (step === 1) {
         if (xValue === "" || xValue < 1) {
            xValue = 1;
            const slope = state.maxYAxis / xValue;
            newCoeff[2] = slope * 1000000000000000000;
            newCoeff[3] = xValue;
         }
         if (yValue === "" || yValue < 1) {
            yValue = 1;
            const slope = yValue / state.maxDots;
            newCoeff[2] = slope * 1000000000000000000;
            newCoeff[3] = state.maxDots;
         }
      }

      // if(step === 1) {
      //    let newState = { ...state };
      //    let newCoeff = defaultCoefficientArray
      //    const slope = newState.maxYAxis/newState.maxDots
      //    newCoeff[2] = slope * 1000000000000000000;
      //    newCoeff[3] = newState.maxDots

      //    newState = {...newState, curveArray: newCoeff}

      // }

      if (state.step !== 6) {
         setState({
            ...state,
            step: i,
            curveArray: newCoeff,
            maxDots: xValue,
            maxYAxis: yValue,
         });
      }
      /* if (step === 0 && !state.emptyEndpoint && !state.emptyProvider && !state.emptyProviderAddress) {
        const prevCurveId = Object.keys(providerCurve)[0];
        dispatch(submitProviderCurve(providerCurve[prevCurveId].existingCoefficientArray, providerCurve[prevCurveId].bondedDots, endpoint, account.user.account));
      } */
   };

   const progToggle = () => {
      console.log("click", state.toggle, !state.toggle);
      setState({ ...state, toggle: !state.toggle });
   };

   const listBtn = () => {
      if (
         step === 4 &&
         !state.emptyEndpoint &&
         !state.emptyProvider &&
         !state.emptyProviderAddress &&
         !state.invalidArray
      ) {
         setState({ ...state, step: state.step + 1, done: state.done + 1 });
      }
   };

   const contractButtons = async () => {
      setState({ ...state, pending: true });
      var lastState = state.contractStep,
         tsx = null;
      try {
         switch (contractStep) {
            case 0:
               // Initiate Provider
               tsx = await callInitProvider(
                  contracts.registry,
                  state.providerAddress,
                  state.provider,
                  gas
               );
               await tsx.wait();
               lastState += 1;
               break;
            case 1:
               // Initiate Provider Curve
               tsx = await callInitiateProviderCurve(
                  contracts.registry,
                  state.endpoint,
                  state.curveArray,
                  state.brokerAddress,
                  gas
               );
               await tsx.wait();
               lastState += 1;

               break;
            case 2:
               // Initiate Endpoint Markdown & JSON Params
               tsx = await callSetEndpointParams(
                  contracts.registry,
                  state.endpoint,
                  params,
                  gas
               );
               await tsx.wait();
               lastState += 1;

               break;
            case 3:
               // Set Provider Markdown Link Parameter
               tsx = await callSetProviderParameter(
                  contracts.registry,
                  params[0],
                  state.markdownLink,
                  gas
               );
               await tsx.wait();
               lastState += 1;
               break;
            case 4:
               // Set Provider JSON Link Parameter
               tsx = await callSetProviderParameter(
                  contracts.registry,
                  params[1],
                  state.jsonLink,
                  gas
               );
               await tsx.wait();
               lastState += 1;
               setState({
                  ...state,
                  contractStep: lastState,
                  pending: false,
                  listed: true,
               });
               return;
            default:
               break;
         }
      } catch (err) {
         console.log("Endpoint Deployment Error", err);
         switch (err.code) {
            case 4001:
               setState({
                  ...state,
                  contractStep: lastState,
                  pending: false,
                  userError: true,
               });
               break;
            case -32603:
               setState({
                  ...state,
                  contractStep: lastState,
                  pending: false,
                  tokenError: true,
               });
               break;
            default:
               setState({
                  ...state,
                  contractStep: lastState,
                  pending: false,
                  genError: true,
               });
         }
         return;
      }
      setState({ ...state, contractStep: lastState, pending: false });
   };

   const errClose = () => {
      setState({
         ...state,
         genError: false,
         userError: false,
         tokenError: false,
      });
   };

   // Allows to change what type of curve initilizer is used
   const changeBuilder = (i) => {
      setState({ ...state, builder: i });
      nextStep();
   };

   // Allows the visual curve initilizer to pass back the array
   const handleDragCurve = (dragArgs) => {
      setState({ ...state, curveArray: dragArgs, invalidArray: false });
   };

   // Allows changes to text fields to be saved
   const handleChange = (input, empty) => (e) => {
      var newVal = e.target.value;
      var isIt = e.target.value.length === 0;
      switch (input) {
         case "curveArray":
            const arrSplit = splitArray(newVal);
            newVal = arrSplit.array;
            isIt = arrSplit.error || !validArgArray(newVal);
            break;
         case "endpoint":
            const duplicate = state.oracleNames.includes(newVal)
            let markdownName, jsonName
            if(newVal.length > 32){
               markdownName = newVal.slice(0,30).concat(".md")
               jsonName = newVal.slice(0, 28).concat(".json") 
            }
            else{
               markdownName = newVal.concat(".md");
               jsonName = newVal.concat(".json");
            }

            setState({
               ...state,
               endpoint: newVal,
               markdownName: markdownName,
               jsonName: jsonName,
               unique: !duplicate,
            });
            break;
         case "brokerAddress":
            if (newVal !== "") {
               const isValid = Web3.utils.isAddress(newVal);
               console.log("Broker address valid: ", isValid);
               setState({ ...state, [input]: newVal, invalidBroker: !isValid });
            } else {
               setState({ ...state, [input]: newVal, invalidBroker: false });
            }
            break;
         case "maxDots":
            if (newVal !== "" && newVal >= 1) {
               let newCoeff = [...defaultCoefficientArray];
               const slope = state.maxYAxis / newVal;
               newCoeff[2] = slope * 1000000000000000000;
               newCoeff[3] = newVal;
               setState({
                  ...state,
                  [input]: newVal,
                  [empty]: isIt,
                  curveArray: newCoeff,
               });
            } else {
               setState({ ...state, [input]: newVal, [empty]: isIt });
            }
            break;
         case "maxYAxis":
            if (newVal !== "" && newVal >= 1) {
               let newCoeff = [...defaultCoefficientArray];
               const slope = newVal / state.maxDots;
               newCoeff[2] = slope * 1000000000000000000;
               newCoeff[3] = state.maxDots;
               setState({
                  ...state,
                  [input]: newVal,
                  [empty]: isIt,
                  curveArray: newCoeff,
               });
            } else {
               setState({ ...state, [input]: newVal, [empty]: isIt });
            }
            break;
         default:
            setState({ ...state, [input]: newVal, [empty]: isIt });
      }
   };

   // Checks for valid array input baes off of the string entry
   const splitArray = (str) => {
      var err = false;
      var arr = str.split(",");
      for (var i = 0; i < arr.length; i -= -1) {
         // There can only be one (1) decimal point in a number
         const countDots = arr[i].match(/\./g);
         if (countDots != null && countDots.length > 1) {
            err = true;
            setState({
               ...state,
               arrayErrorMsg: "There are too many decimal points in a number.",
            });
         }
         arr[i] = parseFloat(arr[i]);
         if (Number.isNaN(arr[i])) {
            err = true;
            setState({
               ...state,
               arrayErrorMsg: "You can only enter numbers.",
            });
         }
      }
      return {
         array: arr,
         error: err,
      };
   };

   // Checks for valid array length based off of the n_i of the formatting
   // array length = n_i + 2 for each i
   // Check for valid array based on converted array of zap (Number) instead of weizap (BigInt) for math expressions
   const validArgArray = (arr) => {
      let arrConverted = convertFromWeiZapToZap(arr);
      var i = 0;
      var toCount = arrConverted[i];
      var lastLimit = 0;
      while (toCount !== 0) {
         if (i > arrConverted.length) {
            return false;
         }
         i += toCount + 1;
         toCount = 0;
         // Check if l_i < l_i+1 holds true
         var currentLimit = arrConverted[i];
         if (lastLimit >= currentLimit) {
            setState({
               ...state,
               arrayErrorMsg:
                  "The last x-axis limit is greater than an earlier limit.",
            });
            return false;
         } else {
            lastLimit = currentLimit;
         }
         if (i < arrConverted.length - 1) {
            toCount += arrConverted[++i];
            // console.log("toCount");
            // console.log(toCount);
         }
      }
      const remaining = i - (arrConverted.length - 1);
      const coes = remaining - 1;
      const msg =
         "You need " +
         remaining +
         " more arguments. " +
         (coes > 0
            ? coes + (coes === 1 ? " coefficient" : " coefficients") + " and an"
            : "An") +
         " x-limit.";
      if (remaining) {
         setState({ ...state, arrayErrorMsg: msg });
         return false;
      } else {
         setState({ ...state, arrayErrorMsg: msg });
      }
      return true;
   };

   // Double checks for valid entries before allowing the wizard to move forward
   // Will revert state as ncessary
   useEffect(() => {
      if (
         ((emptyProvider || emptyEndpoint || emptyProviderAddress) &&
            // || invalidBroker)
            done === 1) ||
         (invalidArray && done === 3)
      ) {
         setState((s) => {
            return {
               ...s,
               step: step === 0 ? 0 : step - 1,
               done: done === 0 ? 0 : done - 1,
            };
         });
      }
   }, [
      step,
      done,
      emptyProvider,
      emptyProviderAddress,
      emptyEndpoint,
      invalidArray,
   ]);

   return (
      <WizardView
         changeBuilder={changeBuilder}
         handleChange={handleChange}
         handleDragCurve={handleDragCurve}
         jumpStep={jumpStep}
         nextStep={nextStep}
         prevStep={prevStep}
         listBtn={listBtn}
         progToggle={progToggle}
         contractButtons={contractButtons}
         state={state}
         errClose={errClose}
         values={{
            provider,
            endpoint,
            providerAddress,
            markdownLink,
            jsonLink,
            maxDots,
            maxYAxis,
            curveArray,
            brokerAddress,
         }}
         brokerMessage={brokerMessage}
      />
   );
};

export default Wizard;
