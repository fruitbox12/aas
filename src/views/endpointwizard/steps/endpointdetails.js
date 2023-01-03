import React, { useEffect, useRef } from "react";
import { TextField, Grid } from "@material-ui/core";
import { useStyles } from "../styles";
import { useSelector } from "react-redux";
import ProviderAddressDialog from "src/components/ProviderAddressDialog";
import ProviderTitleDialog from "src/components/ProviderTitleDialog";
import EndpointNameDialog from "src/components/dialog/EndpointNameDialog";
import BrokerAddressDialog from "src/components/BrokerAddressDialog";

const TokenName = ({
   emptyEndpoint,
   emptyProvider,
   emptyProviderAddress,
   invalidBroker,
   // brokerMessage,
   handleChange,
   navBtns,
   values,
}) => {
   const classes = useStyles();

   const btnDisplay = useRef();
   const account = useSelector((state) => state.account);
   // const oraclesState = useSelector((state) => state.oracles);

   // useEffect(() => {
   //    if (!invalidBroker) {
   //       brokerMessage.current.style.display = "none";
   //    } else {
   //       brokerMessage.current.style.display = "block";
   //    }
   // }, [invalidBroker]);

   useEffect(() => {}, [
      emptyEndpoint,
      emptyProvider,
      emptyProviderAddress,
      invalidBroker,
   ]);

   return (
      <Grid className={classes.root} container>
         {/* <Grid className={classes.title} xs={12}>
            <Typography variant="h2" color="textPrimary">
               Endpoint Name
            </Typography>
         </Grid> */}
         <Grid
            alignContent={"center"}
            className={classes.content}
            container
            direction={"column"}
            justify={"space-evenly"}
            xs={12}>
            <form className={classes.root}>
               <TextField
                  defaultValue={values.providerAddress}
                  error={emptyProviderAddress}
                  fullWidth
                  hintText={"ProviderAddress"}
                  label={"Provider Address"}
                  onChange={handleChange(
                     "providerAddress",
                     "emptyProviderAddress"
                  )}
                  required
                  disabled
                  variant={"filled"}
               />
               <ProviderAddressDialog />
               {account.user.providerTitle ? (
                  <TextField
                     defaultValue={account.user.providerTitle}
                     error={emptyProvider}
                     // helperText="Provider title cannot be empty"
                     fullWidth
                     hintText={"Your name as a provider"}
                     label={"Provider Title"}
                     disabled
                     onChange={handleChange("provider", "emptyProvider")}
                     variant={"filled"}
                  />
               ) : (
                  <TextField
                     defaultValue={values.provider}
                     error={emptyProvider}
                     helperText= {emptyProvider? "Provider title cannot be empty" : "" }
                     fullWidth
                     required
                     inputProps={{ maxLength: 32 }}
                     hintText={"Your name as a provider"}
                     label={"Provider Title"}
                     onChange={handleChange("provider", "emptyProvider")}
                     variant={"filled"}
                  />
               )}
            <ProviderTitleDialog />
               <TextField
                  defaultValue={values.endpoint}
                  error={emptyEndpoint}
                  inputProps={{ maxLength: 32 }}
                  helperText={
                     emptyEndpoint ? "Endpoint name cannot be empty" : ""
                  }
                  fullWidth
                  hintText={
                     "The name of the endpoint you are trying to make a bonding curve for"
                  }
                  label={"Endpoint Name"}
                  onChange={handleChange("endpoint", "emptyEndpoint")}
                  required
                  variant="filled"
               />
               <EndpointNameDialog />
               <TextField
                  defaultValue={values.brokerAddress}
                  error={invalidBroker}
                  fullWidth
                  label={"Broker Address"}
                  helperText={
                     invalidBroker
                        ? "Invalid broker address, please check that the entered address is a valid ETH address. Leave blank for no broker required"
                        : ""
                  }
                  onChange={handleChange("brokerAddress")}
                  hintText={
                     "The Ethereum address you would like to assign as a broker"
                  }
                  variant={"filled"}
               />
               <BrokerAddressDialog />
               {/* span for unique endpoint name */}
               {/* <Typography ref={message} display="none" variant="span">
                  Endpoint name already taken, please try again
               </Typography> */}
            </form>
         </Grid>
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

export default TokenName;