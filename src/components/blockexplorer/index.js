import React, { useState, useEffect } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
   makeStyles,
   TablePagination,
   Box,
   Button,
   ButtonGroup,
   Collapse,
   IconButton,
   Link,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Typography,
   Paper,
   Toolbar,
   InputAdornment
} from "@material-ui/core";
import BlockExplorerHeaderCell from "./blockexplorerheadercell";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Controls from "src/components/controls/Controls";
import { Search } from "@material-ui/icons";
import timeSince from "src/utils/dateUtil.js";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
// import { prepNumToStr } from "src/utils/providerCurveUtil.js";

import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "src/actions/transactionActions";

import { bondageAbi } from "src/contracts/bondagecontract.js";

const useRowStyles = makeStyles((theme) => ({
   root: {
      "& > *": {
         borderBottom: "unset",
      },
   },
   paper: {
      // width: window.screen.width > 650 ? "100%" : "100vw",
      width: "100%",
      [theme.breakpoints.down("sm")]: {
         width:"100vw"
      },
      marginBottom: theme.spacing(2),
   },
   toolbar: {
      [theme.breakpoints.down("sm")]: {
         display: "flex",
         flexDirection: "column",
         paddingTop:"10px",
         paddingBottom:"10px"
      },
   },
   table: {
      minWidth: 750,
   },
   tableDrawer: {
      //  borderBottom: '1px solid rgb(255 255 255 / 0%)',
      border: "1px solid rgba(224, 224, 224, 1)",
   },
   topCell: {
      borderBottom: "none",
      padding: "10px",
   },
   searchInput: {
      width: "75%",
      margin: "10px",
   },
   buttonActive: {
      backgroundColor: theme.palette.primary.main,
      color: "white",
   },

   buttonRest: {
      backgroundColor: "#6cd2ff",
      color: "white",
   },
   copy: {
      display: "flex",
      color: "#37a1fe",
      width: "fit-content",
      cursor: "pointer",
   },
   fileCopy: {
      paddingLeft: "3px",
      fontSize: "0.8rem",
   },
   filterControls: {
      margin: `15px`,
   },
   zapLogo: {
      height: "1.3em",
      position: "relative",
      top: "4px",
      left: "3px",
   },
   tokenTransfer: {
      display: "flex",
   },
   arrowLogo: {
      padding: "0,5,0,5",
   },
}));

const headCells = [
   { id: "txHash", numeric: true, label: "Txn Hash" },
   { id: "status", numeric: false, label: "Status" },
   { id: "bNumber", numeric: true, label: "Block" },
   { id: "timestamp", numeric: true, label: "Timestamp" },
   { id: "txAction", numeric: false, label: "Transaction Action" },
];

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

