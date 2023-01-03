import React, { useState } from "react";
import {
   FormControlLabel,
   Paper,
   Switch,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TablePagination,
   TableRow,
   makeStyles,
   Toolbar,
   InputAdornment,
} from "@material-ui/core";
import MarketBodyRow from "./marketbodyrow";
import MarketHeaderCell from "./marketheadercell";
import PropTypes from "prop-types";
import clsx from "clsx";
import Controls from "src/components/controls/Controls";
import { Search } from "@material-ui/icons";
// import { prepNumToStr } from "src/utils/providerCurveUtil.js";

// Component Styles
const useStyles = makeStyles((theme) => ({
   root: {
      width: "100%",
   },
   paper: {
      width: "100%",
      [theme.breakpoints.down("sm")]: {
         width: "90vw",
      },
      marginBottom: theme.spacing(2),
   },
   table: {
      minWidth: 750,
   },
   switch: {
      marginLeft: 20,
      paddingBottom: 15,
   },
   searchInput: {
      width: "50%",
      margin: "10px",
   },
   toolbar: {
      justifyContent: "flex-end",
      [theme.breakpoints.down("sm")]: {
         display: "flex-end",
         flexDirection: "column",
      },
   },
}));

function descendingComparator(a, b, orderBy) {
   if (b[orderBy] < a[orderBy]) {
      return -1;
   }
   if (b[orderBy] > a[orderBy]) {
      return 1;
   }
   return 0;
}

function getComparator(order, orderBy) {
   return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
}

// Sorting algoirthm used by MUI
function stableSort(array, comparator) {
   const stabilizedThis = array.map((el, index) => [el, index]);
   stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
   });
   return stabilizedThis.map((el) => el[0]);
}

