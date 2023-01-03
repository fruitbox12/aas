import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, Card, CardContent, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
   root: {},
   card: {
      height: "100%",
      width: "85%",
      margin: "auto",
      padding: theme.spacing(3),
      background:
         "linear-gradient(75deg, rgba(0,0,0,0) 70%, "+theme.palette.primary.main+" 125%)",
   },
   title: {
      width: "30%",
   },
}));

const NameCard = ({ className, name }) => {
   const classes = useStyles();

   return (
      <Card className={clsx(className, classes.card)} elevation={3}>
         <CardContent>
            <Typography variant={"h1"}>{name}</Typography>
         </CardContent>
      </Card>
   );
};

NameCard.ProviderDetailsCard = {
   className: PropTypes.string,
   name: PropTypes.string,
};

NameCard.ProviderDetailsCard = {
   className: "",
   name: "",
};

export default NameCard;
