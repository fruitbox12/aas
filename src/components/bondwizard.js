import React, { useEffect, useState } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
   makeStyles,
   Typography,
   Grid,
   Button,
   Card,
   CardContent,
   TextField,
   InputAdornment,
   IconButton,
   Snackbar,
   CardHeader,
} from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup, Alert } from "@material-ui/lab";
import { useRef } from "react";
import { ProviderCurve } from "src/components/providercurve/ProviderCurve";
import { BondIcon } from "src/components/icons/bondicon";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useContracts } from "src/hooks/contractHooks";
import {
   multiBondCost,
   multiUnbondGain,
} from "src/contractcalls/currentcostcall.js";
import { callAllowance } from "src/contractcalls/allowancecall";
import { callApprove } from "src/contractcalls/approvecall";
import { callBond } from "src/contractcalls/bondcall";
import { callUnbond } from "src/contractcalls/unbondcall";
import { callBalanceOf } from "src/contractcalls/balanceofcall.js";
import { updateOracle } from "src/actions/oracleactions";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "src/actions/accountActions.js";
import { ethers } from "ethers";
import BondConfirmDialog from "src/components/bondconfirmdialog.js";
import { GrPowerCycle } from "react-icons/gr";
import { erc20ABI } from "src/contracts/erc20.js";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import ReactCardFlip from "react-card-flip";
import MoreVertIcon from "@material-ui/icons/MoreVert";

// Styling
const useStyles = makeStyles((theme) => ({
   rightContent: {
      width: "100%",
   },
   cardVSpace: {
      marginTop: theme.spacing(3),
   },
   vSpace: {
      marginTop: theme.spacing(1.5),
   },
   card: {
      padding: theme.spacing(2.5),
      [theme.breakpoints.down("sm")]: {
         "& h3": {
            textAlign: "Center",
         },
         "& h6": {
            textAlign: "center",
         },
      },
      [theme.breakpoints.down("xs")]: {
         padding: "0px",
         "& h3": {
            fontSize: "12px",
         },
         "& h6": {
            fontSize: "8px",
         },
      },
      width: "90vw",
      maxWidth: 575,
   },
   collapse: {
      width: "100%",
   },
   stat: {
      paddingLeft: theme.spacing(0.1),
      paddingRight: theme.spacing(0.1),
   },
   stats: {
      marginTop: theme.spacing(2.5),
   },
   dotInput: {
      "& input": {
         "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            margin: 0,
         },
      },
      "& input[type='number']": {
         MozAppearance: "textfield",
      },
   },
   curve: {
      height: "50vh",
      maxHeight: 433,
   },
   toggleButtons: {
      borderRadius: "20px",
   },
   fullWidth: {
      width: "100%",
   },
}));

// enum of actions
const actions = {
   BOND: "Bond",
   UNBOND: "Unbond",
};

// enum of error messages
const errorMsg = {
   ALPHANUM: "Only positive whole number values",
   OVERLIMIT: "Over curve dot limit",
   OVERBONDED: "Insufficient balance",
   EMPTY: "Enter an amount",
   OVERZAP: "Insufficient ZAP balance",
};

// enum of tsx states
const tsxMode = {
   0: "Standby",
   1: "Sent",
   2: "Confirmed",
};

