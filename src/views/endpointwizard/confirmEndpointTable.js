import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { THEMES } from "src/constants";
import { useStyles } from "./styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const ConfirmEndpointTable = ({ existingCoefficientArray, coeffString }) => {
	const classes = useStyles();
	const StyledTableRow = withStyles((theme) => ({
		root: {},
	}))(TableRow);

	const HeaderCell = withStyles((theme) => ({
		head: {
			...(theme.name === THEMES.LIGHT
				? {
					boxShadow: "none",
					backgroundColor: "rgb(127,231,253)",
				}
				: {}),
			...(theme.name === THEMES.ONE_DARK
				? {
					backgroundColor: theme.palette.text.primary,
				}
				: {}),
			color: "black",
			fontSize: 16,
			width: "100%",
			margin: "5px",
			textAlign: "center",
			// boxShadow: "0 0 2px black",
			borderBottom: "none",
			borderTopLeftRadius: "8px",
			borderTopRightRadius: "8px",
			padding: "16px 0px 16px 0px",
		},
	}))(TableCell);

	const InfoCell = withStyles((theme) => ({
		head: {
			boxShadow: "0 0 2px black",
			borderBottomLeftRadius: "8px",
			borderBottomRightRadius: "8px",
			borderBottom: "none",
		},
		body: {
			// backgroundColor: theme.palette.background.default,
			color: theme.palette.text.primary,
			fontSize: 16,
			margin: "5px",
			textAlign: "center",
			borderBottomLeftRadius: "8px",
			borderBottomRightRadius: "8px",
			// boxShadow: "0 0 2px black",
			borderBottom: "none",
		},
	}))(TableCell);

	return (
		<>
			<Grid item xs={12} md={6}>
				{/* <TableContainer borderRadius={16}> */}
				<Table className={classes.table}>
					<TableHead>
						{/* <StyledTableRow> */}
						<HeaderCell>Initial Bond Price</HeaderCell>
						{/* </StyledTableRow> */}
					</TableHead>
					<TableBody>
						{/* <StyledTableRow> */}
						<InfoCell component="th" scope="row" data-cy='BondPrice'>
							{`${Math.round((existingCoefficientArray[1] + Number.EPSILON) * 100) / 100} Zap`}
						</InfoCell>
						{/* </StyledTableRow> */}
					</TableBody>
				</Table>
				{/* </TableContainer> */}
			</Grid>
			<Grid item  xs={12} md={6}>
				{/* <TableContainer> */}
				<Table className={classes.table}>
					<TableHead>
						<StyledTableRow>
							<HeaderCell>Dot Limit</HeaderCell>
						</StyledTableRow>
					</TableHead>
					<TableBody>
						<StyledTableRow>
							<InfoCell component="th" scope="row" data-cy="DotLimit">
								{`${Math.round(
									existingCoefficientArray[
									existingCoefficientArray.length - 1
									]
								)} Dots`}
							</InfoCell>
						</StyledTableRow>
					</TableBody>
				</Table>
				{/* </TableContainer> */}
			</Grid>
			<Grid item xs={12}>
				{/* <TableContainer> */}
				<Table className={classes.table}>
					<TableHead>
						<StyledTableRow>
							<HeaderCell>Coefficient Array</HeaderCell>
						</StyledTableRow>
					</TableHead>
					<TableBody>
						<StyledTableRow>
							<InfoCell component="th" scope="row" data-cy='CoeffArr'>
								{coeffString}
							</InfoCell>
						</StyledTableRow>
					</TableBody>
				</Table>
				{/* </TableContainer> */}
			</Grid>
		</>
	);
};

export default ConfirmEndpointTable;
