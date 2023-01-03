import { Container, Grid, makeStyles } from "@material-ui/core";

import Header from "./Header";
import NewProjects from "./NewProjects";
import Page from "src/components/Page";
import PerformanceOverTime from "./PerformanceOverTime";
import React from "react";
import TodaysMoney from "./TodaysMoney";

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: theme.palette.background.dark,
      minHeight: "100%",
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
   },
   container: {
      [theme.breakpoints.up("lg")]: {
         paddingLeft: 64,
         paddingRight: 64,
      },
   },
}));

function DashboardView() {
   const classes = useStyles();

   return (
      <Page className={classes.root} title="Dashboard">
         <Container maxWidth={false} className={classes.container}>
            <Header />
            <Grid container spacing={3}>
               <Grid item lg={4} sm={6} xs={12}>
                  <TodaysMoney />
               </Grid>
               <Grid item lg={4} sm={6} xs={12}>
                  <NewProjects />
               </Grid>
               <Grid item lg={4} sm={6} xs={12}>
                  {/* <SystemHealth />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
          > */}
                  <NewProjects />
               </Grid>
               <Grid item lg={3} sm={6} xs={12}>
                  {/* <RoiPerCustomer /> */}
               </Grid>
               {/* <Grid
            item
            lg={3}
            xs={12}
          >
            <RealTime />
          </Grid> */}
               <Grid item lg={12} xs={12}>
                  <PerformanceOverTime />
               </Grid>
               {/* <Grid
            item
            lg={5}
            xl={4}
            xs={12}
          >
            <TeamTasks />
          </Grid>
          <Grid
            item
            lg={7}
            xl={8}
            xs={12}
          >
            <LatestProjects />
          </Grid> */}
            </Grid>
         </Container>
      </Page>
   );
}

export default DashboardView;
