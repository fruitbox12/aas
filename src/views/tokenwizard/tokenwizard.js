import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TokenWizardView from "./tokenwizardview";
import { TOKEN_DOT_FACTORY, SAMPLE_CONTEST } from "./artifacts";
import { useContracts } from "../../hooks/contractHooks.js";
import { ethers } from "ethers";
// import { updateOracle } from "src/actions/oracleactions"
import { callInitProvider } from "src/contractcalls/initprovidercall.js";
import { InitTokenDotFactory } from "./tokencontractcalls";

let defaultCoefficientArray = [2, 0, 1000000000000000000, 10000];

const TokenWizard = () => {
   let contracts = useContracts();
   const account = useSelector((state) => state.account);
   var myDeployed = Object.values(
      useSelector((state) => state.oracles.oracles)
   );
   myDeployed = myDeployed.filter((oracle) => {
      return oracle.isToken && oracle.isTDFOwner;
   });
   const gas = { gasPrice: 30000000000, gasLimit: 400000 };

   let initialState = {
      step: 0,
      done: 0,
      contractStep: account.user.providerTitle ? 1 : 0,
      coordinator:
         contracts.chainId === 1
            ? "0xb007eca49763f31edff95623ed6c23c8c1924a16"
            : contracts.chainId === 42
            ? "0xAE00FCD8044dAB86b583896e8d1A078D9416c06d"
            : contracts.chainId === 31337
            ? "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512"
            : "",
      providerName: account.user.providerTitle
         ? account.user.providerTitle
         : "",
      providerAlready: account.user.providerTitle ? true : false,
      providerAddress: account.user.account,
      proAddEmpty: false,
      proNameEmpty: false,
      tokenSymbol: account.user.tokenSymbol ? account.user.tokenSymbol : "",
      symbolValid: true,
      symbolEmpty: false,
      publicKey: account.user.publicKey,
      deployedAddress: account.user.dotFactory? account.user.dotFactory : "",
      artifact: TOKEN_DOT_FACTORY,
      artifactName: "TokenDotFactory",
      Instance: "",
      artifactEmpty: true,
      drop: "",
      curveArray: defaultCoefficientArray,
      userError: false,
      genError: false,
      tokenError: false,
      maxDots: 10000,
      maxYAxis: 10000,
      curveArrayEmpty: false,
      specifier: account.user.specifier ? account.user.specifier : "",
      specifierEmpty: false,
      tokenName: "",
      tokenNameEmpty: false,
      factoryAddress:
         contracts.chainId === 1
            ? "0xe13fef4c8e75c12f9706e8bdf28fe847ce99cb42"
            : contracts.chainId === 42
            ? "0xeC97E4896cF9f067a9dD428760316024EA0cfc12"
            : contracts.chainId === 31337
            ? "0x36c02da8a0983159322a80ffe9f24b1acff8b570"
            : "",
      created: false,
      tokenAddress: "",
      toogle: false,
      reuseTDF: false,
      ownedTDF: myDeployed,
   };

   const [state, setState] = useState(initialState);

   const providerNameIsEmpty = () => {
      return {
         ...state,
         proNameEmpty: state.providerName === "",
         prevTDFempty: state.reuseTDF && state.deployedAddress === "",
      };
   };

   const tokenDetailsIsEmpty = () => {
      return {
         ...state,
         symbolEmpty: state.tokenSymbol === "",
         tokenNameEmpty: state.tokenName === "",
         curveArrayEmpty: state.curveArray === "",
      };
   };

   const nextStep = () => {
      let newState = { ...state };
      if (state.step === 0) {
         newState = { ...newState, ...providerNameIsEmpty() };
         console.log("New State", state, newState);
      }

      if (state.step === 1) {
         newState = { ...newState, ...tokenDetailsIsEmpty() };
         console.log("New State", state, newState);
      }

      if (state.step === 2) {
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
      }

      if (state.step === state.done) {
         // Increments number of pagers visited only if button is labeled next
         newState = { ...newState, step: state.step + 1, done: state.done + 1 };
      } else {
         newState = { ...newState, step: state.step + 1 };
      }
      setState(newState);
   };

   const prevStep = () => {
      const { step } = state;
      setState({ ...state, step: step - 1 });
   };

   const jumpStep = (i) => {
      let newCoeff = [...state.curveArray];
      let xValue = state.maxDots;
      let yValue = state.maxYAxis;
      if (state.step === 1) {
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
      // if(state.step !== 6){
      setState({
         ...state,
         step: i,
         curveArray: newCoeff,
         maxDots: xValue,
         maxYAxis: yValue,
      });
      // }
   };

   const listBtn = () => {
      if (
         !state.proNameEmpty &&
         !state.symbolEmpty &&
         !state.curveArrayEmpty &&
         state.symbolValid &&
         !state.tokenNameEmpty
      ) {
         setState({ ...state, step: state.step + 1, done: state.done + 1 });
      }
   };

   const contractButtons = async () => {
      setState({ ...state, pending: true });
      let lastState = state.contractStep;
      let tsx = null;
      let deployed = state.deployedAddress;
      try {
         switch (state.contractStep) {
            case 0:
               tsx = await callInitProvider(
                  contracts.registry,
                  state.providerAddress,
                  state.providerName,
                  gas
               );
               await tsx.wait();
               lastState += 1;
               break;
            case 1:
               tsx = await InitTokenDotFactory(
                  state.coordinator,
                  state.factoryAddress,
                  state.publicKey,
                  state.providerName,
                  state.artifactName,
                  state.artifact,
                  contracts.signer

               );
               // await tsx.wait();
               lastState += 1;
               deployed = tsx.address;
               break;
            case 2:
               const tknName32 = await ethers.utils.formatBytes32String(
                  state.tokenName
               );
               const tknSymbol32 = await ethers.utils.formatBytes32String(
                  state.tokenSymbol
               );
               const Instance = await new ethers.Contract(
                  deployed,
                  state.artifact[0].abi,
                  contracts.signer
               );
               tsx = await Instance.functions.initializeCurve(
                  tknName32,
                  tknSymbol32,
                  state.curveArray
               );
               await tsx.wait();

               const tokenAdd = await Instance.curves(tknName32);

               setState({
                  ...state,
                  contractStep: state.contractStep + 1,
                  pending: false,
                  created: true,
                  tokenAddress: tokenAdd,
               });
               return;
            default:
               break;
         }
      } catch (err) {
         console.log(err);
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
      setState({
         ...state,
         contractStep: lastState,
         pending: false,
         deployedAddress: deployed,
      });
   };

   const errClose = () => {
      setState({
         ...state,
         genError: false,
         userError: false,
         tokenError: false,
      });
   };

   const addTokens = () => {
      setState({
         ...state,
         step: 0,
         done: 0,
         tokenName: "",
         tokenSymbol: "",
         contractStep: 2,
         created: false,
         reuseTDF: true,
      });
   };

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

   const validArgArray = (arr) => {
      var i = 0;
      var toCount = arr[i];
      var lastLimit = 0;
      while (toCount !== 0) {
         if (i > arr.length) {
            return false;
         }
         i += toCount + 1;
         toCount = 0;
         // Check if l_i < l_i+1 holds true
         var currentLimit = arr[i];
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
         if (i < arr.length - 1) {
            toCount += arr[++i];
            // console.log("toCount");
            // console.log(toCount);
         }
      }
      const remaining = i - (arr.length - 1);
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

   const handleChange = (input, empty) => (e) => {
      var newVal = e.target.value.trim();
      var isIt = e.target.value.length === 0;
      switch (input) {
         case "curveArray":
            const arrSplit = splitArray(newVal);
            newVal = arrSplit.array;
            isIt = arrSplit.error || !validArgArray(newVal);
            break;
         case "tokenSymbol":
            var range = newVal.length <= 6;
            newVal = newVal.toUpperCase()
            setState({
               ...state,
               [input]: newVal,
               [empty]: isIt,
               symbolValid: range,
            });
            break;
         case "reuseTDF":
            console.log(e.target.checked);
            if (!e.target.checked) {
               setState(initialState);
            } else {
               setState({
                  ...state,
                  reuseTDF: e.target.checked,
               });
            }
            break;
         case "prevTDF":
            setState({
               ...state,
               deployedAddress: newVal,
               contractStep: 2,
               created: false,
               reuseTDF: true,
               prevTDFempty: false,
            });

            break;
         default:
            setState({ ...state, [input]: newVal, [empty]: isIt });
      }
   };

   const handleDropChange = (event) => {
      if (event.target.value === "SampleContest") {
         setState({
            ...state,
            drop: event.target.value,
            artifact: SAMPLE_CONTEST,
            artifactName: "SampleContest",
            artifactEmpty: false,
         });
      } else {
         setState({
            ...state,
            drop: event.target.value,
            artifact: TOKEN_DOT_FACTORY,
            artifactName: "TokenDotFactory",
            artifactEmpty: false,
         });
      }
   };

   const handleDragCurve = (dragArgs) => {
      setState({ ...state, curveArray: dragArgs, invalidArray: false });
   };

   const handleAxesArgs = (maxXAxis, maxYAxis, curveArray) => {
      setState({
         ...state,
         maxDots: maxXAxis,
         maxYAxis: maxYAxis,
         curveArray: curveArray,
      });
   };

   const progToggle = () => {
      setState({ ...state, toggle: !state.toggle });
   };

   useEffect(() => {
      if (
         // ((state.proNameEmpty || state. || emptyProviderAddress) &&
         (state.proNameEmpty && state.done === 1) ||
         (state.reuseTDF && state.prevTDFempty && state.done === 1) ||
         (state.invalidArray && state.done === 3) ||
         (state.tokenNameEmpty && state.done === 2) ||
         (state.symbolEmpty && state.done === 2)
      ) {
         setState((s) => {
            return {
               ...s,
               step: state.step === 0 ? 0 : state.step - 1,
               done: state.done === 0 ? 0 : state.done - 1,
            };
         });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [
      state.step,
      state.done,
      state.proNameEmpty,
      state.invalidArray,
      state.prevTDFempty,
   ]);

   useEffect(() => {}, [state.reuseTDF]);

   return (
      <TokenWizardView
         state={state}
         handleDropChange={handleDropChange}
         listBtn={listBtn}
         jumpStep={jumpStep}
         nextStep={nextStep}
         prevStep={prevStep}
         handleChange={handleChange}
         progToggle={progToggle}
         handleDragCurve={handleDragCurve}
         handleAxesArgs={handleAxesArgs}
         contractButtons={contractButtons}
         errClose={errClose}
         addTokens={addTokens}
      />
   );
};

export default TokenWizard;