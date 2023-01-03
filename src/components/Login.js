import React, { useState } from "react";
import {
   Box,
   makeStyles,
   Button,
   Typography,
   Divider,
   FormControl,
   InputLabel,
   Select,
   MenuItem,
   FormControlLabel,
   Checkbox,
   Card,
   InputBase,
   withStyles,
   FilledInput,
} from "@material-ui/core";
import WalletModal from "src/components/WalletModal";

const SelectInput = withStyles((theme) => ({
   root: {
      "label + &": {
         marginTop: theme.spacing(2),
      },
   },
   input: {
      color: "#4f6e7c",
      borderRadius: 10,
      position: "relative",
      backgroundColor: "#C4C4C4",
      border: "1px solid #ced4da",
      fontSize: "1rem",
      padding: "15px 26px 15px 12px",
      "&:focus": {
         borderRadius: 10,
         backgroundColor: "#C4C4C4",
      },
      "&:hover": {
         backgroundColor: "#dedede",
      },
   },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
   root: {
      width: "900px;",
      height: "600px",
      margin: "0 auto;",
      color: "#469BE4;",
      fontSize: "0.5em;",
      display: "flex;",
      justifyContent: "center;",
      alignItems: "center",
   },
   leftTile: {
      width: "50%;",
      height: "100%",
      background: "linear-gradient(-10deg, #454242 55%, #469BE4 45%);",
   },
   formContainer: {
      width: "60%;",
      background: "#fff",
      height: "100%",
      display: "flex",
      alignItems: "center",
   },
   content: {
      padding: "75px 75px 100px 100px;",
   },
   formControl: {
      margin: theme.spacing(2, 0, 2, 0),
      width: "100%",
   },
   button: {
      width: "100%",
      height: "48px;",
      borderRadius: 10,
      color: "#fff",
      backgroundColor: "#469BE4",
      margin: theme.spacing(2, 0, 2, 0),
   },
   heading: {
      color: "#fff;",
      textAlign: "center;",
      fontSize: "2rem;",
      fontWeight: "600;",
      marginTop: "75px;",
   },
   imageContainer: {
      width: "377px",
      height: "271px",
      position: "relative;",
      left: "100px;",
      top: "150px;",
   },
   boltImage: {
      width: "100%;",
   },
   subText: {
      marginBottom: "16px;",
      marginLeft: "5px;",
   },
   termsText: {
      color: "#469BE4;",
   },
   textField: {
      overflow: "visible",
      borderRadius: 10,
      padding: "0",
      backgroundColor: "#C4C4C4",
      "&$focused": {
         backgroundColor: "#C4C4C4",
         borderColor: theme.palette.primary.main,
      },
      "&label": {
         margin: "12px",
      },
   },
   focused: {},
}));

export default function Login() {
   const zapLoginImage = "/static/zapLoginImage.png";
   const classes = useStyles();

   const [mnemonic, setMnemonic] = useState("");
   const [network, setNetwork] = useState("mainnet");
   const [termsAgreement, setTermsAgreement] = useState(false);
   const [showCustomLogin, setShowCustomLogin] = useState(false);
   const [openWallet, setOpenWallet] = React.useState(false);
   const handleCloseWalletModal = () => {
      console.log("close");
      setOpenWallet(false);
   };

   const handleMnemonicInput = (e) => {
      setMnemonic(e.target.value);
   };

   const handleNetworkSelect = (e) => {
      setNetwork(e.target.value);
      console.log(network);
   };

   const handleCheckbox = (e) => {
      setTermsAgreement(e.target.checked);
      console.log(termsAgreement);
   };

   const handleCustomLoginCheckbox = (e) => {
      setShowCustomLogin(e.target.checked);
   };

   return (
      <Card className={classes.root}>
         <div className={classes.leftTile}>
            <Typography className={classes.heading} variant="h1" component="h2">
               Welcome to the ZAP Protocol!
            </Typography>
            <div className={classes.imageContainer}>
               <img
                  alt={"Zap"}
                  className={classes.boltImage}
                  src={zapLoginImage}></img>
            </div>
         </div>
         <Box className={classes.formContainer}>
            <Box className={classes.content}>
               <Button
                  color="secondary"
                  variant="contained"
                  size="small"
                  onClick={() => setOpenWallet(true)}>
                  Login
               </Button>
               <Typography className={classes.subText} mb={3}>
                  Quick Login Using Metamask!
               </Typography>
               <Divider />
               <form autoComplete="off">
                  <FormControlLabel
                     control={
                        <Checkbox
                           required
                           className={classes.termsText}
                           value={showCustomLogin}
                           onClick={handleCustomLoginCheckbox}
                        />
                     }
                     label="Custom Login"
                  />
                  {showCustomLogin && (
                     <>
                        <FormControl
                           className={classes.formControl}
                           variant="filled">
                           <InputLabel htmlFor="mnemonic">Mnemonic*</InputLabel>
                           <FilledInput
                              className={classes.textField}
                              id="mnemonic"
                              required
                              value={mnemonic}
                              onChange={handleMnemonicInput}
                              disableUnderline={true}
                           />
                        </FormControl>
                        <FormControl className={classes.formControl}>
                           <InputLabel id="network-select-field-label">
                              Network
                           </InputLabel>
                           <Select
                              labelId="network-select-field-label"
                              id="network-select-field"
                              value={network}
                              required
                              onChange={handleNetworkSelect}
                              input={<SelectInput />}
                              MenuProps={{
                                 anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "left",
                                 },
                                 getContentAnchorEl: null,
                              }}>
                              <MenuItem value={"mainnet"}>Mainnet</MenuItem>
                              <MenuItem value={"ropsten"}>Ropsten</MenuItem>
                              <MenuItem value={"kovan"}>Kovan</MenuItem>
                           </Select>
                        </FormControl>
                        <Button
                           type="submit"
                           fullWidth
                           variant="contained"
                           className={classes.button}>
                           Mnemonic Login
                        </Button>
                     </>
                  )}
                  <FormControlLabel
                     control={
                        <Checkbox
                           required
                           className={classes.termsText}
                           value={termsAgreement}
                           onClick={handleCheckbox}
                        />
                     }
                     label="I have read and agree to the terms"
                  />
               </form>
               <WalletModal
                  isOpen={openWallet}
                  handleClose={handleCloseWalletModal}
               />
            </Box>
         </Box>
      </Card>
   );
}

Login.propTypes = {};
