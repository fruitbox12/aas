import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
   makeStyles,
   Card,
   CardContent,
   Link,
   Table,
   TableCell,
   TableRow,
   TableBody,
} from "@material-ui/core";
import LaunchIcon from "@material-ui/icons/Launch";

const useStyles = makeStyles((theme) => ({
   root: {},
   card: {
      height: "100%",
      width: "85%",
      margin: "auto",
      padding: theme.spacing(3),
   },
   title: {
      width: "30%",
   },
}));

const ProviderDetailsCard = ({
   className,
   providerAddress,
   providerName,
   numEndpts,
}) => {
   const classes = useStyles();

   return (
      <Card className={clsx(className, classes.card)} elevation={3}>
         <CardContent>
            <Table className={classes.vSpace}>
               <TableBody>
                  <TableRow>
                     <TableCell className={classes.title}>
                        Provider Address
                     </TableCell>
                     <TableCell>
                        <Link
                           target={"_blank"}
                           rel={"noopener noreferrer"}
                           href={
                              "https://" +
                              (parseInt(window.ethereum.chainId) === 42
                                 ? "kovan."
                                 : "") +
                              "etherscan.io/address/" +
                              providerAddress
                           }>
                           {providerAddress} <LaunchIcon fontSize={"inherit"} />
                        </Link>
                     </TableCell>
                  </TableRow>
                  {/* <TableRow>
                     <TableCell className={classes.title}> Provider Name </TableCell>
                     <TableCell>{providerName}</TableCell>
                  </TableRow> */}
                  <TableRow>
                     <TableCell className={classes.title}>
                        {" "}
                        Number of Endpoints{" "}
                     </TableCell>
                     <TableCell>{numEndpts}</TableCell>
                  </TableRow>
               </TableBody>
            </Table>
         </CardContent>
      </Card>
   );
};

ProviderDetailsCard.ProviderDetailsCard = {
   className: PropTypes.string,
   providerAddress: PropTypes.string,
   providerName: PropTypes.string,
   numEndpts: PropTypes.number,
};

ProviderDetailsCard.ProviderDetailsCard = {
   className: "",
   providerAddress: "",
   providerName: "",
   numEndpts: 0,
};

export default ProviderDetailsCard;
