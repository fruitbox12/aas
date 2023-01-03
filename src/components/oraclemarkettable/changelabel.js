import React from "react";
import Label from "../Label";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
   root: {
      fontWeight: "bold",
   },
}));

const ChangeLabel = ({ change }) => {

   const classes = useStyles();

   let color = "success";

   if (change < 0) {
      color = "error";
   } else if (change === 0) {
      color = "warning";
   }

   return (
      <Label className={classes.root} color={color}>
         {change}
      </Label>
   );
};

export default ChangeLabel;
