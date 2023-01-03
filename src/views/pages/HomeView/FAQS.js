import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Box,
   Container,
   Divider,
   Typography,
   makeStyles,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { FAQS_TEXT } from "../../../constants/faqs";
import PropTypes from "prop-types";
import React from "react";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: theme.palette.background.dark,
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      "& dt": {
         marginTop: theme.spacing(2),
      },
   },
   bullet: {
      width: "100%",
   },
   details: {
     display: "table"
   }
}));

function FAQS({ className, ...rest }) {
   const classes = useStyles();

   return (
      <div className={clsx(classes.root, className)} {...rest}>
         <Container maxWidth="lg">
            <Typography id = "FQA" variant="h1" color="textPrimary">
               Frequently Asked Questions
            </Typography>
            <Box my={3}>
               <Divider />
            </Box>
            {FAQS_TEXT.map((entry, key) => (
               <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} id={key}>
                     <Typography variant={"body1"}>{entry.q}</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.details}>
                     {entry.a.map((bullet, k) => (
                        <Typography
                           className={classes.bullet}
                           display={"block"}
                           key={k}
                           paragraph
                           variant={"body2"}>
                           {bullet} 
                        </Typography>
                     ))}
                     {entry.extra}
                  </AccordionDetails>
               </Accordion>
            ))}
         </Container>
      </div>
   );
}

FAQS.propTypes = {
   className: PropTypes.string,
};

export default FAQS;
