import {
   AppBar,
   Box,
   Button,
   Divider,
   Hidden,
   IconButton,
   Link,
   SvgIcon,
   Toolbar,
   makeStyles,
} from "@material-ui/core";
import React, { useState, useEffect, useCallback } from "react";
import Logo from "src/components/Logo";
import { Menu as MenuIcon } from "react-feather";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import WalletModal from "../../components/WalletModal";
import { ZAPLINKS } from "../../constants/links";
import clsx from "clsx";
import { addZapToWallet } from "src/utils/metamaskTools.js";

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: theme.palette.background.default,
      width: '100%',
      position: 'fixed',
      top: '0',
      transition: 'top 0.2s',
   },
   hidden: {
      backgroundColor: theme.palette.background.default,
      width: '100%',
      top: '-64px',
      transition: 'top 0.2s',
   },
   toolbar: {
      height: 64,
   },
   logo: {
      marginRight: theme.spacing(2),
      height: 34,
      //width: 230,
      verticalAlign: 'center',
   },
   link: {
      fontWeight: theme.typography.fontWeightMedium,
      "& + &": {
         marginLeft: theme.spacing(2),
      },
   },
   divider: {
      width: 1,
      height: 32,
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
   },
   item: {
      marginLeft: theme.spacing(1),
   },
   itemMobile: {
      fontSize: 24,
      marginLeft: theme.spacing(0.5),
   },
}));

function TopBar({ className, onMobileNavOpen, ...rest }) {
   const classes = useStyles();
   const [openWallet, setOpenWallet] = useState(false);
   const [upScroll, setUpScroll] = useState(window.scrollY);
   const [downScroll, setDownScroll] = useState(window.scrollY)
   const [prevScroll, setPrevScroll] = useState(window.scrollY)
   const [visible, setVisible] = useState(true);

   const handleCloseWalletModal = () => {
      console.log("close");
      setOpenWallet(false);
   };

   const handleScroll = useCallback((event) => {

      //console.log(window.scrollY, prevScroll, upScroll, downScroll);
      if (prevScroll < window.scrollY) { //scrolling down

         //console.log('Scrolling down')
         if (window.scrollY - 20 > downScroll) { //scroll down by 20

            //console.log('Hide')
            setVisible(false);
         };
         setUpScroll(window.scrollY);
      }
      else if (prevScroll > window.scrollY) { //scrolling up

         //console.log('Scrolling up')
         if (window.scrollY < upScroll - 20) { //scroll by 20 up
            //console.log('Show')
            setVisible(true);
         };
         setDownScroll(window.scrollY);
      };
      setPrevScroll(window.scrollY)
   });

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [handleScroll])

   const splashNavContents = (
      <React.Fragment>
         {ZAPLINKS.map((zlink) => {
            return (
               <Link
                  className={classes.link}
                  color="textSecondary"
                  component={Link}
                  underline="none"
                  variant="body2"
                  href={zlink.link}
                  target={zlink.link.startsWith("#") ? "_self" : "_blank"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}>
                  {zlink.title}
               </Link>
            );
         })}
         <Divider className={classes.divider} />
         <Button
            className={classes.item}
            color="primary"
            // component={RouterLink}
            to="/app"
            variant="contained"
            size="medium"
            onClick={() => setOpenWallet(true)}>
            Dashboard
         </Button>

         <Button
            className={classes.item}
            color="primary"
            component="a"
            href="https://app.uniswap.org/#/swap?outputCurrency=0x6781a0f84c7e9e846dcb84a9a5bd49333067b104"
            target={"_blank"}
            rel={"noreferrer"}
            variant="outlined"
            size="medium">
            Get Zap
         </Button>
{/* 
         <Button
            className={classes.item}
            color='primary'
            href='http://faucet.zap.org/'
            target={'_blank'}
            rel={"noreferrer"}
            variant='outlined'
            size='medium'>

            Get Test ZAP
         </Button>
         <Button
            className={classes.item}
            color="secondary"
            component="a"
            href="https://v1.zap.org/"
            target={"_blank"}
            rel={"noreferrer"}
            variant="outlined"
            size="medium">
            to v1.0
         </Button> */}
         <WalletModal
            isOpen={openWallet}
            handleClose={handleCloseWalletModal}
         />
      </React.Fragment>
   );

   const mobileSplashContents = (
      <React.Fragment>
         <Button
            className={classes.mobileItem}
            color="primary"
            // component={RouterLink}
            to="/app"
            variant="contained"
            size="medium"
            onClick={() => setOpenWallet(true)}>
            Dashboard
         </Button>
         <WalletModal
            isOpen={openWallet}
            handleClose={handleCloseWalletModal}
         />
      </React.Fragment >
   )

   return (
      <AppBar
         className={visible ? classes.root : classes.hidden}
         color="default"
         {...rest}>
         <Toolbar className={classes.toolbar}>
            <RouterLink to="/">
               <Logo className={classes.logo} />
            </RouterLink>
            <Box flexGrow={1} />
            <Hidden mdUp>
               {mobileSplashContents}
            </Hidden>
            <Hidden smDown>
               {splashNavContents}
            </Hidden>
         </Toolbar>
      </AppBar>
   );
}

TopBar.propTypes = {
   className: PropTypes.string,
};

export default TopBar;
