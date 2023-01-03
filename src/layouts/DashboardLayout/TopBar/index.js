import {
   AppBar,
   Box,
   Hidden,
   IconButton,
   SvgIcon,
   Typography,
   Toolbar,
   makeStyles,
} from "@material-ui/core";
import Account from "./Account";
import Balance from "../../../components/Balance";
import ZapBalance from "src/components/ZapBalance";
import Logo from "src/components/Logo";
import { Menu as MenuIcon } from "react-feather";
import PropTypes from "prop-types";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
// import Contacts from './Contacts';
// import Notifications from './Notifications';
// import Search from './Search';
import { THEMES } from "src/constants";
import clsx from "clsx";
import { useAccountBalance } from "src/hooks/web3ReactHooks.js";
import NetworkBadge from "src/components/networkbadge.js"
import BetaBadge from 'src/components/betabadge.js';
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
   root: {
      zIndex: theme.zIndex.drawer + 100,
      ...(theme.name === THEMES.LIGHT
         ? {
            boxShadow: "none",
            backgroundColor: theme.palette.primary.main,
         }
         : {}),
      ...(theme.name === THEMES.ONE_DARK
         ? {
            backgroundColor: theme.palette.background.default,
         }
         : {}),
   },
   toolbar: {
      minHeight: 64,
   },
   nav: {
      textTransform: "none",
   },
   link: {
      color: theme.palette.primary.main
   },
   betaText: {
      color: theme.palette.text.primary,
   }

}));

// const navLinks = [
//    {
//       title: "Oracle Marketplace",
//       href: "/app/oraclemarket",
//       icon: <ViewModule />,
//    },
//    {
//       title: "List a New Oracle",
//       href: "/app/newendpt",
//       icon: <ShowChart />,
//    },
//    {
//       title: "Block Explorer",
//       href: "/app/explorer",
//       icon: <ViewListIcon />,
//    }
// ];

function TopBar({ className, onMobileNavOpen, ...rest }) {
   const classes = useStyles();
   const account = useSelector((state) => state.account);
   let balance = useAccountBalance();

   return (
      <AppBar className={clsx(classes.root, className)} {...rest}>
         <Toolbar className={classes.toolbar}>
            <Hidden lgUp>
               <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  onClick={onMobileNavOpen}>
                  <SvgIcon fontSize="small">
                     <MenuIcon />
                  </SvgIcon>
               </IconButton>
            </Hidden>
            <Hidden mdDown>
               <RouterLink to="/">
                  <Logo />
               </RouterLink>

               <BetaBadge />
               {/* #### Links commented out for future use if needed #### */}

               {/* {navLinks.map((link) => {
                  return (
                     <Button
                        className={classes.nav}
                        component={RouterLink}
                        exact
                        to={link.href}
                        startIcon={link.icon}>
                        {link.title}
                     </Button>
                  );
               })} */}
            </Hidden>
            <Box ml={2} flexGrow={1} />
            {/* <Search />
        <Contacts />
        <Notifications /> */}
            {/* <Settings /> */}
            <Hidden only={["md", "sm", "xs"]}>
               {/* <Typography className={classes.betaText}>
                  Zap 2.0 Beta - <a href="https://medium.com/the-zap-project"
                     className={classes.link} target='_blank'> Learn More</a>
               </Typography> */}
               <NetworkBadge />
               <ZapBalance />
               <Balance balance={balance} />
            </Hidden>

            <Box ml={2}>
               <Account balance={balance} />
            </Box>
         </Toolbar>
      </AppBar>

   );
}

TopBar.propTypes = {
   className: PropTypes.string,
   onMobileNavOpen: PropTypes.func,
};

export default TopBar;
