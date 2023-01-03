import React, { useRef, useEffect } from "react";
import {
   TextField,
   Grid,
   Typography,
   Divider,
   Select,
   FormControl,
   InputLabel,
   MenuItem,
   FormControlLabel,
   Switch,
} from "@material-ui/core";
import { useStyles } from "src/views/endpointwizard/styles.js";
import { useSelector } from "react-redux";

const ProviderDetails = ({ navBtns, handleChange, info }) => {
   const classes = useStyles();
   const btnDisplay = useRef();
   const account = useSelector((state) => state.account);
   const prevTDF = info.ownedTDF.length > 0;

   let reduced = info.ownedTDF.map((dtf) => {
      return { oracleAddress: dtf.oracleAddress, oracleTitle: dtf.oracleTitle };
   });
   var uniqueSet = [];

   for (var i = 0; i < reduced.length; i++) {
      let curr = reduced[i];
      const check = (elem) => {
         return elem.oracleAddress === curr.oracleAddress;
      };
      if (!uniqueSet.some(check)) {
         uniqueSet.push(curr);
      }
   }

   return (
      <Grid className={classes.root} container>
         <Grid className={classes.title} xs={12}>
            <Typography variant="h2" color="textPrimary">
               Provider Information
            </Typography>
         </Grid>
         <form className={classes.inputField}>
            <Grid
               alignContent={"center"}
               className={classes.content}
               container
               direction={"column"}
               justify={"space-evenly"}
               xs={12}>
               <Grid
                  alignContent={"center"}
                  container
                  direction={"column"}
                  xs={7}>
                  <Typography variant="h4" color="inherit">
                     <strong>Provider Address</strong>
                  </Typography>
                  <Typography variant="body1" color="inherit">
                     Your Provider Address is the address of the wallet you use
                     to create your token. This address will be the owner of the
                     smart contract that is deployed with your token.
                  </Typography>
                  {account.user.account ? (
                     <TextField
                        defaultValue={info.providerAddress}
                        fullWidth
                        // error={info.proNameEmpty}
                        label={"Provider Address"}
                        style={{ margin: "6px 0px 18px" }}
                        required
                        disabled
                        variant="filled"
                     />
                  ) : (
                     <TextField
                        defaultValue={info.providerAddress}
                        fullWidth
                        // hintText={"ProviderAddress"}
                        label={"Provider Address"}
                        style={{ margin: "6px 0px 16px" }}
                        required
                        disabled
                        onChange={handleChange(
                           "providerAddress",
                           "proAddEmpty"
                        )}
                        variant={"filled"}
                     />
                  )}
               </Grid>
               <Divider style={{ marginBottom: 12 }} />
               <Grid
                  container
                  direction={"column"}
                  justify={"space-evenly"}
                  xs={7}>
                  <Typography variant="h4" color="inherit">
                     <strong>Provider Title</strong>
                  </Typography>
                  <Typography variant="body1" color="inherit">
                     Your Provider Title is the name of your wallet address on
                     the Zap platform. Think of it as the Web 3 equivalent of a
                     username.
                  </Typography>
                  {info.providerAlready ? (
                     <TextField
                        defaultValue={info.providerName}
                        fullWidth
                        style={{ margin: "6px 0px 18px" }}
                        error={info.proNameEmpty}
                        label={"Provider Title"}
                        required
                        disabled
                        variant="filled"
                     />
                  ) : (
                     <TextField
                        defaultValue={info.providerName}
                        fullWidth
                        style={{ margin: "6px 0px 18px" }}
                        inputProps={{ maxLength: 32 }}
                        helperText={
                           info.proNameEmpty
                              ? "Provider Title cannot be empty"
                              : ""
                        }
                        error={info.proNameEmpty}
                        label={"Provider Title"}
                        onChange={handleChange("providerName", "proNameEmpty")}
                        required
                        variant="filled"
                     />
                  )}
               </Grid>
               <Divider style={{ marginBottom: 12 }} />
               {prevTDF && (
                  <Grid
                     container
                     direction={"column"}
                     justify={"space-evenly"}
                     xs={7}>
                     <Typography variant="h4" color="inherit">
                        <strong>Use a Previously Deployed Token Factory</strong>
                     </Typography>
                     <Typography variant="body1" color="inherit">
                        Your Token Factory acts as the creator, provider, broker
                        of your tokens. You can reuse one that you have used
                        before, or create a new one to create new tokens.
                     </Typography>
                     <FormControlLabel
                        control={
                           <Switch
                              defaultChecked={info.reuseTDF}
                              color={"secondary"}
                              onChange={handleChange(
                                 "reuseTDF",
                                 "prevTDFempty"
                              )}
                           />
                        }
                        label={
                           <Typography className={classes.text}>
                              Reuse Token Factory
                           </Typography>
                        }
                     />
                     {info.reuseTDF && (
                        <FormControl
                           error={info.prevTDFempty}
                           required
                           variant="filled"
                           style={{ margin: "6px 0px 18px" }}>
                           <InputLabel>Token Factories</InputLabel>
                           <Select
                              fullWidth
                              label={"Provider Title"}
                              onChange={handleChange("prevTDF", "prevTDFempty")}
                              required>
                              {uniqueSet.map((tdf) => {
                                 return (
                                    <MenuItem
                                       key={tdf.oracleAddress}
                                       value={tdf.oracleAddress}>
                                       {tdf.oracleTitle}{" "}
                                       {tdf.oracleAddress.substring(0, 6) +
                                          "..." +
                                          tdf.oracleAddress.substring(
                                             tdf.oracleAddress.length - 4
                                          )}
                                    </MenuItem>
                                 );
                              })}
                           </Select>
                        </FormControl>
                     )}
                  </Grid>
               )}
            </Grid>
         </form>

         <Grid
            className={classes.navbtns}
            ref={btnDisplay}
            container
            direction={"row"}
            item
            justify={"flex-end"}
            xs={12}>
            {navBtns}
         </Grid>
      </Grid>
   );
};

export default ProviderDetails;
