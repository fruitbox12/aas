import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
   makeStyles,
   Accordion,
   AccordionSummary,
   AccordionDetails,
   Link,
   Typography,
} from "@material-ui/core";
import LaunchIcon from "@material-ui/icons/Launch";
import OracleMarketTable from "src/components/oraclemarkettable";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
   root: {},
   card: {
      margin: "auto",
   },
   curve: {
      maxHeight: 100,
   },
   vSpace: {
      marginTop: theme.spacing(1.5),
   },
   title: {
      width: "45%",
   },
}));

const OracleEndptListCard = ({
   className,
   oracleName,
   oracleAddress,
   oracleData,
}) => {
   const classes = useStyles();

   const shorterAddress =
      oracleAddress.substring(0, 6) +
      "..." +
      oracleAddress.substring(oracleAddress.length - 4);

   return (
      <Accordion className={clsx(className, classes.card)} defaultExpanded>
         <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
               <Link
                  href={"https://etherscan.io/address/" + oracleAddress}
                  color={"inherit"}>
                  {oracleName} at {shorterAddress}{" "}
                  <LaunchIcon fontSize={"inherit"} />
               </Link>
            </Typography>
         </AccordionSummary>
         <AccordionDetails>
            <OracleMarketTable className={""} allOracles={oracleData} noDrop />
         </AccordionDetails>
      </Accordion>
   );
};

OracleEndptListCard.propTypes = {
   className: PropTypes.string,
   oracleName: PropTypes.string,
   oracleAddress: PropTypes.string,
   oracleData: PropTypes.array,
};

export default OracleEndptListCard;
