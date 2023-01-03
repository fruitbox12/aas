import { makeStyles } from "@material-ui/core";
import { THEMES } from "src/constants";
import { ethers } from "ethers";

export const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 2,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    margin: 40,
    // padding: "0 30px",
  },
  absolute: {
    position: "absolute",
    marginTop: "30px",
  },
  container: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    marginLeft: "16px",
    marginTop: "16px",
    // transform: "translate(0px, 10%)",
    // marginTop: "3vh",
    // padding: "30px 0px",
  },
  splashContainer: {
    display: "flex",
    height: "100%",
    // justifyContent: "center",
    alignContent: "center",
    width: "100%",
    // marginLeft: "16px",
    // marginTop: "16px",
    // transform: "translate(0px, 10%)",
    // marginTop: "3vh",
    // padding: "30px 0px",
  },
  subContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
  bottombar: {
    display: "flex",
    // height: "0%",
    justifyContent: "center",
    // flexDirection: "column",
    alignContent: "flex-start",
    width: "auto",
    maxWidth: "50%",
    // width: "100%",
    // marginTop: "2vh",
    zIndex: "1000",
    '@supports (-moz-appearance:none)': {
      position: "inherit",
    },
    position: "relative",
    bottom: "14%",
    "& form": {
      display: "flex",
      height: "100%",
      justifyContent: "center",
      // alignContent: "center",
      width: "100%",
      fontSize: "1.2rem",
      alignSelf: "center",
      // padding: '1vw',
    },
  },
  splashBottomBar: {
    display: "flex",
    justifyContent: "center",
    alignContent: "flex-start",
    width: "auto",
  },
  formulaStyleGrid: {
    justifyContent: "center",
    '@supports (-moz-appearance:none)': {
      // margin: "8px",
    },
  },
  formulaStyleRow: {
    justifyContent: "center",
    display: "flex",
    marginLeft: "48px",
  },
  createIcon: {
    margin: "auto",
  },
  // Text inside the boxes containing the chart images
  chartText: {
    position: "absolute",
    top: "80%",
  },
  // bottombar: {
  //    display: "flex",
  //    // height: "0%",
  //    justifyContent: "center",
  //    alignContent: "flex-start",
  //    // width: "100%",
  //    // marginTop: "2vh",
  //    zIndex: "1000",
  //    "& form": {
  //       display: "flex",
  //    },
  //    "& p": {
  //       width: "100%",
  //       fontSize: "1.2rem",
  //       alignSelf: "center",
  //       // padding: '1vw',
  //    },
  // },
  // Text inside the boxes containing the chart images
  // chartText: {
  //    position: "absolute",
  //    top: "80%",
  // },
  // Span for the curve formula
  formulaStyle: {
    // color: "#0078fe96",
    // fontSize: "1.1rem",
    fontFamily: "Roboto",
    fontWeight: 500,
    lineHeight: 1.5,
    // alignSelf: "center",
    // position: "relative",
    // right: "70%",
    // top: "0%",
    // margin: "-25px",
    // transform: "translate(-175%,-90%)",
    // textAlign: "justify",
    // direction: "rtl",
    "& input": {
      textAlign: "center",
    },
  },
  // Submit Provider Curve Button
  // submitCurveButton: {
  //   marginLeft: "12px",
  // },
  body: {
    fontSize: 12,
    userSelect: "none",
    margin: 0,
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  coefficientArrayInput: {
    // display: "flex",
    display: "none",
    // borderRadius: 5,
    // border: "none",
    // marginTop: "7vh",
    padding: "0.5em",
    // borderColor: "#91c0ff91",
    // borderStyle: "solid",
    fontSize: "1.1em",
    alignSelf: "center",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  },
  coefficientArrayText: {
    // display: "inline",
    display: "none",
    fontSize: "1.1em",
    ...(theme.name === THEMES.LIGHT
      ? {
          backgroundColor: "lightgrey",
          outline: "none",
          border: "none",
        }
      : {}),
    ...(theme.name === THEMES.ONE_DARK
      ? {
          backgroundColor: "rgb(87,90,97)",
          outline: "none",
          border: "none",
        }
      : {}),
  },
  coefficientArrayDialogueButton: {
    margin: "auto 0px",
    // marginLeft: "0.3em",
  },
  coefficientArrayInputBox: {
    // display: "flex",
    display: "none",
    borderRadius: "5px",
    flexDirection: "row",
    padding: "0px 20px 0px 20px",
    ...(theme.name === THEMES.LIGHT
      ? {
          backgroundColor: "lightgrey",
          boxShadow: "1px 1px 3px rgb(127,231,253)",
        }
      : {}),
    ...(theme.name === THEMES.ONE_DARK
      ? {
          backgroundColor: "rgb(87,90,97)",
          boxShadow: "1px 1px 3px rgb(127,231,253)",
        }
      : {}),
  },
  coefficientArray: {
    marginLeft: "-3%",
  },
  coefficientArrayLabel: {
    margin: "auto",
    display: "none",
  },
  // Span for the curve formula
  // formulaStyle: {
  //    color: "#0078fe96",
  //    fontSize: "0.9rem",
  //    fontFamily: "Roboto",
  //    fontWeight: 500,
  //    lineHeight: 1.5,
  //    position: "relative",
  //    right: "70%",
  //    top: "0%",
  //    margin: "-25px",
  // transform: "translate(-175%,-90%)",
  // textAlign: "justify",
  // direction: "rtl",
  // },
  // Submit Provider Curve Button
  // submitCurveButton: {
  //   marginLeft: "12px",
  // },
  // body: {
  //    fontSize: 12,
  //    userSelect: "none",
  //    margin: 0,
  //    position: "fixed",
  //    top: 0,
  //    right: 0,
  //    bottom: 0,
  //    left: 0,
  // },
  // coefficientArrayInput: {
  //    display: "flex",
  //    // borderRadius: 5,
  //    // border: "none",
  //    marginTop: "7vh",
  //    padding: "0.5em",
  //    // borderColor: "#91c0ff91",
  //    // borderStyle: "solid",
  //    fontSize: "1.1em",
  //    alignSelf: "center",
  //    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  // },
  // coefficientArrayText: {
  //    display: "inline",
  //    fontSize: "1.1em",
  //    ...(theme.name === THEMES.LIGHT
  //       ? {
  //            backgroundColor: "lightgrey",
  //            outline: "none",
  //            border: "none",
  //         }
  //       : {}),
  //    ...(theme.name === THEMES.ONE_DARK
  //       ? {
  //            backgroundColor: "rgb(87,90,97)",
  //            outline: "none",
  //            border: "none",
  //         }
  //       : {}),
  // },
  // coefficientArrayDialogueButton: {
  //    marginLeft: "0.3em",
  // },
  // coefficientArrayInputBox: {
  //    display: "flex",
  //    borderRadius: "5px",
  //    flexDirection: "row",
  //    padding: "0px 20px 0px 20px",
  //    ...(theme.name === THEMES.LIGHT
  //       ? {
  //            backgroundColor: "lightgrey",
  //            boxShadow: "1px 1px 3px rgb(127,231,253)",
  //         }
  //       : {}),
  //    ...(theme.name === THEMES.ONE_DARK
  //       ? {
  //            backgroundColor: "rgb(87,90,97)",
  //            boxShadow: "1px 1px 3px rgb(127,231,253)",
  //         }
  //       : {}),
  // },
  // coefficientArray: {
  //    marginLeft: "-3%",
  // },
  svg: {
    borderRadius: 5,
    zIndex: 100,
    minWidth: "100%",
    // maxHeight: "75%",
    // maxWidth: "75%",
    minHeight: "100%",

    display: "flex",
    transform: "translate(0%, -0%)",
    "& g": {
      height: "100%",
    },
    "& g .curveTracingCircle": {
      fill: "#a9cade",
    },
    "& g .controlPoint": {
      fill: "white",
      stroke: "#0078fe96",
      cursor: "move",
      strokeWidth: 2,
    },
    "& g .path": {
      fill: "none",
      strokeWidth: 3,
      stroke: "#0078fe",
    },
    "& g .previewPath": {
      fill: "none",
      strokeWidth: 1,
      stroke: "steelblue",
    },
    "& g .savedPath": {
      fill: "none",
      strokeWidth: 1,
      stroke: "black",
    },
    "& text": {
      fill: theme.palette.text.primary,
      fontSize: 14,
      fontFamily: "Helvetica",
      userSelect: "none",
    },
    "& g .bondedDotsLine": {
      strokeDasharray: 2.5,
      strokeWidth: 3,
    },
    "& g .newBondedDotsLine": {
      strokeDasharray: 2.5,
      strokeWidth: 3,
    },
    "& g .axisText": {
      fontSize: "medium",
    },
  },
  // Boxes that contain the chart images
  selectTemplate: {
    maxWidth: "12vw",
    height: "10vw",
    width: "10vw",
    padding: "0px 0px",
    "&:after": {
      content: "",
      display: "block",
      paddingBottom: "100%",
    },
    textTransform: "none",
    "& img": {
      width: "100%",
    },
  },

  coefficients: {
    // margin: "3vh",
    // alignSelf: "center",
    // borderRadius: "5px",
    // borderWidth: "1px",
    width: "100%",
    textTransform: "none",
    marginTop: "5%",
    marginRight: "20%",
  },
  rect: {
    fill: "white",
  },
  pointsMenu: {
    "&  g": {
      opacity: 0.2,
    },
    "&  g.active": {
      cursor: "pointer",
      opacity: 1,
    },
    "&  line": {
      stroke: "#777",
      strokeWidth: 3,
    },
    "&  rect": {
      fill: "white",
    },
  },
  // Grid that contains the chart images
  sidebar: {
    padding: "20px",
    alignItems: "center",
    justifyContent: "space-evenly",
    // transform: "translate(-3%, -3%)",
    alignContent: "space-evenly",
    height: "100%",
    // paddingLeft: "6vh",
  },
  coordinateInfo: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ececec",
    padding: "0.5em",
    borderRadius: "3px",
    visibility: "hidden",
    fontSize: "1.0rem",
  },
  bondedDotsInfo: {
    display: "flex",
    flexDirection: "column",
    width: "75%",
    padding: "5px",
    borderRadius: "5px",
    textAlign: "center",
    "& div": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      "& tspan": {
        width: "100%",
      },
    },
  },
  bondedDotsDifference: {
    display: "flex",
    flexDirection: "column",
    width: "75%",
    padding: "5px",
    borderRadius: "5px",
    textAlign: "center",
    "& div": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      "& tspan": {
        width: "100%",
      },
    },
  },
  bondedDotsCircle: {
    fill: theme.palette.primary.light,
  },
  maxYAxisField: {
    position: "relative",
    '@supports (-moz-appearance:none)': {
      bottom: `${window.screen.width > 1445 ? "39%" : "41%"}`,
      right: `${window.screen.height > 1000 ? "91%" : "93%"}`,
    },
    bottom: `${window.screen.width > 1445 ? "37%" : "38%"}`,
    right: `${window.screen.height > 1000 ? "92%" : "93%"}`,
    zIndex: 1000,
    "& input": {
      textAlign: "center",
      margin: "auto",
      width: "100px",
      padding: "3px 0px"
    },
    "& input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0
    },
    "& input[type='number']": {
      MozAppearance: "textfield"
    }
  },
  maxXAxisField: {
    position: "relative",
    '@supports (-moz-appearance:none)': {
      top: `${window.screen.width > 1445 ? "43%" : "42%"}`
    },
    top: `${window.screen.width > 1445 ? "28%" : "25%"}`,
    right: `${window.screen.height > 1000 ? "11%" : "12%"}`,
    zIndex: 1000,
    "& input": {
      textAlign: "center",
      margin: "auto",
      width: "100px",
      padding:"3px 0px"
    },
    "& input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0
    },
    "& input[type='number']": {
      MozAppearance: "textfield"
    }
    
  },
  supplyRange: {
    textAlign: "center",
    margin: "auto 0"
  },
}));
function removeExponents(num){
    let data = String(num).split(/[eE]/);
      if(data.length=== 1) return data[0]; 

      let restOfNumber = '', operation = num < 0 ? '-' : '',
      str = data[0].replace('.', ''),
      magnitude = Number(data[1])+ 1;

      if(magnitude < 0) {
        restOfNumber = operation + '0.';
        while(magnitude++) restOfNumber += '0';
        // eslint-disable-next-line
        return restOfNumber + str.replace(/^\-/,'');
      }
      magnitude -= str.length;  
      while(magnitude--) restOfNumber += '0';
      return str + restOfNumber;
  }