// actual component
const BondWizard = ({ className, oracleAddress, endpointName }) => {
   const classes = useStyles();
   const [mode, setBondingMode] = useState(actions.BOND);
   const [tsxVals, setTsxVals] = useState({ zap: 0, dots: 0 });
   const [inputInvalid, setInInvalid] = useState({ err: false, msg: "" });
   const [approvedAmt, setAmt] = useState(0.0);
   const [zapBal, setBal] = useState(0);
   const dispatch = useDispatch();
   const [refresh, setRefresh] = useState(0);
   const [openConfirm, setOpenConfirm] = useState(false);
   const [perZap, setPerZap] = useState(false);
   const [tsxState, setTsxState] = useState({ tsx: null, state: tsxMode[0] });
   const [openNotif, setOpenNotif] = useState(false);
   const [seeData, setSeeData] = useState(false);

   const contracts = useContracts();

   const bondBtn = useRef();
   const unbondBtn = useRef();

   const list = useSelector((state) => state.oracles),
      endpt = list.oracles[oracleAddress + endpointName];
   const account = useSelector((state) => state.account);

   //  let ethProvider = new ethers.providers.Web3Provider(window.ethereum);

   const endptDotLimit = endpt.dotLimit,
      subToken = endpt.isToken ? endpt.symbol : "Dot";

   const labelCheck = () => {
      if (endpt.isToken) {
         if (mode === "Bond") {
            return `${subToken} to Mint`;
         } else {
            return `${subToken} to Burn`;
         }
      } else {
         return `${subToken} to ${mode}`;
      }
   };

   let tokenContract;

   if (endpt.isToken) {
      tokenContract = new ethers.Contract(
         endpt.tokenAdd,
         erc20ABI,
         contracts.signer
      );
   }

   const updateCurrent = () => {
      updateOracle(oracleAddress, endpointName)
         .then((res) => {
            // Dispatch each Oracle endpoint object to the Redux store
            dispatch({
               type: res.type,
               payload: res.payload,
            });
         })
         .catch((err) => {
            return err;
         });
   };

   const handleChangeDots = (event) => {
      var dotsEntered = event.target.value;
      checkInput(dotsEntered);
   };

   const checkInput = (numString) => {
      var dotsEntered = numString;
      if (tsxVals.dots === 0) {
         dotsEntered = dotsEntered.replace("0", "");
      }
      const asInt = parseInt(dotsEntered, 10),
         asNum = Number(dotsEntered),
         validNum = asInt === asNum;
      if (dotsEntered === "") {
         setInInvalid({ err: false, msg: errorMsg.EMPTY });
         setTsxVals({ zap: 0, dots: 0 });
         return;
      }
      if (!validNum || asInt < 0) {
         setInInvalid({ err: true, msg: errorMsg.ALPHANUM });
         setTsxVals({ zap: 0, dots: 0 });
         return;
      }
      if (mode === actions.BOND) {
         if (!withinDotLimit(asInt)) {
            setInInvalid({ err: true, msg: errorMsg.OVERLIMIT });
            setTsxVals({ zap: 0, dots: asNum });
            return;
         }
         multiBondCost(
            contracts.currentCost,
            oracleAddress,
            endpointName,
            endpt.dotsBounded,
            dotsEntered
         ).then((resp) => {
            let val = resp / parseFloat(Math.pow(10, 18));
            if (!withinZapAmount(val.toFixed(18))) {
               setInInvalid({ err: true, msg: errorMsg.OVERZAP });
               setTsxVals({ zap: 0, dots: asNum });
               return;
            }
            setTsxVals({ zap: val.toFixed(18), dots: asNum });
         });
      } else if (mode === actions.UNBOND) {
         if (!withinDotsOwned(asInt)) {
            setInInvalid({ err: true, msg: errorMsg.OVERBONDED });
            setTsxVals({ zap: 0, dots: asNum });
            return;
         }
         multiUnbondGain(
            contracts.currentCost,
            oracleAddress,
            endpointName,
            endpt.dotsBounded,
            dotsEntered
         ).then((resp) => {
            let val = resp / parseFloat(Math.pow(10, 18));
            setTsxVals({ zap: val.toFixed(18), dots: asNum });
         });
      }
      setInInvalid({ err: false, msg: "" });
   };

   const withinDotLimit = (amt) => {
      return endptDotLimit >= amt + endpt.dotsBounded;
   };

   const withinZapAmount = (amt) => {
      return amt < zapBal;
   };

   const withinDotsOwned = (amt) => {
      if (endpt.isToken) {
         return endpt.tknBal - amt >= 0;
      } else {
         return endpt.userDots - amt >= 0;
      }
   };

   const handleModeToggle = (event, value) => {
      if (value === null) {
         return;
      }
      setBondingMode(value);
   };

   const handleArrowClick = () => {
      if (mode === actions.BOND) {
         setBondingMode(actions.UNBOND);
      } else {
         setBondingMode(actions.BOND);
      }
   };

   const handleApprove = async () => {
      try {
         var tsx = null;
         if (mode === actions.BOND) {
            if (!endpt.isToken) {
               tsx = await callApprove(contracts.zapToken);
            } else {
               tsx = await callApprove(contracts.zapToken, endpt.brokerAddress);
            }
         } else {
            if (endpt.isToken) {
               tsx = await callApprove(tokenContract, endpt.brokerAddress);
            }
         }
         if (tsx) {
            setTsxState({ tsx: tsx, state: tsxMode[1] });
         }
      } catch (e) {
         console.error(e);
      }
   };

   const handleBond = async () => {
      var tsx = null;
      if (mode === actions.BOND) {
         tsx = await callBond(
            contracts.bondage,
            oracleAddress,
            endpointName,
            tsxVals.dots,
            endpt.isToken,
            contracts.signer
         );
      } else {
         tsx = await callUnbond(
            contracts.bondage,
            oracleAddress,
            endpointName,
            tsxVals.dots,
            endpt.isToken,
            contracts.signer,
            account.user.account,
            tokenContract
         );
      }
      if (tsx) {
         setTsxState({ tsx: tsx, state: tsxMode[1] });
      }
   };

   const handleConfirm = () => {
      handleBond().then(() => {
         setRefresh(refresh + 1);
      });
   };

   const handleCancel = () => {
      setOpenConfirm(false);
      setTsxState({ tsx: null, state: tsxMode[0] });
   };

   const handleOpenConfirm = () => {
      if (tsxVals.dots > 0) {
         setOpenConfirm(true);
         return;
      }
      setInInvalid({ err: true, msg: errorMsg.EMPTY });
      setTsxVals({ zap: 0, dots: 0 });
      return;
   };

   const handleChangeAvg = () => {
      setPerZap(!perZap);
   };

   const handleTsxSent = async () => {
      await tsxState.tsx.wait();
      updateCurrent();
      setTsxState({ tsx: null, state: tsxMode[2] });
   };

   const handleTsxDone = () => {
      setOpenConfirm(false);
      if (tsxState.state === tsxMode[2]) {
         setTsxState({ tsx: null, state: tsxMode[0] });
      }
   };

   const handleCloseNotif = () => {
      setOpenNotif(false);
   };

   const handleMax = () => {
      const max = endpt.isToken
         ? { target: { value: "0" + String(endpt.tknBal) } }
         : { target: { value: "0" + String(endpt.userDots) } };
      handleChangeDots(max);
   };

   const handleCardFlip = () => {
      setSeeData(!seeData);
   };

   // Check for allowance of user
   useEffect(() => {
      if (mode === actions.BOND) {
         if (!endpt.isToken) {
            callAllowance(contracts.zapToken).then((resp) => {
               setAmt(resp);
            });
         } else {
            callAllowance(contracts.zapToken, endpt.brokerAddress).then(
               (resp) => {
                  setAmt(resp);
               }
            );
         }
      } else {
         if (endpt.isToken) {
            callAllowance(tokenContract, endpt.brokerAddress).then((resp) => {
               setAmt(resp);
            });
         }
      }
      updateCurrent();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [refresh, mode]);

   // Update Zap value on mode change
   useEffect(() => {
      checkInput(tsxVals.dots.toString());
      if (bondBtn.current) {
         if (mode === "Bond") {
            bondBtn.current.style.backgroundColor = "#30A9FF";
            unbondBtn.current.style.backgroundColor = "#FFFFFF1F";
         } else {
            bondBtn.current.style.backgroundColor = "#FFFFFF1F";
            unbondBtn.current.style.backgroundColor = "#30A9FF";
         }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [mode]);

   useEffect(() => {
      callBalanceOf(contracts.zapToken).then((resp) => {
         const bal = resp === null ? 0 : resp;
         dispatch(updateUser("zapBalance", bal));
         setBal(bal);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
      updateCurrent();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [refresh]);

   useEffect(() => {
      callBalanceOf(contracts.zapToken).then((resp) => {
         const bal = resp === null ? 0 : resp;
         dispatch(updateUser("zapBalance", bal));
         setBal(bal);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
      updateCurrent();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setRefresh(refresh + 1);
   }, []);

   useEffect(() => {
      console.log(tsxState.state);
      // eslint-disable-next-line default-case
      switch (tsxState.state) {
         case tsxMode[0]:
            break;
         case tsxMode[1]:
            handleTsxSent();
            break;
         case tsxMode[2]:
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (!openConfirm) {
               setOpenNotif(true);
            }
            handleTsxDone();
         default:
            break;
      }
      setRefresh(refresh + 1);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [tsxState.state, tsxState.tsx]);

   // Params for curve thumbnail
   const thumbnailParams = {
      key: endpt.dotsBounded,
      existingCoefficientArray: endpt.coeffecientArr,
      editable: false,
      bondedDots: endpt.dotsBounded,
      bonded: true,
      bonding: false,
      parentWidth: window.screen.width > 650 ? 480 : 100,
      parentHeight: window.screen.width > 650 ? 400 : 83,
      axesOptions: {
         xAxisTicks: window.screen.width > 650 ? 0 : 0,
         yAxisTicks: window.screen.width > 650 ? 0 : 0,
         showLabels: true,
         tickSize: 0,
      },
      zoomFit: 1,
      tokenSymbol: endpt.symbol,
   };

   // Price to show
   var priceToShow =
      endpt.pricePerDot / parseFloat(ethers.constants.WeiPerEther.toString());
   priceToShow = priceToShow < 0.0001 ? "<0.0001" : priceToShow.toFixed(4);

   // Average cost of the transaction per token
   var averageCost = 0;
   if (tsxVals.dots > 0) {
      if (perZap) {
         averageCost =
            tsxVals.dots / tsxVals.zap > 0 ? tsxVals.dots / tsxVals.zap : 0;
      } else {
         averageCost =
            tsxVals.zap / tsxVals.dots > 0 ? tsxVals.zap / tsxVals.dots : 0;
      }
      averageCost =
         averageCost !== 0 && averageCost < 0.0001
            ? "<0.0001"
            : averageCost.toFixed(18);
      averageCost =
         parseFloat(averageCost) > 1
            ? parseFloat(averageCost).toFixed(4)
            : averageCost;
   }
   if (perZap) {
      averageCost = endpt.isToken
         ? `Average ${endpt.symbol} per Zap: ` + averageCost
         : "Average Dots per Zap: " + averageCost;
   } else {
      averageCost = endpt.isToken
         ? `Average Zap per ${endpt.symbol}: ` + averageCost
         : "Average Zap per Dot: " + averageCost;
   }

   let stats = [
      {
         txt: "Current Bonded Supply",
         val: endpt.dotsBounded.toLocaleString() + " " + subToken,
      },
      {
         txt: "Implicit Market Cap",
         val: endpt.dotLimit.toLocaleString() + " " + subToken,
      },
      {
         txt: "Spot Price",
         val: priceToShow + " ZAP / " + subToken,
      },
   ];

   let cardTitle = (
      <CardHeader
         action={
            <IconButton onClick={handleCardFlip}>
               <MoreVertIcon />
            </IconButton>
         }
         title={endpointName}
         titleTypographyProps={{ variant: "h3" }}
      />
   );

   return (
      <>
         <Grid
            className={clsx(className)}
            container
            direction="row"
            justify="center"
            alignItems="center"
            xs={12}>
            <ReactCardFlip className={classes.fullWidth} isFlipped={seeData}>
               {/* Interactive Fields */}
               <Card elevation={3} boxShadow={3} className={classes.card}>
                  {cardTitle}
                  <CardContent>
                     <ToggleButtonGroup
                        className={classes.rightContent}
                        value={mode}
                        exclusive
                        onChange={handleModeToggle}>
                        <ToggleButton
                           className={clsx(
                              classes.rightContent,
                              classes.selected,
                              classes.toggleButtons
                           )}
                           ref={bondBtn}
                           value={actions.BOND}>
                           Bond
                        </ToggleButton>

                        <ToggleButton
                           className={clsx(
                              classes.rightContent,
                              classes.selected,
                              classes.toggleButtons
                           )}
                           ref={unbondBtn}
                           value={actions.UNBOND}>
                           Unbond
                        </ToggleButton>
                     </ToggleButtonGroup>
                     <div className={classes.vSpace}>
                        <Typography align={"right"}>
                           Balance:{" "}
                           {endpt.isToken
                              ? endpt.tknBal.toLocaleString("en-US", {
                                   maximumSignificantDigits: 18,
                                })
                              : endpt.userDots.toLocaleString("en-US", {
                                   maximumSignificantDigits: 18,
                                })}
                        </Typography>
                        <TextField
                           className={clsx(
                              classes.dotInput,
                              classes.rightContent
                           )}
                           error={inputInvalid.err}
                           fullWidth
                           label={labelCheck()}
                           onChange={handleChangeDots}
                           placeholder={0}
                           value={tsxVals.dots.toString()}
                           variant="outlined"
                           InputProps={{
                              type: "number",
                              min: 0,
                              endAdornment: (
                                 <>
                                    {mode === actions.UNBOND && (
                                       <Button
                                          color={"secondary"}
                                          onClick={handleMax}
                                          variant={"contained"}>
                                          Max
                                       </Button>
                                    )}
                                    <InputAdornment position="end">
                                       {subToken}
                                    </InputAdornment>
                                 </>
                              ),
                           }}
                        />
                     </div>
                     <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center">
                        <IconButton
                           className={classes.vSpace}
                           color={"primary"}
                           onClick={handleArrowClick}>
                           {mode === actions.UNBOND && <BsArrowDown />}
                           {mode === actions.BOND && <BsArrowUp />}
                        </IconButton>
                     </Grid>
                     <div className={classes.vSpace}>
                        <Typography align={"right"}>
                           Balance: {zapBal.toLocaleString()}
                        </Typography>
                        <TextField
                           className={classes.rightContent}
                           fullWidth
                           label={
                              mode === actions.BOND
                                 ? "Estimated ZAP to bond"
                                 : "Estimated ZAP from unbond"
                           }
                           value={inputInvalid.err ? 0 : tsxVals.zap}
                           variant="outlined"
                           InputProps={{
                              readOnly: true,
                              endAdornment: (
                                 <InputAdornment position="end">
                                    ZAP
                                 </InputAdornment>
                              ),
                           }}
                        />
                     </div>
                     <div className={classes.vSpace}>
                        <Typography align={"right"}>
                           <IconButton onClick={handleChangeAvg}>
                              <GrPowerCycle />
                           </IconButton>
                           {averageCost}
                        </Typography>
                     </div>
                     {approvedAmt !== 0 && (
                        <Button
                           className={clsx(
                              classes.rightContent,
                              classes.vSpace,
                              classes.corners
                           )}
                           color={"primary"}
                           fullWidth
                           disabled={
                              tsxState.state === tsxMode[1] ||
                              inputInvalid.err ||
                              tsxVals.dots === 0
                           }
                           onClick={handleOpenConfirm}
                           size={"large"}
                           startIcon={
                              inputInvalid.err || tsxVals.dots === 0 ? (
                                 <></>
                              ) : (
                                 <BondIcon />
                              )
                           }
                           variant={"contained"}>
                           {tsxState.state === tsxMode[1]
                              ? "Confirming " + mode
                              : tsxVals.dots === 0
                              ? errorMsg.EMPTY
                              : inputInvalid.err
                              ? inputInvalid.msg
                              : mode}
                        </Button>
                     )}
                     {approvedAmt === 0 && (
                        <Button
                           className={clsx(
                              classes.rightContent,
                              classes.vSpace,
                              classes.corners
                           )}
                           disabled={tsxState.state === tsxMode[1]}
                           color={"primary"}
                           fullWidth
                           onClick={handleApprove}
                           size={"large"}
                           startIcon={<CheckCircleIcon />}
                           variant={"contained"}>
                           {tsxState.state === tsxMode[1]
                              ? "Confirming Approve"
                              : "Approve " +
                                (mode === actions.BOND ? "ZAP" : endpt.symbol)}
                        </Button>
                     )}
                  </CardContent>
               </Card>
               {/* Bonding Curve Stats */}
               <Card elevation={3} boxShadow={3} className={classes.card}>
                  {cardTitle}
                  <CardContent>
                     <Grid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        xs={12}>
                        <Grid xs={12}>
                           <div className={classes.curve}>
                              <ProviderCurve {...thumbnailParams} />
                           </div>
                        </Grid>
                        <Grid
                           className={classes.stats}
                           direction="row"
                           container
                           direction="row"
                           justify="center"
                           alignItems="center"
                           xs={12}>
                           <Grid className={clsx(classes.stat)} xs={12}>
                              <Typography variant={"h3"}>
                                 {endpointName} Stats
                              </Typography>
                           </Grid>
                           {stats.map((s) => {
                              return (
                                 <>
                                    <Grid
                                       className={clsx(
                                          classes.vSpace,
                                          classes.stat
                                       )}
                                       key={s.txt}
                                       xs={6}>
                                       <Typography
                                          align={"left"}
                                          variant={"caption"}>
                                          {s.txt}
                                       </Typography>
                                    </Grid>
                                    <Grid
                                       className={clsx(
                                          classes.vSpace,
                                          classes.stat
                                       )}
                                       key={s.val}
                                       xs={6}>
                                       <Typography
                                          align={"right"}
                                          variant={"h4"}>
                                          {s.val}
                                       </Typography>
                                    </Grid>
                                 </>
                              );
                           })}
                        </Grid>
                     </Grid>
                  </CardContent>
               </Card>
            </ReactCardFlip>
         </Grid>
         <BondConfirmDialog
            dots={tsxVals.dots}
            handleAccept={handleConfirm}
            handleCancel={handleCancel}
            handleTsxDone={handleTsxDone}
            mode={mode}
            open={openConfirm}
            tsx={tsxState.tsx}
            tsxEnum={tsxMode}
            tsxState={tsxState.state}
            zap={tsxVals.zap}
            symbol={endpt.symbol}
         />
         <Snackbar
            open={openNotif}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            autoHideDuration={6000}
            onClose={handleCloseNotif}>
            <Alert onClose={handleCloseNotif} severity="success">
               This is a success message!
            </Alert>
         </Snackbar>
      </>
   );
};

BondWizard.propTypes = {
   className: PropTypes.string,
   oracleAddress: PropTypes.string,
   endpointName: PropTypes.string,
};

BondWizard.defaultProps = {
   className: "",
   oracleAddress: "",
   endpointName: "Bittermelon",
};

export default BondWizard;
