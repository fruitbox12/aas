import React from "react";
import Page from "src/components/Page";
import { Box, Container, Paper, makeStyles } from "@material-ui/core";
import Header from "./header";
import OracleMarketTable from "../../components/oraclemarkettable";
import PerformanceCards from "src/components/performancecards";
import { getOracles } from "src/actions/oracleactions";
import { useDispatch, useSelector } from "react-redux";
//import TrendingOracles from "src/components/trendingoracles/index";
import ZapLoadingLogo from "src/components/ZapLoadingLogo";

// Component Styles
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

//Component Itself
function OracleMarketView() {
  const classes = useStyles();

  // Initiating dispatch()
  const dispatch = useDispatch();

  // Global access to each Oracle endpoint object in the Redux store
  const allOracles = useSelector((state) => state.oracles.oracles);

  getOracles()
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

  console.log(Object.keys(allOracles).length);

  return Object.keys(allOracles).length !== 0 ? (
    <Page className={classes.root} title="New Oracle EndPoint Wizard">
      <Container maxWidth={false}>
        {/* <TrendingOracles allOracles={allOracles} /> */}
        <Header />
        <PerformanceCards />
        <Box mt={3}>
          <Paper>
            <div
              class="js_widget"
              data-oracleAddress="0x2416002D127175BC2d627FAefdaA4186c7c49833"
              data-endpointName="0x7133340000000000000000000000000000000000000000000000000000000000"
            ></div>
            <OracleMarketTable
              // Passes the oracleProps array to the oracleData prop
              allOracles={allOracles}
            />
          </Paper>
        </Box>
      </Container>
    </Page>
  ) : (
    <Page className={classes.root} title="Oracle Martketplace">
      <Container maxWidth={false}>
        <Header />
        <ZapLoadingLogo message="Retrieving Oracles from Blockchain" />
      </Container>
    </Page>
  );
}

export default OracleMarketView;
