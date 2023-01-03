import React from "react";
import clsx from "clsx";
import {
   makeStyles,
   Typography,
   Grid,
   Card,
   CardContent,
   Hidden
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

//import use24HrBlock from "src/api/getblockhash";
import useZapPrices from "src/api/zapconversions";
import { AttachMoney, Equalizer, BubbleChart } from "@material-ui/icons";
//import { useContracts } from "src/hooks/contractHooks";
import { useSelector } from "react-redux";
import { ethers } from "ethers";

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },

   container:{
      [theme.breakpoints.down("sm")]: {
         width: "90vw"
      }
   },

   card: {
      [theme.breakpoints.down("sm")]: {
         padding: "10px",
         margin: "0px 10px 5px 10px"
      }
   },

   svgIcons: {
      width: "30px",
      height: "30px",
      float: "left",
      userSelect: "none",
      color: theme.palette.secondary.main,
   },

   totalBondedIcon: {
      width: "40px",
      height: "40px",
      float: "left",
      userSelect: "none",
   },

   centerText: {
      textAlign: "center",
      userSelect: "none",
      fontFamily: "Roboto, Helvetica, Arial, sans- serif",
   },

   cardHeading: {
      fontSize: "0.875rem",
      fontWeight: "500",
      lineHeight: "1.75",
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
      [theme.breakpoints.down("sm")]: {
         fontSize: ".5rem",
      },
   },

   cardData: {
      fontSize: "0.875rem",
      fontWeight: "400",
   },

   toggle: {
      "& :hover":{
         cursor:"pointer"
      },
      '& svg':{
         position: "relative",
         top:"5px"
      }
   }
}));

const PerformanceCards = ({ className }) => {
   const classes = useStyles();
   //let blockHash = use24HrBlock();
   let prices = useZapPrices();
   //const contracts = useContracts();
   const [toggle, setToggle] = React.useState(true)
   const display = React.useRef();

   // *** Zap to USD
   let price = prices.prices.toUsd;

   // *** value in bonding curves
   // Gets the stored Oracles
   const allOracles = useSelector((state) => state.oracles.oracles);
   // Convert to an array
   var asArray = Object.values(allOracles);
   // Reduce total volume locked
   var totalLocked = asArray.reduce((acc, curr) => {
      return acc + curr.zapBound;
   }, 0.0);
   // Convert from ethers Big Number to float
   totalLocked = parseFloat(totalLocked.toString());
   var wei = parseFloat(ethers.constants.WeiPerEther.toString());
   // Convert from weiZap to Zap
   totalLocked = totalLocked / wei;
   // Convert Zap to USD
   totalLocked = totalLocked * price;

   // *** volume transacted
   let volume = useSelector((state) => state.oracles.totalVolumeTraded);
   const vol = parseFloat(volume) * price,
      // eslint-disable-next-line no-unused-vars
      tvl = parseFloat(totalLocked) * price;

   function handleToggle(){
      console.log("click")
      setToggle(!toggle)
   }

   React.useEffect(()=>{
      if((!toggle && window.screen.width < 960) || (window.innerWidth < 960 && !toggle)){
         if (display.current) display.current.style.display="none"
      }
      if((toggle && window.screen.width < 960) || (window.innerWidth < 960 && toggle)){
         if (display.current) display.current.style.display="inherit"
      }
   },[toggle])

   return (
      <div className={clsx(className, classes.root)}>
         <Hidden mdDown>
            <Typography 
            className={classes.toggle} 
            color="primary" 
            onClick={()=>handleToggle()}> 
               {toggle? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/> } Market Performance
            </Typography>
         </Hidden>
         
        {window.screen.width >= 960 ?
          (<Grid container spacing={window.screen.width > 960 ? 4 : null} className={classes.container} ref={display}>
              {/* ZAP/USDT Card */}
              <Grid item xs={12} md={4}>
                <Card className={classes.card}>
                    <CardContent>
                      <AttachMoney className={classes.svgIcons} />

                      <div className={classes.centerText}>
                          <Typography className={classes.cardHeading}>
                            USD / ZAP
                          </Typography>
                          <Typography className={classes.cardData}>
                            {price.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                            })}
                          </Typography>
                      </div>
                    </CardContent>
                </Card>
              </Grid>

              {/* Total Bonded Card */}
              <Grid item xs={12} md={4}>
                <Card className={classes.card}>
                    <CardContent>
                      <div className={classes.centerText}>
                          <BubbleChart className={classes.svgIcons} />
                          <Typography className={classes.cardHeading}>
                            Total Bonded
                          </Typography>
                          <Typography className={classes.cardData}>
                            {totalLocked.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                            })}
                          </Typography>
                      </div>
                    </CardContent>
                </Card>
              </Grid>

              {/* Total Volume Card */}
              <Grid item xs={12} md={4}>
                <Card className={classes.card}>
                    <CardContent>
                      <Equalizer className={classes.svgIcons} />
                      <div className={classes.centerText}>
                          <Typography className={classes.cardHeading}>
                            Total Volume
                          </Typography>
                          <Typography className={classes.cardData}>
                            {vol.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                            })}
                          </Typography>
                      </div>
                    </CardContent>
                </Card>
              </Grid>
          </Grid>)
          : null}
      </div>
   );
};

export default PerformanceCards;