// Sorting algorithm - now handles object and converts into array for sorting
function stableSort(object, cmp) {
   const stabilizedThis = [];
   for (let index in object) {
      stabilizedThis.push([object[index], index]);
   }
   // const stabilizedThis = array.map((el, index) => [el, index]);
   // console.log(stabilizedThis);
   const stableCmp = (a, b) => {
      let order = cmp(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
   };
   stabilizedThis.sort(stableCmp);
   return stabilizedThis.map((el) => el[0]);
}

function timeElapsed(dateTime) {
   return timeSince(Date.parse(dateTime));
}

function abbreviateAddress(address = "", lengthStart = 6, lengthEnd = 4) {
   return `${address.substring(0, lengthStart)}...${address.substring(
      address.length - lengthEnd,
      address.length
   )}`;
}

function Row(props) {
   const { row } = props;
   const classes = useRowStyles();
   const [open, setOpen] = useState(false);

   return (
      <React.Fragment>
         <TableRow className={classes.root}>
            <TableCell>
               <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}>
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
               </IconButton>
            </TableCell>
            <TableCell component="th" scope="row" align="center">
               {/* <Link rel="noopener noreferrer" href={https://etherscan.io/tx/ + row.txHash} target="_blank" color={"inherit"}> */}
               <Link
                  className={clsx(classes.link,classes.copy)}
                  align="right"
                  onClick={() => {
                     navigator.clipboard.writeText(
                        `https://etherscan.io/tx/${row.txHash}`
                     );
                  }}
                  color={"inherit"}>
                  <Typography>{abbreviateAddress(row.txHash)}</Typography>
                  <FileCopyIcon className={classes.fileCopy} />
               </Link>
            </TableCell>
            <TableCell align="center">
               <Typography>{row.status}</Typography>
            </TableCell>
            <TableCell align="center">
               <Link
                  className={clsx(classes.link,classes.copy)}
                  align="right"
                  onClick={() => {
                     navigator.clipboard.writeText(
                        `https://etherscan.io/block/${row.bNumber}`
                     );
                  }}
             color={"inherit"}
             
                  >
                  <Typography>{row.bNumber}</Typography>
                  <FileCopyIcon className={classes.fileCopy} />
               </Link>
            </TableCell>
            <TableCell align="center">
               <Typography>{timeElapsed(row.timestamp)}</Typography>
            </TableCell>
            <TableCell align="center">
               <Typography>{row.txAction}</Typography>
            </TableCell>
         </TableRow>
         <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
               <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box margin={1}>
                     <Table size="medium" aria-label="details">
                        {/* {row.map((detailsRow,i) => ( */}
                        <TableBody className={classes.tableDrawer}>
                           <TableRow>
                              <TableCell
                                 className={classes.topCell}
                                 align="right"
                                 component="th"
                                 scope="row">
                                 <Typography>From: </Typography>
                              </TableCell>
                              <TableCell
                                 className={classes.topCell}
                                 align="center">
                                 <Link
                                    className={clsx(classes.link,classes.copy)}
                                    align="center"
                                    onClick={() => {
                                       navigator.clipboard.writeText(
                                          `https://etherscan.io/tx/${row.txHash}`
                                       );
                                    }}
                                    color={"inherit"}
                                     >
                                    <Typography>{abbreviateAddress(row.from)}</Typography>
                                    <FileCopyIcon
                                       className={classes.fileCopy}
                                    />
                                 </Link>
                              </TableCell>
                              <TableCell
                                 className={classes.topCell}
                                 align="right">
                                 <Typography>To: </Typography>
                              </TableCell>
                              <TableCell
                                 className={classes.topCell}
                                 align="left">
                                 <Link
                                    className={clsx(classes.link,classes.copy)}
                                    align="right"
                                    onClick={() => {
                                       navigator.clipboard.writeText(
                                          `https://etherscan.io/tx/${row.txHash}`
                                       );
                                    }}
                                    color={"inherit"}
                                     >
                                      <Typography>{abbreviateAddress(row.to) ||
                                       abbreviateAddress(
                                          "0x188f79B0a8EdC10aD53285c47c3fEAa0D2716e83"
                                       )}</Typography>
                                    <FileCopyIcon
                                       className={classes.fileCopy}
                                    />
                                 </Link>
                              </TableCell>
                           </TableRow>
                           <TableRow>
                              <TableCell
                                 className={classes.topCell}
                                 align="right"
                                 component="th"
                                 scope="row">
                                 <Typography>Transaction Fee:</Typography>
                              </TableCell>
                              <TableCell
                                 className={classes.topCell}
                                 align="left">
                                 <Typography>{`${/*prepNum(
                                    row.transactionFee,
                                    8)*/row.transactionFee
                                 } ether`}</Typography>
                              </TableCell>
                              <TableCell
                                 className={classes.topCell}
                                 align="right">
                                 <Typography>Gas Info: </Typography>
                              </TableCell>
                              <TableCell
                                 className={classes.topCell}
                                 align="left">
                                 <Typography>{row.gasInfo}</Typography>
                              </TableCell>
                           </TableRow>
                           <TableRow>
                              <TableCell
                                 align="right"
                                 component="th"
                                 scope="row">
                                 <Typography>Token Transfer: </Typography>
                              </TableCell>
                              <TableCell align="left">
                                 <Typography>{row.tokenTransfer}</Typography>
                              </TableCell>
                              <TableCell align="right"></TableCell>
                              <TableCell align="left"></TableCell>
                           </TableRow>
                        </TableBody>
                        {/* ))} */}
                     </Table>
                  </Box>
               </Collapse>
            </TableCell>
         </TableRow>
      </React.Fragment>
   );
}

Row.propTypes = {
   row: PropTypes.shape({
      status: PropTypes.string.isRequired,
      bNumber: PropTypes.number.isRequired,
      timestamp: PropTypes.string.isRequired,
   }).isRequired,
};

