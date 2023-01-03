import React from "react";
import { Button, ListItem, makeStyles, Collapse } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import NavItem from "./navitem";

const useStyles = makeStyles((theme) => ({
   item: {
      display: "block",
      paddingTop: 10,
      paddingBottom: 10,
   },
   button: {
      color: theme.palette.text.secondary,
      padding: "10px 8px",
      justifyContent: "flex-start",
      textTransform: "none",
      letterSpacing: 0,
      width: "100%",
   },
   icon: {
      display: "flex",
      alignItems: "center",
      marginRight: theme.spacing(1),
   },
   title: {
      marginRight: "auto",
   },
   sub: {
      paddingLeft: 24,
   },
}));

const SubNavItem = ({ title, subsarray, icon: Icon }) => {
   const classes = useStyles();
   const [openDrop, setOpen] = React.useState(false);

   return (
      <ListItem className={classes.item} disableGutters>
         <Button
            className={classes.button}
            onClick={() => setOpen(!openDrop)}
            endIcon={
               !openDrop ? (
                  <ExpandMoreIcon size="small" color="inherit" />
               ) : (
                  <ExpandLessIcon size="small" color="inherit" />
               )
            }>
            {Icon && <Icon className={classes.icon} size="20" />}
            <span className={classes.title}>{title}</span>
         </Button>
         <Collapse className={classes.sub} in={openDrop}>
            {subsarray.map((sub) => (
               <NavItem
                  href={sub.link}
                  title={sub.title}
                  external={sub.external}
                  // icon={sub.icon}
               />
            ))}
         </Collapse>
      </ListItem>
   );
};

export default SubNavItem;
