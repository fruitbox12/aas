import React, { useState, Suspense, lazy } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Page from "src/components/Page";
import {
   Container,
   makeStyles,
   Grid,
   Card,
   CardHeader,
   CardContent,
   Typography,
   AppBar,
   Tabs,
   Tab,
   Box,
   Button,
} from "@material-ui/core";
import Header from "./header";
import {ProviderCurve} from "src/components/providercurve/ProviderCurve.js";
import { BondIcon } from "src/components/icons/bondicon";
import MarkdownViewer from "src/components/markdownviewer.js";
import CodeViewer from "src/components/codeviewer.js";

// Component Styles
const useStyles = makeStyles((theme) => ({
   root: {},
   card: {
      margin: "auto",
      width: "90%",
      marginTop: 10,
   },
   cardTitle: {
      margin: "auto",
      backgroundColor: theme.palette.secondary.main,
      color: "#000000",
   },
   priceTitle: {
      backgroundColor: theme.palette.primary.main,
      color: "#FFFFFF",
   },
   titleText: {
      fontWeight: "bold",
   },
   vSpace: {
      marginTop: 20,
   },
}));

//Component Itself
function EndpointPageView() {
   const classes = useStyles();
   const [openTab, setOpenTab] = React.useState(0);

   const handleChange = (event, newValue) => {
      setOpenTab(newValue);
   };

   const cardTitleProps = {
      className: classes.cardTitle,
      titleTypographyProps: {
         align: "center",
      },
   };

   return (
      <Page className={classes.root} title="New Oracle EndPoint Wizard">
         <Container maxWidth={false}>
            <Header endptName={"Oraculum Pecinuae"} />
            <Grid
               container
               direction="row"
               justify="space-evenly"
               alignItems="center">
               {/* Grid containing the curve */}
               <Grid item xs={12} md={6}>
                  <ProviderCurve editable={false} />
               </Grid>
               {/* Grid containing the cards and bond button */}
               <Grid item xs={12} md={6}>
                  <Grid
                     container
                     direction="row"
                     justify="space-evenly"
                     alignItems="stretch">
                     <Grid item lg={12} md={6} xs={12}>
                        <Card
                           className={clsx(classes.cardsTitle, classes.card)}
                           raised>
                           <CardHeader
                              {...cardTitleProps}
                              className={classes.priceTitle}
                              classes={{ title: classes.titleText }}
                              title={"Current Zap / Dot"}
                           />
                           <CardContent>
                              <Typography align={"center"}>123 Zap</Typography>
                           </CardContent>
                        </Card>
                     </Grid>

                     <Grid
                        className={classes.padding}
                        item
                        xs={12}
                        md={6}
                        lg={4}>
                        <Card className={classes.card}>
                           <CardHeader
                              {...cardTitleProps}
                              title={"Dots Issued"}
                           />
                           <CardContent>
                              <Typography align={"center"}>123 Dots</Typography>
                           </CardContent>
                        </Card>
                     </Grid>
                     <Grid
                        className={classes.padding}
                        item
                        xs={12}
                        md={6}
                        lg={4}>
                        <Card className={classes.card}>
                           <CardHeader
                              {...cardTitleProps}
                              title={"Dots Bonded"}
                           />
                           <CardContent>
                              <Typography align={"center"}>123 Dots</Typography>
                           </CardContent>
                        </Card>
                     </Grid>
                     <Grid
                        className={classes.padding}
                        item
                        xs={12}
                        md={6}
                        lg={4}>
                        <Card className={classes.card}>
                           <CardHeader
                              {...cardTitleProps}
                              title={"Dot Limit"}
                           />
                           <CardContent>
                              <Typography align={"center"}>123 Dots</Typography>
                           </CardContent>
                        </Card>
                     </Grid>
                  </Grid>
                  <Button
                     className={classes.vSpace}
                     color={"primary"}
                     fullWidth
                     variant={"outlined"}
                     startIcon={<BondIcon />}>
                     Bond to Oracle
                  </Button>
               </Grid>
            </Grid>
            {/* Markdown and JSON Schema tabs */}
            <Card className={classes.vSpace}>
               <AppBar color={"transparent"} position="static">
                  <Tabs
                     value={openTab}
                     onChange={handleChange}
                     aria-label="Endpoint Details">
                     <Tab label="Markdown" />
                     <Tab label="JSON Schema" />
                  </Tabs>
               </AppBar>
               <Box p={3}>
                  <Box hidden={openTab != 0} index={0}>
                     <MarkdownViewer />
                  </Box>
                  <Box hidden={openTab != 1} index={1}>
                     <CodeViewer />
                  </Box>
               </Box>
            </Card>
         </Container>
      </Page>
   );
}

export default EndpointPageView;