const OracleMarketTable = ({ className, allOracles, noDrop, tokenMarket }) => {
   const classes = useStyles();
   const oracleData = Object.values(allOracles);
   const [order, setOrder] = useState("asc");
   const [orderBy, setOrderBy] = useState("name");
   const [page, setPage] = useState(0);
   const [dense, setDense] = useState(false);
   const [rowsPerPage, setRowsPerPage] = useState(5);
   const [showAll, setShowAll] = useState(false);
   // const [open, setOpen] = useState(false);
   const [searchFilterFn, setSearchFilterFn] = useState({
      fn: (items) => {
         return items;
      },
   });

   // Header Cells
   const headCells = [
      {
         id: "endpointName",
         numeric: false,
         label: tokenMarket ? "Token" : "Endpoint",
      },
      { id: "oracleTitle", numeric: false, label: "Provider Title" },
      {
         id: tokenMarket ? "tokenAdd" : "oracleAddress",
         numeric: false,
         label: tokenMarket ? "Token Address" : "Oracle Address",
      },
      {
         id: tokenMarket ? "tknBal" : "userDots",
         numeric: true,
         label: "Balance",
      },
      { id: "pricePerDot", numeric: true, label: "Current Price (Zap)" },
      { id: "dotsIssued", numeric: true, label: "Issued" },
      { id: "dotLimit", numeric: true, label: "Market Cap" },
   ];

   // Determines sort order based on chosen category
   const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(property);
   };

   // Determines sort category
   const createSortHandler = (property) => (event) => {
      handleRequestSort(event, property);
   };

   // Changes which rows / page is shown
   const handleChangePage = (event, newPage) => {
      setPage(newPage);
   };

   // Changes the number of rows per page
   const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
   };

   // Options for rows per page in the drop down
   const perPage = [5, 10, 25];

   // Handling search in searchBar by filtering
   const handleSearch = (e) => {
      setPage(0);
      let target = e.target;
      setSearchFilterFn({
         fn: (items) => {
            return Object.values(items).filter((o) => {
               if (
                  target.value &&
                  !o.oracleTitle
                     .toLowerCase()
                     .includes(target.value.toLowerCase()) &&
                  !o.oracleAddress
                     .toLowerCase()
                     .includes(target.value.toLowerCase()) &&
                  !o.endpointName
                     .toLowerCase()
                     .includes(target.value.toLowerCase())
               ) {
                  return false;
               }
               return true;
            });
         },
      });
   };

   // Allows the user to view all rows if selected
   const handleShowAll = (event) => {
      if (!showAll) {
         setRowsPerPage(oracleData.length);
      } else {
         setRowsPerPage(perPage[0]);
      }
      setShowAll(!showAll);
   };

   // Change table padding using the switch
   const handleChangeDense = (event) => {
      setDense(event.target.checked);
   };

   // For when the table does not compress when there aren't enough rows
   const emptyRows =
      rowsPerPage -
      Math.min(rowsPerPage, oracleData.length - page * rowsPerPage);

   return (
      <div className={clsx(classes.root, className)}>
         <Paper className={classes.paper}>
            <TableContainer>
               <Table
                  className={classes.table}
                  aria-labelledby="tableTitle"
                  size={dense ? "small" : "medium"}
                  aria-label="enhanced table">
                  <TableHead>
                     <TableRow>
                        <TableCell variant={"body"} colSpan={2}>
                           <FormControlLabel
                              control={
                                 <Switch
                                    checked={showAll}
                                    color={"secondary"}
                                    onChange={handleShowAll}
                                 />
                              }
                              label={
                                 tokenMarket
                                    ? "Show All Tokens"
                                    : "Show All Oracles"
                              }
                           />
                        </TableCell>
                        <TableCell variant={"body"} colSpan={6}>
                           {!noDrop && (
                              <Toolbar className={classes.toolbar}>
                                 <Controls.Input
                                    label="Search Oracles"
                                    className={classes.searchInput}
                                    InputProps={{
                                       startAdornment: (
                                          <InputAdornment position="start">
                                             <Search
                                                className={classes.search}
                                             />
                                          </InputAdornment>
                                       ),
                                    }}
                                    onChange={handleSearch}
                                 />
                              </Toolbar>
                           )}
                        </TableCell>
                     </TableRow>
                     <TableRow>
                        {!noDrop && <TableCell />}
                        {headCells.map((headCell) => (
                           <MarketHeaderCell
                              createSortHandler={createSortHandler}
                              disablePadding={false}
                              id={headCell.id}
                              label={headCell.label}
                              numeric={headCell.numeric}
                              order={order}
                              orderBy={orderBy}
                           />
                        ))}
                        {noDrop && <TableCell />}
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {stableSort(
                        searchFilterFn.fn(oracleData),
                        getComparator(order, orderBy)
                     )
                        .slice(
                           page * rowsPerPage,
                           page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => {
                           //  let priceConverted = prepNum(
                           //     row.pricePerDot * Math.pow(10, -18),
                           //     2
                           //  );
                           let priceConverted =
                              row.pricePerDot * Math.pow(10, -18);

                           return (
                              <MarketBodyRow
                                 key={row.oracleAddress + row.endpointName}
                                 name={row.endpointName}
                                 bound={row.dotsBounded}
                                 price={priceConverted}
                                 issued={row.dotsIssued}
                                 limit={row.dotLimit}
                                 markdownLink={row.markdownLink}
                                 jsonLink={row.jsonSchema}
                                 coefficientArr={row.coeffecientArr}
                                 address={row.oracleAddress}
                                 oracleTitle={row.oracleTitle}
                                 oracleAddress={row.oracleAddress}
                                 symbol={row.symbol}
                                 page={page}
                                 srch={searchFilterFn}
                                 noDrop={noDrop}
                              />
                           );
                        })}
                     {!noDrop && emptyRows > 0 && (
                        <TableRow
                           style={{ height: (dense ? 33 : 53) * emptyRows }}>
                           <TableCell colSpan={8} />
                        </TableRow>
                     )}
                  </TableBody>
               </Table>
            </TableContainer>
            <TablePagination
               rowsPerPageOptions={perPage}
               component="div"
               count={searchFilterFn.fn(oracleData).length}
               rowsPerPage={rowsPerPage}
               page={page}
               onChangePage={handleChangePage}
               onChangeRowsPerPage={handleChangeRowsPerPage}
            />
         </Paper>
         {/* <FormControlLabel
            className={classes.switch}
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label="Compact Mode"
         /> */}
      </div>
   );
};

OracleMarketTable.propTypes = {
   className: PropTypes.string,
   allOracles: PropTypes.object,
   noDrop: PropTypes.bool,
};

OracleMarketTable.defaultProps = {
   className: "",
   allOracles: {},
   noDrop: false,
};

export default OracleMarketTable;