function BlockExplorer({ className }) {
   const classes = useRowStyles();
   const [rowsPerPage, setRowsPerPage] = useState(10);
   const [order, setOrder] = useState("desc");
   const [orderBy, setOrderBy] = useState("time");
   const [page, setPage] = useState(0);

   const [btnAll, setBtnAll] = useState(true);
   const [btnBond, setBtnBond] = useState(false);
   const [btnUnbond, setBtnUnbond] = useState(false);

   const dispatch = useDispatch();
   const blockData = useSelector((state) => state.transactions.transactions);

  //  const inter = new ethers.utils.Interface(bondageAbi);
   Object.values(blockData).forEach((transaction, i) => {
      let decodedInput = null;
      if (
         transaction.dataEncoded &&
         transaction.txHash !==
            "0x90ecc5e98202cfd1e20f824f7de9d3780ae665ee59527db2f199996a0ac6a523"
      ) {
         const inter = new ethers.utils.Interface(bondageAbi);
         decodedInput = inter.parseTransaction({
            data: transaction.dataEncoded,
            value: transaction.value,
         });
      }

      if (decodedInput) {
         let fromAddressZapTransfer =
            decodedInput.name.toLowerCase() === "bond"
               ? transaction.from
               : transaction.to;
         let toAddressZapTransfer =
            decodedInput.name.toLowerCase() === "bond"
               ? transaction.to
               : transaction.from;

         function assembleTokenTransfer(zap, fromAddress, toAddress) {
            let zapStyled = (
               <Typography>
                  {`${zap}`}
                  <img
                     src="/static/Unbonded Zap Logo.png"
                     alt="Zap"
                     className={classes.zapLogo}
                  />
               </Typography>
            );
            let addressesStyled = (
               // (<Typography className={classes.tokenTransfer}>
               <div className={classes.tokenTransfer}>
                  <Link
                     align="right"
                     onClick={() => {
                        navigator.clipboard.writeText(
                           `https://etherscan.io/address/${fromAddress}`
                        );
                     }}
                     color={"inherit"}
                     className={classes.copy}>
                    <Typography>{`${abbreviateAddress(fromAddress)}  `}</Typography>
                     <FileCopyIcon className={classes.fileCopy} />
                  </Link>
                  <ArrowRightIcon className={classes.arrowLogo} />
                  <Link
                     align="right"
                     onClick={() => {
                        navigator.clipboard.writeText(
                           `https://etherscan.io/address/${toAddress}`
                        );
                     }}
                     color={"inherit"}
                     className={classes.copy}>
                    <Typography>`${abbreviateAddress(toAddress)}`</Typography>
                     <FileCopyIcon className={classes.fileCopy} />
                  </Link>
                  {/* </Typography>) */}
               </div>
            );
            return [zapStyled, addressesStyled];
         }

         transaction.tokenTransfer = assembleTokenTransfer(
            transaction.zap,
            fromAddressZapTransfer,
            toAddressZapTransfer
         );

         // transaction.tokenTransfer = `${transaction.zap} ZAP FROM ${abbreviateAddress(fromAddressZapTransfer)} TO ${abbreviateAddress(toAddressZapTransfer)}`;

         let preposition =
            decodedInput.name.toLowerCase() === "bond" ? "to" : "from";
         let verb =
            decodedInput.name.charAt(0).toUpperCase() +
            decodedInput.name.slice(1);
         let dots = decodedInput.args[2]._isBigNumber
            ? Number(decodedInput.args[2])
            : Number(decodedInput.args[3]);
         let plural = dots > 1 ? "s" : "";
         let oracleName = ethers.utils.parseBytes32String(
            decodedInput.args.endpoint
         );
         transaction.txAction = `${verb} ${dots} dot${plural} ${preposition} Oracle ${oracleName}`;
      } else {
         transaction.tokenTransfer = null;
      }
      if (
         transaction.txHash ===
         "0x90ecc5e98202cfd1e20f824f7de9d3780ae665ee59527db2f199996a0ac6a523"
      ) {
         transaction.txAction = "Contract Creation";
      }
   });

   useEffect(() => {
      if (blockData.length === 0) {
         let mounted = true;
         if (mounted) {
            dispatch(getTransactions());
         }
         return () => (mounted = false);
      }
   }, [dispatch, blockData.length]);

   // Search Bar  filter
   const [searchFilterFn, setSearchFilterFn] = useState({
      fn: (items) => {
         return items;
      },
   });

   // Date Picker filter
   const [selectedDate, setSelectedDate] = useState(null);
   const [selectedDateFilterFn, setSelectedDateFilterFn] = useState({
      fn: (items) => {
         return items;
      },
   });

   // Select Button Filter
   const [filterState, setFilterState] = useState("all");
   const [buttonFilterFn, setButtonFilterFn] = useState({
      fn: (items) => {
         return items;
      },
   });

   // Determines sort order based on chosen category
   const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === "desc";
      setOrder(isAsc ? "asc" : "desc");
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
   const perPage = [10, 20, 50];

   // Handling search in searchBar by filtering
   const handleSearch = (e) => {
      let target = e.target;
      setSearchFilterFn({
         fn: (items) => {
            return Object.values(items).filter((o) => {
               if (
                  target.value &&
                  !o.txHash
                     .toLowerCase()
                     .includes(target.value.toLowerCase()) &&
                  !o.bNumber.toString().includes(target.value) &&
                  !o.txAction
                     .toLowerCase()
                     .includes(target.value.toLowerCase()) &&
                  !o.status.toLowerCase().includes(target.value.toLowerCase())
               ) {
                  return false;
               }
               return true;
            });
         },
      });
   };

   // Handling date in calendar by filtering
   const handleDateChange = (e) => {
      let target = e.target;
      target.value
         ? setSelectedDate(
              new Date(target.value.setHours(0, 0, 0)).toLocaleDateString()
           )
         : setSelectedDate(null);
      setSelectedDateFilterFn({
         fn: (items) => {
            return Object.values(items).filter((o) => {
               let targetTime = Date.parse(o.timestamp);
               let selectedTime = Date.parse(target.value);
               if (
                  target.value &&
                  !(
                     targetTime >= selectedTime &&
                     targetTime <= selectedTime + 86400000
                  )
               ) {
                  return false;
               }
               return true;
            });
         },
      });
   };

   // Handling category filtering by button selection
   useEffect(() => {
      if (filterState !== "all") {
         setButtonFilterFn({
            fn: (items) => {
               return Object.values(items).filter(
                  (o) =>
                     o.txAction[0].toLowerCase() ===
                     filterState[0].toLowerCase()
               );
            },
         });
      } else {
         setButtonFilterFn({
            fn: (items) => {
               return items;
            },
         });
      }

      switch (filterState) {
         case "bond":
            setBtnBond(true);
            setBtnAll(false);
            setBtnUnbond(false);
            break;
         case "unbond":
            setBtnBond(false);
            setBtnAll(false);
            setBtnUnbond(true);
            break;
         default:
            setBtnBond(false);
            setBtnAll(true);
            setBtnUnbond(false);
      }
   }, [filterState]);

   const handleButtonSelection = (e) => {
      let target = e.currentTarget;

      if (target.value === filterState) {
         setFilterState("all");
      } else {
         setFilterState(target.value);
      }
   };

   return (
      <MuiPickersUtilsProvider
         utils={DateFnsUtils}
         className={clsx(classes.root, className)}>
         <Paper className={classes.paper}>
            <Toolbar className={classes.toolbar}>
               <ButtonGroup
                  size="small"
                  aria-label="small button group"
                  className={classes.filterControl}>
                  <Button
                     className={
                        btnAll ? classes.buttonActive : classes.buttonRest
                     }
                     value="all"
                     onClick={handleButtonSelection}>
                     <Typography>All</Typography>
                  </Button>
                  <Button
                     className={
                        btnBond ? classes.buttonActive : classes.buttonRest
                     }
                     value="bond"
                     onClick={handleButtonSelection}>
                     <Typography>Bond</Typography>
                  </Button>
                  <Button
                     className={
                        btnUnbond ? classes.buttonActive : classes.buttonRest
                     }
                     value="unbond"
                     onClick={handleButtonSelection}>
                     <Typography>Unbond</Typography>
                  </Button>
               </ButtonGroup>
               <Controls.Input
                  label="Search Transactions"
                  className={classes.searchInput}
                  InputProps={{
                     startAdornment: (
                        <InputAdornment position="start">
                           <Search />
                        </InputAdornment>
                     ),
                  }}
                  onChange={handleSearch}
               />
               <Controls.DatePicker
                  clearable
                  value={selectedDate}
                  onChange={handleDateChange}
                  label="Select date"
                  className={classes.filterControl}
               />
            </Toolbar>
            {/* <Grid xs={12} container item> */}
            <TableContainer component={Paper}>
               <Table aria-label="collapsible table">
                  <TableHead>
                     <TableRow>
                        <TableCell>
                           <IconButton
                              aria-label="expand row"
                              size="small"></IconButton>
                        </TableCell>
                        {headCells.map((headCell) => (
                           <BlockExplorerHeaderCell
                              createSortHandler={createSortHandler}
                              disablePadding={false}
                              id={headCell.id}
                              key={headCell.id}
                              label={headCell.label}
                              numeric={headCell.numeric}
                              order={order}
                              orderBy={orderBy}
                           />
                        ))}
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {stableSort(
                        buttonFilterFn.fn(
                           selectedDateFilterFn.fn(searchFilterFn.fn(blockData))
                        ),
                        getComparator(order, orderBy)
                     )
                        .slice(
                           page * rowsPerPage,
                           page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => (
                           <Row
                              key={
                                 Number(row.bNumber) +
                                 Math.floor(Math.random() * 10)
                              }
                              row={row}
                              blockData={blockData}
                              hover
                              tabIndex={-1}
                           />
                        ))}
                  </TableBody>
               </Table>
            </TableContainer>
            <TablePagination
               rowsPerPageOptions={perPage}
               component="div"
               count={
                  buttonFilterFn.fn(
                     selectedDateFilterFn.fn(
                        searchFilterFn.fn(Object.values(blockData))
                     )
                  ).length
               }
               rowsPerPage={rowsPerPage}
               page={page}
               onChangePage={handleChangePage}
               onChangeRowsPerPage={handleChangeRowsPerPage}
            />
            {/* </Grid> */}
         </Paper>
      </MuiPickersUtilsProvider>
   );
}

