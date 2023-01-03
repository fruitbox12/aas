import React, { useRef } from "react";
import clsx from "clsx";
import {
   Grid,
   Typography,
   Link,
   Button,
   IconButton,
   Card,
   CardContent,
} from "@material-ui/core";
import { useStyles } from "../styles";
import { ProviderCurve } from "src/components/providercurve/ProviderCurve";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { NavigateNextSharp } from "@material-ui/icons";
// import ConfirmEndpointTable from "../confirmEndpointTable";
import copyToClipboard from "src/utils/copyToClipboard";
import ZapZIcon from "src/components/icons/ZapZIcon";
import { convertFromWeiZapToZap } from "src/utils/providerCurveUtil.js";

const ConfirmListing = ({ info, navBtns, values, listBtn }) => {
   const validated = useRef();
   //  const providerField = useRef();
   //  const endpointField = useRef();

   let mdLink, jsonLink;

   if (info.markdownLink.length > 14) {
      mdLink = info.markdownLink.slice(0, 14) + "...";
   } else {
      mdLink = info.markdownLink;
   }
   if (info.jsonLink.length > 14) {
      jsonLink = info.jsonLink.slice(0, 14) + "...";
   } else {
      jsonLink = info.jsonLink;
   }

   const classes = useStyles();
   // Temporary variables passed through props to d3 module
   /* const providerCurve = useSelector(
      (state) => state.providerCurve.providerCurve
   );
   const curveId = Object.keys(providerCurve)[0];
  */
   const thumbnailParams = {
      existingCoefficientArray: values.curveArray,
      editable: false,
      bonded: false,
      bonding: false,
      bondedDots: 0,
      tokenSymbol: "",
      parentWidth: window.screen.width > 650 ? 300 : 150,
      parentHeight: window.screen.width > 650 ? 300 : 150,
      axesOptions:
         window.screen.width > 650
            ? { xAxisTicks: 1, yAxisTicks: 1, showLabels: false, tickSize: 5 }
            : { xAxisTicks: 1, yAxisTicks: 1, showLabels: false, tickSize: 5 },
      zoomFit: 1,
   };
   let { existingCoefficientArray } = thumbnailParams;
   existingCoefficientArray = convertFromWeiZapToZap(existingCoefficientArray);
   // eslint-disable-next-line
   let coeffString = "";
   for (let i = 0; i < existingCoefficientArray.length; i++) {
      if (i === existingCoefficientArray.length - 1) {
         console.log(
            existingCoefficientArray[i],
            existingCoefficientArray[i] % 1,
            "here"
         );
         if (existingCoefficientArray[i] % 1 === 0) {
            coeffString += existingCoefficientArray[i];
         } else {
            coeffString += Math.round(existingCoefficientArray[i]);
         }
      } else {
         if (existingCoefficientArray[i] % 1 === 0) {
            coeffString += existingCoefficientArray[i] + ", ";
         } else {
            coeffString += existingCoefficientArray[i].toFixed(4) + ", ";
         }
      }
   }
   // console.log("existingCoefficientArray: ", existingCoefficientArray);
   // const parentWidth = null;
   // const parentHeight = null;
   // const axesOptions = { xAxisTicks: 5, yAxisTicks: 5, showLabels: true };
   // const zoomFit = 1.2;

   let equations = [];
   let eq = "";
   let currentTerm = 0;
   let termsLeft = 0;
   const arr = info.curveArray;
   for (let i = 0; i < arr.length; i += 1) {
      if (termsLeft === 0) {
         currentTerm = 0;
         termsLeft = arr[i];
         continue;
      }
      eq =
         eq +
         arr[i] +
         (currentTerm ? (currentTerm > 1 ? "x^" + currentTerm : "x") : "") +
         (--termsLeft ? " + " : " ");
      currentTerm++;
      if (termsLeft === 0) {
         eq = eq + ": x-limit = " + arr[++i];
         equations.push(eq);
         eq = "";
         currentTerm = 0;
      }
   }

   // useEffect(() => {
   // 	if (
   // 		info.provider.length !== 0 &&
   // 		info.endpoint.length !== 0 &&
   // 		existingCoefficientArray.length !== 0
   // 	) {
   // 		validated.current.style.display = "inherit";
   // 	} else {
   // 		validated.current.style.display = "none";
   // 	}
   // }, []);

   // useEffect(()=>{
   // 	if(info.listing){
   // 		console.log("listing is true")
   // 		validated.current=
   // 			<Button
   // 			className={classes.listBtn}
   // 			ref={validated}
   // 			endIcon={<NavigateNextSharp />}
   // 			onClick={listBtn}
   // 			variant={"contained"}
   // 			>
   // 				PENDING
   // 			</Button>
   // 	}
   // }, [info.listing])

   //    const OneValue = (array) => {
   //       let array1=array
   //       let array2 = []
   //       array2 = array2.concat(array1)
   //       array2.shift()
   //       array2.pop()
   //       console.log(array2, array)
   //       let value = 0;
   //       for (let i = 0; i < array.length; i++){
   //           value = value + array[i] * BigInt(Math.pow(1, i))
   //       }
   //       return value
   //   }
   function markdownTitle() {
      return (
         <>
            Markdown Link
            <IconButton onClick={() => copyToClipboard(info.markdownLink)}>
               <FileCopyIcon fontSize={"small"} />
            </IconButton>
         </>
      );
   }
   function jsonTitle() {
      return (
         <>
            JSON Link
            <IconButton onClick={() => copyToClipboard(info.jsonLink)}>
               <FileCopyIcon fontSize={"small"} />
            </IconButton>
         </>
      );
   }

   let stats = [
      {
         txt: "Endpoint Name",
         val: info.endpoint,
      },
      {
         txt: "Provider Address",
         val: info.providerAddress,
      },
      {
         txt: markdownTitle(),
         val: (
            <Link
               component="a"
               color="inherit"
               underline="always"
               href={info.markdownLink}
               target={"_blank"}
               rel={"noopener noreferrer"}>
               {window.screen.width > 600 ? info.markdownLink : mdLink}
            </Link>
         ),
      },
      {
         txt: jsonTitle(),
         val: (
            <Link
               component="a"
               color="inherit"
               underline="always"
               href={info.jsonLink}
               target={"_blank"}
               rel={"noopener noreferrer"}>
               {window.screen.width > 600 ? info.jsonLink : jsonLink}
            </Link>
         ),
      },
      {
         txt: "Max Supply of Dots",
         val: info.curveArray[info.curveArray.length - 1],
      },
   ];

   return (
      <Grid className={clsx(classes.root, classes.confirmCardContainer)} container>
         <Card elevation={6} className={classes.confirmCard} >
            <CardContent>
               <Grid
                  alignContent={"center"}
                  className={classes.confirmGraph}
                  container
                  direction={"row"}
                  justify={"center"}
                  xs={12}>
                  <Grid
                     alignContent={"center"}
                     className={classes.confirmContent}
                     item
                     container
                     direction={"column"}
                     justify={"center"}
                     xs={12}>
                     <ProviderCurve {...thumbnailParams} />
                  </Grid>
               </Grid>
               <Grid
                  className={classes.confirmDets}
                  container
                  direction="row"
                  justify="space-evenly"
                  alignItems="center"
                  xs={12}
                  mt={12}>
                  {stats.map((s, index) => {
                     return (
                        <Grid
                           key={s.val + index}
                           sm={
                              stats.length < 5
                                 ? Math.floor(12 / stats.length)
                                 : null
                           }
                           xs={12}>
                           <Typography variant={"h4"}>{s.val}</Typography>
                           <Typography variant={"caption"}>{s.txt}</Typography>
                        </Grid>
                     );
                  })}
               </Grid>
            </CardContent>
         </Card>
         <Grid
            className={classes.navbtns}
            container
            direction={"row"}
            justify={"flex-end"}
            spacing={1}
            xs={12}>
            {navBtns}
            {info.provider.length !== 0 &&
               info.endpoint.length !== 0 &&
               existingCoefficientArray.length !== 0 && (
                  <>
                     {!info.pending ? (
                        <Button
                           className={classes.listBtn}
                           ref={validated}
                           endIcon={<NavigateNextSharp />}
                           onClick={listBtn}
                           variant={"contained"}
                           data-cy="Next">
                           List Endpoint
                        </Button>
                     ) : (
                        <Button
                           className={classes.listBtn}
                           variant={"contained"}
                           endIcon={<ZapZIcon className={classes.loader} />}>
                           Pending
                        </Button>
                     )}
                  </>
               )}
         </Grid>
      </Grid>
   );
};

export default ConfirmListing;
