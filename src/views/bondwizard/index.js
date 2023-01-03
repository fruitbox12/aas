import React from "react";
// import clsx from "clsx";
import Page from "src/components/Page";
import {
   Container,
   makeStyles,
   Grid,
   Accordion,
   Card,
   CardContent,
   Typography,
   AccordionDetails,
   AccordionSummary,
   Box,
} from "@material-ui/core";
import Header from "./header";
import BondWizard from "src/components/bondwizard.js";
import { useSelector } from "react-redux";
import useIpfsFile from "src/api/getipfsfile.js";
import CodeViewer from "src/components/codeviewer";
import MarkdownViewer from "src/components/markdownviewer";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// Component Styles
const useStyles = makeStyles((theme) => ({
   root: {
      minHeight: "100%",
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
   },
   vSpace: {
      marginTop: theme.spacing(5),
   },
   card: {
      marginTop: theme.spacing(2.5),
      maxWidth: 575,
      width: "90%",
   },
   end: {
      marginBottom: theme.spacing(2.5),
   },
}));

//Component Itself
function BondWizardPageView(props) {
   const classes = useStyles();

   const oracles = useSelector((state) => state.oracles.oracles);
   const endpoint = oracles[decodeURIComponent(props.match.params.endpt)];

   const mdFile = useIpfsFile(endpoint.markdownLink);
   const jsonSchema = useIpfsFile(endpoint.jsonSchema);

   const toShow = [
      { header: "Description", toShow: <MarkdownViewer file={mdFile.file} /> },
      { header: "JSON Schema", toShow: <CodeViewer code={jsonSchema.file} /> },
   ];

   const left = 12,
      right = 12;

   return (
      <Page className={classes.root} title={endpoint.endpointName}>
         <Container maxWidth={false}>
            {/* <Header endptName={endpoint.endpointName} /> */}
            <Grid
               container
               direction="row"
               justify="space-evenly"
               alignItems="flex-start">
               <Grid item xs={12}>
                  <BondWizard
                     className={classes.vSpace}
                     {...endpoint}
                  />
               </Grid>
               {endpoint.isToken ? null : (
                  <Grid
                     container
                     direction="row"
                     justify="center"
                     alignItems="center">
                     {toShow.map((item, key) => {
                        return (
                           <>
                              <Grid
                                 className={
                                    key === toShow.length - 1 ? classes.end : ""
                                 }
                                 container
                                 justify="flex-end"
                                 md={left}
                                 xs={12}>
                                 <Card className={classes.card} key={key}>
                                    <CardContent>
                                       <Accordion
                                          defaultExpanded={!key}
                                          elevation={0}>
                                          <AccordionSummary
                                             expandIcon={<ExpandMoreIcon />}
                                             aria-controls={
                                                item.header + " panel"
                                             }
                                             id={item.header + " header"}>
                                             <Typography varian={"h3"}>
                                                {item.header}
                                             </Typography>
                                          </AccordionSummary>
                                          <AccordionDetails>
                                             {item.toShow}
                                          </AccordionDetails>
                                       </Accordion>
                                    </CardContent>
                                 </Card>
                              </Grid>
                              <Grid
                                 container
                                 justify="flex-start"
                                 md={right}
                                 xs={12}>
                                 <Box flexGrow={1} />
                              </Grid>
                           </>
                        );
                     })}
                  </Grid>
               )}
            </Grid>
         </Container>
      </Page>
   );
}
export default BondWizardPageView;