BlockExplorer.propTypes = {
   className: PropTypes.string,
   blockData: PropTypes.array,
};

BlockExplorer.defaultProps = {
   className: "",
   blockData: [
      {
         txHash: "0x36d6...fd2f17",
         status: "Success",
         bNumber: 11268348,
         timestamp: "Nov 20, 2020 10:17:20", // "1 min ago"
         txAction: "Bond 200 Dots to Oracle “MaxCrypto”",
         from: "0xd93f78dcdc052c52d3214a6eba1aae93c587ef4b",
         to: "0xd4250d5630b4cf539739df2c5dacb4c659f2488d",
         transactionFee: "0.013256964 Ether ($6.11)",
         gasInfo: "136,284 Gas Used From 194,504 Gas Limit @ 87  Gwei",
         zap: 2e-18,
      },
      {
         txHash: "0x4f3f...34862f",
         status: "Success",
         bNumber: 11268338,
         timestamp: "Nov 20, 2020 09:17:20",
         txAction: "Unbond 50 Dots from Oracle “Polybit”",
         from: "0xd93f78dcdc052c52d3214a6eba1aae93c587ef4b",
         to: "0xd4250d5630b4cf539739df2c5dacb4c659f2488d",
         transactionFee: "0.013256964 Ether ($6.11)",
         gasInfo: "136,284 Gas Used From 194,504 Gas Limit @ 87  Gwei",
         zap: 2e-18,
      },
      {
         txHash: "0x4f3f...34862f",
         status: "Success",
         bNumber: 11268244,
         timestamp: "Nov 20, 2020 07:16:20",
         txAction: "Creation of new Oracle “Poloniex2",
         from: "0xd93f78dcdc052c52d3214a6eba1aae93c587ef4b",
         to: "0xd4250d5630b4cf539739df2c5dacb4c659f2488d",
         transactionFee: "0.013256964 Ether ($6.11)",
         gasInfo: "136,284 Gas Used From 194,504 Gas Limit @ 87  Gwei",
         zap: 2e-18,
      },
      {
         txHash: "0xd354...2a8ef7",
         status: "Success",
         bNumber: 11268240,
         timestamp: "Nov 18, 2020 1:13:20",
         txAction: "Unbond 1000 Dots from Oracle “Polybit”",
         from: "0xd93f78dcdc052c52d3214a6eba1aae93c587ef4b",
         to: "0xd4250d5630b4cf539739df2c5dacb4c659f2488d",
         transactionFee: '0.013256964 Ether ($6.11)"',
         gasInfo: "136,284 Gas Used From 194,504 Gas Limit @ 87  Gwei",
         zap: 2e-18,
      },
      {
         txHash: "0x00dc...d083b8",
         status: "Success",
         bNumber: 11268183,
         timestamp: "Nov 17, 2020 1:17:20",
         txAction: "Unbond 500 Dots from Oracle “MaxCrypto”",
         from: "0xd93f78dcdc052c52d3214a6eba1aae93c587ef4b",
         to: "0xd4250d5630b4cf539739df2c5dacb4c659f2488d",
         transactionFee: "0.013256964 Ether ($6.11)",
         gasInfo: "136,284 Gas Used From 194,504 Gas Limit @ 87  Gwei",
         zap: 2e-18,
      },
      {
         txHash: "0x00dc...d083b1",
         status: "Success",
         bNumber: 11268083,
         timestamp: "Nov 17, 2020 1:15:20",
         txAction: "Unbond 100 Dots from Oracle “MaxCrypto”",
         from: "0xd93f78dcdc052c52d3214a6eba1aae93c587ef4b",
         to: "0xd4250d5630b4cf539739df2c5dacb4c659f2488d",
         transactionFee: "0.013256964 Ether ($6.11)",
         gasInfo: "136,284 Gas Used From 194,504 Gas Limit @ 87  Gwei",
         zap: 2e-18,
      },
   ],
};

export default BlockExplorer;
