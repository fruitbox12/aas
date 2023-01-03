import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Page from "src/components/Page";
import {
   Container,
   makeStyles,
   Grid,
   FormControlLabel,
   Switch,
   Typography,
   Box,
   TextField,
} from "@material-ui/core";
import Header from "./header";
import PerformanceCards from "src/components/performancecards";
import { useSelector } from "react-redux";
import EndpointCard from "src/components/endpointcard.js";
import OracleMarketTable from "src/components/oraclemarkettable";
import { useContracts } from "src/hooks/contractHooks";
import use24HrBlock from "src/api/getblockhash";
import { getRecentBonds } from "src/contractcalls/getbondageevents.js";
import useZapPrices from "src/api/zapconversions";
//import { ethers } from "ethers";
//import TrendingOracles from "src/components/trendingoracles";
import ZapLoadingLogo from "src/components/ZapLoadingLogo";
import Pagination from "@material-ui/lab/Pagination";
import { GET_ORACLES_ERROR } from "src/actions/oracleactions.js";

// Component Styles
const useStyles = makeStyles((theme) => ({
   root: {
      minHeight: "100%",
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
   },
   cards: {
      margin: "auto",
      // marginTop: theme.spacing(3),
      // marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
         padding: 0,
      },
   },
   text: {
      color: theme.palette.text.primary,
   },
   box: {
      marginTop: theme.spacing(3),
   },
}));