export const prepNumToStr = (num, decimal) => {
  /* Remove exponents, default from JS */
  return removeExponents(reduceDecimalLength(removeExponents(num),decimal));
  function reduceDecimalLength(num, decimal){
    if (String(num).indexOf('.') < 0 || !decimal) return num;

    let numAsString = String(num); 
    let tempNumString = String(num);
    let decimalIndex = numAsString.indexOf('.'); 
    tempNumString = tempNumString.slice(decimalIndex); 
    let numberOfZeroesAfterDecimal = 0;

    while ((tempNumString[numberOfZeroesAfterDecimal + 1])==='0'){
      numberOfZeroesAfterDecimal = numberOfZeroesAfterDecimal + 1;
    }

    let lengthBeforeDecimal = numAsString.slice(0,decimalIndex).length;
    let lastNonZeroIndex = tempNumString.length - 1; 
    if (tempNumString.indexOf('.') >= 0) { 
      while (tempNumString[lastNonZeroIndex] === '0' && lastNonZeroIndex > decimalIndex) {
        lastNonZeroIndex = lastNonZeroIndex - 1;
      }
     
      let sliceValue = 1 + Math.min(lastNonZeroIndex, (decimal+numberOfZeroesAfterDecimal+lengthBeforeDecimal)||lastNonZeroIndex);
      tempNumString = tempNumString.slice(0,sliceValue);
      tempNumString = numAsString.slice(0,decimalIndex).concat(tempNumString)
    }
    let decimalsToRoundTo = Math.min(numberOfZeroesAfterDecimal+decimal, lastNonZeroIndex+lengthBeforeDecimal+numberOfZeroesAfterDecimal);
    return Number(Number(tempNumString).toFixed(decimalsToRoundTo));
  }
  
  // if (num === 0) {
  //   return 0;
  // } else if (num > 0) {
  //   //  return +(Math.round(num + "e+0")  + "e-0");
  //   num = Number(
  //     num.toFixed(
  //       Math.max(-Math.log10(Math.abs(num)) + decimal + 2, decimal + 2)
  //     )
  //   );
  //   if (num < 1 * Math.pow(1, -1000)) {
  //     num = Number(1 * num.toPrecision(decimal + 1)).toExponential(decimal);
  //   } else {
  //     num = +(Math.round(num + `e+${decimal}`) + `e-${decimal}`);
  //   }
  //   return num;
  // } else if (num < 0) {
  //   //  return +(Math.round((-1*num) + "e+0")  + "e-0");
  //   num = Number(
  //     -1 *
  //       Math.abs(num).toFixed(
  //         Math.max(-Math.log10(Math.abs(num)) + decimal + 2, decimal + 2)
  //       )
  //   );
  //   if (num > -1 * Math.pow(1, -1000)) {
  //     num = Number(1 * num.toPrecision(decimal + 1)).toExponential(decimal);
  //   } else {
  //     num = +(Math.round(num + `e+${decimal}`) + `e-${decimal}`);
  //   }
  //   return num;
  // }
  // return num
};

