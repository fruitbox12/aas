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
  root: {},
  label: {
    paddingLeft: 26,
  },
  header: {
    fontSize: '1rem',
  },
}));

// const menuStyle = clsx({
//   [classes.label] : label !== ('Block' || 'Txn Hash')
// });

const BlockExplorerCell = ({
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
         align={numeric ? "center" : "center"}
         padding={disablePadding ? "none" : "default"}
         sortDirection={orderBy === id ? order : false}>
         <TableSortLabel
            className={clsx(className, className = (label !== "Block" && label !== "Txn Hash") ? classes.label : "")}
            active={orderBy === id}
            direction={orderBy === id ? order : "asc"}
            onClick={createSortHandler(id)}>
            <Typography variant={"button"} className={classes.header}>{label}</Typography>
         </TableSortLabel>
      </TableCell>
   );
};

BlockExplorerCell.defaultProps = {
   className: "",
   createSortHandler: ()=>{},
   disablePadding: false,
   id: "category",
   label: "Alpha",
   numeric: false,
   order: "asc",
   orderBy: "category",
}

export default BlockExplorerCell;
