import React from "react";
import {
   makeStyles,
   TableCell,
   TableSortLabel,
   Typography,
} from "@material-ui/core";
import clsx from "clsx";

// Component Styles
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
}));

const MarketHeaderCell = ({
   className,
   createSortHandler,
   disablePadding,
   id,
   label,
   numeric,
   order,
   orderBy,
}) => {
   const classes = useStyles();
   return (
      <TableCell
         className={clsx(className, classes.root)}
         key={id}
         align={numeric ? "center" : "left"}
         padding={disablePadding ? "none" : "default"}
         sortDirection={orderBy === id ? order : false}>
         <TableSortLabel
            active={orderBy === id}
            direction={orderBy === id ? order : "asc"}
            onClick={createSortHandler(id)}>
            <Typography variant={"button"}>{label}</Typography>
         </TableSortLabel>
      </TableCell>
   );
};

MarketHeaderCell.defaultProps = {
   className: "",
   createSortHandler: () => {},
   disablePadding: false,
   id: "category",
   label: "Alpha",
   numeric: false,
   order: "asc",
   orderBy: "category",
};

export default MarketHeaderCell;
