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
import { useSelector } from "react-redux";
import EndpointCard from "src/components/endpointcard.js";
import OracleMarketTable from "src/components/oraclemarkettable";
import { useContracts } from "src/hooks/contractHooks";
import use24HrBlock from "src/api/getblockhash";
import {
   getCombinedVolume,
   getRecentBonds,
} from "src/contractcalls/getbondageevents.js";
import useZapPrices from "src/api/zapconversions";
import Pagination from "@material-ui/lab/Pagination";
import ProviderDetailsCard from "src/components/providerdetailscard.js";
import PerformanceCards from "src/components/performancecards";

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
   },
   text: {
      color: theme.palette.text.primary,
   },
   box: {
      marginTop: theme.spacing(3),
   },
   vSpace: {
      marginTop: theme.spacing(3),
   },
}));

//Component Itself
function ProviderProfile({ className, match }) {
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

   const providerAddress = match.params.address;

   if (!blockHash.error && !blockHash.loading && blockHash.hash !== 0) {
      getCombinedVolume(contracts.bondage, contracts.zapToken, 0).then(
         (resp) => {
            setVolume(resp);
         }
      );
   }

   // ******** Start of Oracle procesing ********

   // Gets the stored Oracles
   const allOracles = useSelector((state) => state.oracles.oracles);
   // Convert to an array
   var asArray = Object.values(allOracles);

   console.log("Processing " + asArray.length);

   asArray = asArray.filter(
      (oracle) => oracle.oracleAddress === providerAddress
   );

   // Filter oracles the user is bonded to
   if (myOracles) {
      asArray = asArray.filter((oracle) => oracle.userDots > 0.0);
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

   return (
      <Page className={classes.root} title={"Provider Profile"}>
         <Container maxWidth={false}>
            <Header
               providerName={asArray[0] ? asArray[0].oracleTitle : "loading..."}
            />
            <PerformanceCards />
            <ProviderDetailsCard
               className={classes.vSpace}
               providerAddress={providerAddress}
               providerName={asArray[0] ? asArray[0].oracleTitle : "loading..."}
               numEndpts={asArray.length}
            />
            <Box className={classes.box}>
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
                         {/* Filter by My Tokens and Oracles */}
                         Bonded
                        </Typography>
                     }
                  />
                  <TextField
                     // fullWidth
                     label={"Search"}
                     onChange={handleSearch}
                     variant={"outlined"}
                  />
               </Grid>
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
                                    symbol={endpt.symbol}
                                    oracleAddress={endpt.oracleAddress}
                                 />
                              </Grid>
                           );
                        })}
                  {listView && (
                     <OracleMarketTable
                        allOracles={Object.assign({}, asArray)}
                        noDrop
                     />
                  )}
                  {!listView && (
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
               </Grid>
            </Box>
         </Container>
      </Page>
   );
}

ProviderProfile.propTypes = {
   className: PropTypes.string,
   tokenMarket: PropTypes.bool,
};

ProviderProfile.defaultProps = {
   className: "",
   tokenMarket: false,
};

export default ProviderProfile;
