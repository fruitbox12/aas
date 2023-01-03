import React from "react";
import NavItem from "./navitem";
import {
   Button,
   Divider,
   Hidden,
   makeStyles,
   Drawer,
   List,
} from "@material-ui/core";
// import OfflineBoltOutlinedIcon from "@material-ui/icons/OfflineBoltOutlined";
// import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import { ZAPLINKS } from "../../constants/links";
import SubNavItem from "./subnavitem";
import { SOCIAL } from "../../constants/socialmedia";
import { Zap as ZaspIcon } from "react-feather";
import WalletModal from "../../components/WalletModal";
import { addZapToWallet } from "src/utils/metamaskTools.js";

const useStyles = makeStyles((theme) => ({
   mobileDrawer: {
      width: 256,
      padding: "0px 20px",
   },
   item: {
      display: "flex",
      marginTop: 25,
      marginBottom: 25,
      padding: "0px 15px",
      justifyContent: "flex-start",
      textTransform: "none",
      letterSpacing: 0,
   },
   divider: {
      width: 175,
      height: 1,
      margin: "0px auto",
      marginBottom: 30,
      marginTop: 5,
   },
}));

const NavBar = ({ onMobileClose, openMobile }) => {
   const classes = useStyles();

   const [openWallet, setOpenWallet] = React.useState(false);

   const handleCloseWalletModal = () => {
      console.log("close");
      setOpenWallet(false);
   };

   const splashNavContents = (
      <React.Fragment>
         <NavItem title={"Documents"} href={"/docs"} icon={null} />
         {ZAPLINKS.map((zlink) => {
            return (
               <NavItem
                  title={zlink.title}
                  href={zlink.link}
                  external={zlink.external}
                  icon={zlink.icon}
               />
            );
         })}
         <SubNavItem
            title={"Social Media"}
            subsarray={SOCIAL}
            icon={ZaspIcon}
         />
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
         <Button
            className={classes.item}
            color="secondary"
            variant="outlined"
            size="medium"
            onClick={() => {
               try {
                  addZapToWallet();
               } catch {}
            }}>
            Add Zap
         </Button>
         <Button
            className={classes.button}
            color="primary"
            component="a"
            href="https://v1.zap.org"
            target={"_blank"}
            rel={"noreferrer"}
            variant="outlined"
            size="medium">
            to v1.0 
         </Button>
         <WalletModal
            isOpen={openWallet}
            handleClose={handleCloseWalletModal}
         />
      </React.Fragment>
   );

   return (
      <Hidden lgUp>
         <Drawer
            anchor="right"
            classes={{ paper: classes.mobileDrawer }}
            onClose={onMobileClose}
            open={openMobile}
            variant="temporary">
            <List>{splashNavContents}</List>
         </Drawer>
      </Hidden>
   );
};

export default NavBar;
