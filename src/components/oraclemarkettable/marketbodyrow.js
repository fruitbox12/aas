import React from "react";
import {
   makeStyles,
   TableCell,
   TableRow,
   IconButton,
   Box,
   Collapse,
   Typography,
   Grid,
   Link,
   Hidden,
   Button,
} from "@material-ui/core";
import { BondIcon } from "src/components/icons/bondicon";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { ProviderCurve } from "src/components/providercurve/ProviderCurve";
import LaunchIcon from "@material-ui/icons/Launch";
import PropTypes from "prop-types";
import { NavLink as RouterLink } from "react-router-dom";

// Component Styles
const useStyles = makeStyles((theme) => ({
   root: {},
   cell: {
      padding: 5,
   },
   outerContainer: {
      padding: "30px 0px",
   },
}));

const MarketBodyRow = ({
   className,
   name,
   bound,
   price,
   issued,
   limit,
   markdownLink,
   jsonLink,
   coefficientArr,
   address,
   oracleTitle,
   oracleAddress,
   symbol,
   page,
   srch,
   noDrop,
}) => {
   const classes = useStyles();
   const [open, setOpen] = React.useState(false);

   // Params for curve thumbnail
   const thumbnailParams = {
      existingCoefficientArray: coefficientArr,
      editable: false,
      bondedDots: bound,
      bonded: true,
      tokenSymbol: symbol,
      bonding: false,
      parentWidth: 400,
      parentHeight: 400,
      axesOptions: { xAxisTicks: 5, yAxisTicks: 5, showLabels: true },
      zoomFit: 1,
   };
   function abbreviateAddress(address = "", lengthStart = 6, lengthEnd = 4) {
      return `${address.substring(0, lengthStart)}...${address.substring(
         address.length - lengthEnd,
         address.length
      )}`;
   }
   React.useEffect(() => {
      setOpen(false);
   }, [page, srch]);

   window.onbeforeunload = (e) => {
      setOpen(false);
   };
   let abbreviatedPrice = Number(Number(price).toFixed(4));
   if (abbreviatedPrice <= 0.0001) abbreviatedPrice = 0.0001;

   return (
      <>
         <TableRow className={className} hover tabIndex={-1} key={name}>
            {!noDrop && (
               <TableCell>
                  <IconButton
                     aria-label="expand row"
                     size="small"
                     onClick={() => setOpen(!open)}>
                     {open ? (
                        <KeyboardArrowUpIcon />
                     ) : (
                        <KeyboardArrowDownIcon />
                     )}
                  </IconButton>
               </TableCell>
            )}
            <TableCell align="left" id={name}>
               {name}
            </TableCell>
            <TableCell align="left">{oracleTitle}</TableCell>
            <TableCell align="left">
               {abbreviateAddress(oracleAddress)}
            </TableCell>
            <TableCell align="center">{bound}</TableCell>
            <TableCell align="center">{abbreviatedPrice}</TableCell>
            <TableCell align="center">{issued}</TableCell>
            <TableCell align="center">
               {coefficientArr[coefficientArr.length - 1]}
            </TableCell>
            {noDrop && (
               <TableCell>
                  <Hidden smDown>
                     <Button
                        color={"primary"}
                        component={RouterLink}
                        fullWidth
                        variant={"outlined"}
                        startIcon={<BondIcon />}
                        to={
                           "/app/bondwizard/" +
                           address +
                           encodeURIComponent(name)
                        }>
                        Bond
                     </Button>
                  </Hidden>
               </TableCell>
            )}
         </TableRow>
         {!noDrop && (
            <TableRow>
               <TableCell
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                  colSpan={8}>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                     <Box margin={1}>
                        <Grid
                           container
                           xs={12}
                           className={classes.outerContainer}>
                           <Grid
                              className={classes.curve}
                              container
                              direction={"column"}
                              md={7}
                              xs={12}>
                              <ProviderCurve
                                 className={classes.vSpace}
                                 {...thumbnailParams}
                              />
                           </Grid>
                           <Grid container direction={"column"} md={5} xs={12}>
                              <Typography className={classes.vSpace}>
                                 <Link
                                    target={"_blank"}
                                    rel={"noopener noreferrer"}
                                    href={markdownLink}
                                    color={"inherit"}>
                                    markdown file{" "}
                                    <LaunchIcon fontSize={"inherit"} />
                                 </Link>
                              </Typography>
                              <Typography className={classes.vSpace}>
                                 <Link
                                    target={"_blank"}
                                    rel={"noopener noreferrer"}
                                    href={jsonLink}
                                    color="inherit">
                                    JSON schema{" "}
                                    <LaunchIcon fontSize={"inherit"} />
                                 </Link>
                              </Typography>
                              <Hidden mdDown>
                                 <Button
                                    className={classes.vSpace}
                                    color={"primary"}
                                    component={RouterLink}
                                    fullWidth
                                    variant={"outlined"}
                                    startIcon={<BondIcon />}
                                    to={
                                       "/app/bondwizard/" +
                                       address +
                                       encodeURIComponent(name)
                                    }>
                                    Bond to Oracle
                                 </Button>
                              </Hidden>
                           </Grid>
                        </Grid>
                     </Box>
                  </Collapse>
               </TableCell>
            </TableRow>
         )}
      </>
   );
};

MarketBodyRow.propTypes = {
   className: PropTypes.string,
   name: PropTypes.string,
   bound: PropTypes.number,
   price: PropTypes.number,
   issued: PropTypes.number,
   limit: PropTypes.number,
   markdownLink: PropTypes.string,
   jsonLink: PropTypes.string,
   coefficientArr: PropTypes.array,
   address: PropTypes.string,
   oracleTitle: PropTypes.string,
   oracleAddress: PropTypes.string,
   noDrop: PropTypes.bool,
};

MarketBodyRow.defaultProps = {
   className: "",
   name: "",
   bound: 0,
   price: 0,
   issued: 0,
   limit: 0,
   markdownLink: "",
   jsonLink: "",
   coefficientArr: [],
   address: "",
   oracleTitle: "",
   oracleAddress: "",
   noDrop: false,
};

export default MarketBodyRow;