export const formulaMapping = (formula, xLimit) => {
  if (formula.length === 0) return "";
  console.log("formula", formula)
  let coeffMap = {"0":0, "1":0, "2":0, "3":0}
  let noSpace = formula.replace(/\s+/g, '').toLowerCase().replace(/^[a-z](\(x\))?/g,'').replace(/[a-wyzA-WYZ ]/g, "").replace(/[!*@#$%&_`~?<>()]/g,'')
  let formulaArray = noSpace.split(/[=+-]/)
  const filtered = formulaArray.filter(string => string !== "y").filter(string => string !== "")
  
  const switchCases = (action, object, key, value) => {
      //key or statement
    if (!["0", "1", "2", "3"].includes(key)) return null;
      console.log(action)
      switch(action){
        case "+":
          object[key] = object[key] + parseFloat(value)
          break
        case "-":
          object[key] = object[key] + parseFloat(value * -1)
          break
        default:
          object[key] = object[key] + parseFloat(value)       
        }
  }

  for (let i = 0; i < filtered.length; i++){
      const action = noSpace[noSpace.indexOf(filtered[i])-1]
      console.log(action, filtered[i])
    if (filtered[i].includes("x^")){
        let splitSub = filtered[i].split("x^")
        if (splitSub[0] === ""){
            splitSub[0] = "1"
        }
      switchCases(action, coeffMap, splitSub[1], splitSub[0])
    }
    else if(filtered[i].includes("x")){
        let splitSub = filtered[i].split("x")
        if (splitSub[0] === ""){ // y = 5 + 4x + 3x^2
          splitSub[0] = "1"
      }
      if (splitSub[1] === ""){
          splitSub[1] = "1"
      }
      switch(splitSub[1]){
          case "\u2070":
              splitSub[1] = "0";
              break;
          case "\u00B9":
              splitSub[1] = "1";
              break;
          case "\u00B2":
              splitSub[1] = "2";
              break;
          case "\u00B3":
              splitSub[1] = "3";
              break;
          case '⁰':
                splitSub[1] = "0";
                break;
          case '¹':
                splitSub[1] = "1";
                break;
          case '²':
                splitSub[1] = "2";
                break;
          case '³':
                splitSub[1] = "3";
                break;
          default:
              break;
          
      }
      switchCases(action, coeffMap, splitSub[1], splitSub[0])
    }else {
        switchCases(action, coeffMap, '0', filtered[i])
    }

  }
  let coeffArray = Object.values(coeffMap);
  let zeroesCounter = 0;
  let i = coeffArray.length - 1
  while (coeffArray[i] === 0) {
      zeroesCounter++
      i--;
  }

  let numberOfTerms = coeffArray.length - zeroesCounter;
  switch (numberOfTerms) {
      case 1:
          return [numberOfTerms+1,...coeffArray.slice(0, numberOfTerms),0,xLimit]
      default:
          return [numberOfTerms, ...coeffArray.slice(0, numberOfTerms),xLimit];
  }
}

export const calculateIntegralForZap = (coefficientArray, xStart, xEnd) => {
  let sumA = 0;
  let sumB = 0;
  let power = 1; // increase power by 1 for integral
  let _coefficientArray = Array.from(coefficientArray);
  _coefficientArray.shift();
  while (_coefficientArray.length > 1) {
    sumA = sumA + (_coefficientArray[0] * Math.pow(xEnd, power)) / power;
    sumB = sumB + (_coefficientArray[0] * Math.pow(xStart, power)) / power;
    _coefficientArray.shift();
    power++;
  }
  return sumA - sumB;
};

export const calculateMaximumOfFunction = (
  coefficientArray,
  prevXLimit,
  index
) => {
  let _coefficientArray = coefficientArray;
  if (index !== 0) {
    _coefficientArray = coefficientArray;
    _coefficientArray[_coefficientArray.length - 1] =
      _coefficientArray[_coefficientArray.length - 1] - prevXLimit;
  }
  let xValue = 0;
  let xValueAlt = null;
  switch (_coefficientArray[0]) {
    // set derivative to 0 to find points where slope = 0;
    case 2:
      // y = 100 +200x =>  y = 200*1 =>
      // Slope greater than 0, then xValue of max peak found
      // Slope less than or equal to 0, then return yValue when x is 0
      if (_coefficientArray[2] > 0) {
        xValue = _coefficientArray[3];
        break;
      } else {
        xValue = 0;
        return _coefficientArray[1];
      }
    case 3:
      // y = 100 +200x +300x^2 => y = 200*1 + 300*2*x
      xValue = (0 - _coefficientArray[2]) / _coefficientArray[3] / 2;
      xValue <= 0 ? (xValue = _coefficientArray[4]) : (xValue = xValue + 0);
      break;
    case 4:
      // y = 100 +200x +300x^2 -400x^3 => y = 200*1 + 300*2*x - 400*3x^2
      let c = _coefficientArray[2] * 1;
      let b = _coefficientArray[3] * 2;
      let a = _coefficientArray[4] * 3;
      // assume sqroot must exist as imported curve exists
      let _xValue1 = (0 - b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
      let _xValue2 = (0 - b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);

      xValue = _xValue1;
      xValueAlt = _xValue2;
      break;
    default:
      console.log("Invalid coefficient array");
  }
  let power = -1;
  let yMax = 0;
  let tempSumA = 0;
  let tempSumB = 0;
  _coefficientArray.forEach((ele, i) => {
    if (!xValueAlt) {
      if (
        ![0, _coefficientArray.length - 1].includes(i) &&
        xValue >= prevXLimit &&
        xValue <= _coefficientArray[_coefficientArray.length - 1]
      ) {
        yMax = yMax + ele * Math.pow(xValue, power);
      }
    } else {
      if (![0, _coefficientArray.length - 1].includes(i)) {
        if (
          xValue >= prevXLimit &&
          xValue <= _coefficientArray[_coefficientArray.length - 1]
        )
          tempSumA = tempSumA + ele * Math.pow(xValue, power);
        if (
          xValueAlt >= prevXLimit &&
          xValueAlt <= _coefficientArray[_coefficientArray.length - 1]
        )
          tempSumB = tempSumB + ele * Math.pow(xValueAlt, power);
      }
    }
    power++;
  });
  return Math.max(yMax, tempSumA, tempSumB);
};

export function calculateYChange(coeffArr, prevXLimit = 0) {
  switch (coeffArr[0]) {
    case 2:
      // yChange = ∆x^0 * coeffArray[1] + ∆x^1 * coeffArr[2]
      return coeffArr[1] + coeffArr[2] * (coeffArr[3] - prevXLimit);
    case 3:
      return (
        coeffArr[1] +
        coeffArr[2] * (coeffArr[4] - prevXLimit) +
        coeffArr[3] * (coeffArr[4] - prevXLimit) ** 2
      );
    case 4:
      return (
        coeffArr[1] +
        coeffArr[2] * (coeffArr[5] - prevXLimit) +
        coeffArr[3] * (coeffArr[5] - prevXLimit) ** 2 +
        coeffArr[4] * (coeffArr[5] - prevXLimit) ** 3
      );
    default:
      return null;
  }
}

export function generateUUID() {
  // Public Domain/MIT: https://www.ietf.org/rfc/rfc4122.txt
  var d = new Date().getTime(); //Timestamp
  var d2 =
    (performance && performance.now && window.performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = Math.random() * 16; //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

export function checkPiecewiseFunction(coefficientArray) {
  let coeffPiecewiseMap = {};
  let curveGroup = 0;
  function convertCoefficientArrayWithOneTerm(coefficientArray) {
    let changedCoefficientArray = coefficientArray;
    if (coefficientArray[0] === 1) {
      changedCoefficientArray = [
        2,
        coefficientArray[1],
        0,
        coefficientArray[2],
      ];
    }
    return changedCoefficientArray;
  }
  if (!coefficientArray[coefficientArray[0] + 2]) {
    coeffPiecewiseMap[curveGroup] = convertCoefficientArrayWithOneTerm(
      coefficientArray
    );
  }

  while (coefficientArray[coefficientArray[0]] || coefficientArray[coefficientArray[0]] === 0n || coefficientArray[coefficientArray[0]] === 0) {
    coeffPiecewiseMap[curveGroup] = convertCoefficientArrayWithOneTerm(
      coefficientArray.slice(0, coefficientArray[0] + 2)
    );
    coefficientArray = convertCoefficientArrayWithOneTerm(
      coefficientArray.slice(coefficientArray[0] + 2)
    );
    curveGroup = curveGroup + 1;
  }
  return [coeffPiecewiseMap, curveGroup];
}

export function pointsToCoeff(pointsOriginal, margin, dotSupplyScale, zapCostScale, _maxReserve, previousXLimit = 0){
  let coefficientArray = [];
  let x1, x2, x3;
  let y0, y1, y2, y3;
  let index0, index1, index2, index3;
  // let _x0, _x1, _x2, _x3;
  // let _y0, _y1, _y2, _y3;

  switch(pointsOriginal.length){
    case 4:

      index0 = pointsOriginal[0]
      // x0 = index0[0]
      y0 = index0[1]
      index1 = pointsOriginal[1]
      x1 = index1[0]
      y1 = index1[1]
      index2 = pointsOriginal[2]
      x2 = index2[0]
      y2 = index2[1]
      index3 = pointsOriginal[3]
      x3 = index3[0]
      y3 = index3[1]

      coefficientArray[0] = 4;
      coefficientArray[1] = y0;
      coefficientArray[2] = (y1 - y0) / x1;
      coefficientArray[3] = (y2 - (2 * y1) + y0) / (3 * Math.pow(x1, 2));
      coefficientArray[4] = ((y3 - y0) - (3 * y2) + (3 * y1)) / (27 * Math.pow(x1, 3));
      coefficientArray[5] = x3 - previousXLimit;
      
      return coefficientArray;
  case 3 :
      index0 = pointsOriginal[0]
      // x0 = index0[0]
      y0 = index0[1]
      index1 = pointsOriginal[1]
      x1 = index1[0]
      y1 = index1[1]
      index2 = pointsOriginal[2]
      x2 = index2[0]
      y2 = index2[1]

      coefficientArray[0] = 3;
      coefficientArray[1] = y0;
      coefficientArray[2] = (y1-y0)/x1;
      coefficientArray[3] = (y2 -(2 * y1) + y0)/(4 * Math.pow(x1, 2));
      coefficientArray[4] = x2 + previousXLimit

      return coefficientArray

  case 2 :
      index0 = pointsOriginal[0]
      // x0 = index0[0]
      y0 = index0[1]
      index1 = pointsOriginal[1]
      x1 = index1[0]
      y1 = index1[1]

      coefficientArray[0] = 2;
      coefficientArray[1] = y0;
      coefficientArray[2] = (y1 - y0) / x1;
      coefficientArray[3] = x1 + previousXLimit

      return coefficientArray
  case 1:
      let index = pointsOriginal
      // x0 = index[0]
      y0 = index[1]

      coefficientArray[0] = 1;
      coefficientArray[1] = y0;
      
      return coefficientArray;
  default:
    return null;

  }

  // function adjCoord){
  //     let coordX = (adjCoord[0] - margin.left) * dotSupplyScale;
  //   let coordY = (-adjCoord[1] + margin.bottom) * zapCostScale * _maxReserve;
  //     return [coordX, coordY]
  // }
}

export const convertFromZapToWeiZap = (coefficientArray) => {
  return coefficientArray.map((ele,i) =>{
    if (![0,coefficientArray.length-1].includes(i)) {
      let stringValue = String(removeExponents(ele)).includes('.') ? String(removeExponents(ele).slice(0,19)) : String(removeExponents(ele)).slice(0,18);
      ele = ethers.utils.parseEther(stringValue);
      return ele;  
    }
      return ele;
  })
}

export const convertFromWeiZapToZap = (coefficientArray) => {
  return coefficientArray.map((ele, i) => {
    if (![0, coefficientArray.length - 1].includes(i)) {
      return ele = Number(ele) * Math.pow(10, -18);
    } else {
      return ele;
    }
  })
}