//Component Itself
function ExpandedOracleMarketView({ className, tokenMarket }) {
   const classes = useStyles();
   const [listView, setListView] = useState(false);
   const [myOracles, setMyOracles] = useState(false);
   // eslint-disable-next-line no-unused-vars
   const [volume, setVolume] = useState(0);
   const [searchFilter, setFilter] = useState({ fn: () => true });
   const [toOrderBy, setOrderBy] = useState([]);
   const [page, setPage] = useState(1);
   const contracts = useContracts();
   let blockHash = use24HrBlock();
   // eslint-disable-next-line no-unused-vars
   let prices = useZapPrices();
   const perPage = 9;

   // ******** Start of Oracle procesing ********

   // Gets the stored Oracles
   const allOracles = useSelector((state) => state.oracles);
   // Convert to an array
   var asArray = Object.values(allOracles.oracles);
   var lastDispatch = allOracles.lastAction;

   asArray = asArray.filter((oracle) => oracle.isToken === tokenMarket);

   // Filter oracles the user is bonded to
   if (myOracles) {
      asArray = asArray.filter((oracle) =>
         tokenMarket ? oracle.tknBal > 0 : oracle.userDots > 0.0
      );
   }

   // Filter oracles by what's in the search bar
   asArray = asArray.filter(searchFilter.fn);

   // Sort oracles by bondded
   if (toOrderBy.length > 0) {
      // toOrderBy.reverse(); // Needs to be reversed since `toOrderBy` is assumed to be in the right order and the oracle that matches is placed at index 0
      const sortBy = toOrderBy.slice().reverse(); // Need to preserve the original array
      sortBy.forEach((event) => {
         const check = (elem) => {
            return (
               event.provider === elem.oracleAddress &&
               event.endpoint === elem.endpointName
            );
         };
         if (asArray.some(check)) {
            const index = asArray.findIndex(check);
            const before = asArray.slice(0, index),
               after = asArray.slice(index + 1, asArray.length),
               endpt = asArray[index];
            asArray = [endpt, ...before, ...after];
         }
      });
   }

   // Event handlers

   const handleToogleView = () => {
      setListView(!listView);
      if (!listView) {
         setPage(1);
      }
   };

   const handleMyOracles = () => {
      setMyOracles(!myOracles);
   };

   const handleSearch = (event) => {
      let searchBy = event.target.value,
         searchLower = searchBy.toLowerCase();

      if (searchBy === "") {
         setFilter({ fn: () => true });
      }

      let newFilter = (oracle) => {
         let toCheck = ["oracleTitle", "oracleAddress", "endpointName"];
         let isFound = toCheck.reduce((prev, current) => {
            let oracleLower = oracle[current].toLowerCase();
            return prev || oracleLower.includes(searchLower);
         }, false);
         return isFound;
      };
      setFilter({ fn: newFilter });
   };

   const handlePageChange = (event, value) => {
      console.log(value);
      setPage(value);
   };

   // useEffects

   useEffect(() => {}, [blockHash.error, blockHash.loading, blockHash.hash]);

   useEffect(() => {
      getRecentBonds(contracts.bondage, 0).then((resp) => {
         setOrderBy(resp);
      });
      // eslint-disable-next-line
   }, []);

   const numPages =
      parseInt(asArray.length / perPage) +
      (asArray.length % perPage > 0 ? 1 : 0);

   return Object.keys(allOracles.oracles).length !== 0 ? (
      <Page
         className={classes.root}
         title={tokenMarket ? "Token Market" : "Oracle Market"}>
         <Container maxWidth={false}>
            <Header tokenMarket={tokenMarket} />

            <PerformanceCards />

            <Box className={classes.box}>
               {/* Filters */}
               <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center">
                  <FormControlLabel
                     control={
                        <Switch
                           checked={listView}
                           color={"secondary"}
                           onChange={handleToogleView}
                        />
                     }
                     label={
                        <Typography className={classes.text}>
                           List View
                        </Typography>
                     }
                  />
                  <FormControlLabel
                     control={
                        <Switch
                           checked={myOracles}
                           color={"secondary"}
                           onChange={handleMyOracles}
                        />
                     }
                     label={
                        <Typography className={classes.text}>
                           {/* Filter by My {tokenMarket ? "Tokens" : "Oracles"} */}
                           Bonded
                        </Typography>
                     }
                  />
                  <TextField
                     // fullWidth
                     label={
                        tokenMarket
                           ? "Search for a Token"
                           : "Search for an Oracle"
                     }
                     onChange={handleSearch}
                     variant={"outlined"}
                  />
               </Grid>

               {/* Endpoint Cards */}
               <Grid
                  container
                  direction="row"
                  justify="space-evenly"
                  alignItems="center"
                  xs={12}>
                  {!listView &&
                     asArray
                        .slice(
                           (page - 1) * perPage,
                           (page - 1) * perPage + perPage
                        )
                        .map((endpt) => {
                           // console.log(endpt);
                           return (
                              <Grid
                                 className={classes.cards}
                                 item
                                 xl={3}
                                 md={4}
                                 sm={6}
                                 xs={12}>
                                 <EndpointCard
                                    key={
                                       endpt.oracleAddress + endpt.endpointName
                                    }
                                    endptName={endpt.endpointName}
                                    coefficientArr={endpt.coeffecientArr}
                                    markdownLink={""}
                                    jsonLink={""}
                                    dotPrice={endpt.pricePerDot}
                                    dotsBonded={endpt.dotsBounded}
                                    dotLimit={endpt.dotLimit}
                                    dotsIssued={endpt.dotsIssued}
                                    oracleName={endpt.oracleTitle}
                                    oracleAddress={endpt.oracleAddress}
                                    symbol={endpt.symbol}
                                 />
                              </Grid>
                           );
                        })}
                  {listView && asArray.length !== 0 && (
                     <OracleMarketTable
                        tokenMarket={tokenMarket}
                        allOracles={Object.assign({}, asArray)}
                        noDrop
                     />
                  )}
                  {!listView && asArray.length !== 0 && (
                     <Grid
                        container
                        justify="space-evenly"
                        alignItems="center"
                        xs={12}>
                        <Pagination
                           className={classes.pagination}
                           color={"primary"}
                           count={numPages}
                           onChange={handlePageChange}
                           page={page}
                        />
                     </Grid>
                  )}
                  {asArray.length === 0 && myOracles && (
                    <Box className={classes.box}>
                      <Grid
                        container
                        xs={12}
                      >
                        <Typography className={classes.text}>
                          {`User is currently bonded to 0 ${tokenMarket ? `token` : `oracle`} curves`}
                        </Typography>
                      </Grid>
                    </Box>
                  )}
               </Grid>
            </Box>
         </Container>
      </Page>
   ) : (
      <Page className={classes.root} title="Oracle Martketplace">
         <Container maxWidth={false}>
            <Header tokenMarket={tokenMarket} />
            <ZapLoadingLogo
               message={
                  lastDispatch === GET_ORACLES_ERROR
                     ? "Please check your Ethereum connection"
                     : "Retrieving Information from Blockchain"
               }
            />
         </Container>
      </Page>
   );
}

ExpandedOracleMarketView.propTypes = {
   className: PropTypes.string,
   tokenMarket: PropTypes.bool,
};

ExpandedOracleMarketView.defaultProps = {
   className: "",
   tokenMarket: false,
};

export default ExpandedOracleMarketView;
