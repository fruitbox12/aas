import React, {  useRef,   } from "react";
import clsx from 'clsx';
import { Grid, Typography, Button, Card, CardContent} from "@material-ui/core";
// import { THEMES } from "src/constants";
import { useStyles } from "src/views/endpointwizard/styles.js";
import { NavigateNextSharp } from "@material-ui/icons";
import { ProviderCurve } from "src/components/providercurve/ProviderCurve";
// import { convertFromWeiZapToZap } from "src/utils/zapConversion.ts";
import { convertFromWeiZapToZap } from "src/utils/providerCurveUtil.js";


const ConfirmToken = ({listBtn, info, navBtns, errClose}) => {
    const classes = useStyles();
    const validated = useRef();


    const thumbnailParams = {
        existingCoefficientArray: info.curveArray,
        editable: false,
        bonded: false,
        bonding: false,
        bondedDots: 0,
        tokenSymbol: info.tokenSymbol,
        parentWidth: window.screen.width > 1000 ? 600 : 150,
        parentHeight: window.screen.width > 1000 ? 600 : 150,
        axesOptions: window.screen.width > 1000 ? { xAxisTicks: 4, yAxisTicks: 4, showLabels: true } : { xAxisTicks: 2, yAxisTicks: 2, showLabels: true },
        zoomFit: 1,
      };

      let stats = [
        {
           txt: "Token Name",
           val: info.tokenName,
        },
        {
           txt: "Token Symbol",
           val: info.tokenSymbol,
        },
        {
           txt: "Max Supply of Tokens",
           val: info.curveArray[info.curveArray.length-1],
        },
     ];


    let { existingCoefficientArray } = thumbnailParams; 
    existingCoefficientArray = convertFromWeiZapToZap(existingCoefficientArray);
    // Commented out coeddString becasue it's not being used
    // eslint-disable-next-line
    var coeffString = "";
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

    // let fullLength = info.specifier
    // let begin = fullLength.slice(0, 6);
    // let end = fullLength.slice(-6);
    // let trimmed = begin + "...." + end;
    
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
				xs={12}       
            >
                    <Grid
                        alignContent={"center"}
                        className={classes.confirmContent}
                        item
                        container
                        direction={"column"}
                        justify={"center"}
                        xs={12}
                    >
                        <ProviderCurve
                            {...thumbnailParams}
                        />
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
                            sm={Math.floor(12 / stats.length)}
                            xs={12}>
                            <Typography variant={"h4"}>
                                {s.val}
                            </Typography>
                            <Typography variant={"caption"}>
                                {s.txt}
                            </Typography>
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
				xs={12}
			>
                {navBtns}
                <Button
                    className={classes.listBtn}
                    ref={validated}
                    endIcon={<NavigateNextSharp />}
                    onClick={listBtn}
                    variant={"contained"}
                >
                    List Endpoint
                </Button>
            </Grid>            
        </Grid>
    )
}

export default ConfirmToken