import React, { useState, useEffect } from "react";
import clsx from "clsx";
//import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PropTypes from "prop-types";
//import Settings from "./Settings";
import {
   Box,
   Drawer,
   Hidden,
   IconButton,
   List,
   ListSubheader,
   makeStyles,
   Typography,
   Popover,
   useTheme,
} from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";
import ViewListIcon from "@material-ui/icons/ViewList";
import Widgets from "@material-ui/icons/Widgets";
import TokenIcon from "src/components/icons/TokenIcon";
import ViewModule from "@material-ui/icons/ViewModule";
import ShowChart from "@material-ui/icons/ShowChart";
import DescriptionIcon from "@material-ui/icons/Description";
import NavItem from "./NavItem";
// import Settings from "./Settings"
import { useLocation } from "react-router";

/* import OracleWizardIcon from 'src/components/icons/navIcons/OracleWizardIcon';
import TokenWizardIcon from 'src/components/icons/navIcons/TokenWizardIcon';
import OracleMarketIcon from 'src/components/icons/navIcons/OracleMarketIcon';
import TokenMarketIcon from 'src/components/icons/navIcons/TokenMarketIcon';
import BlockExplorerIcon from 'src/components/icons/navIcons/BlockExplorerIcon'; */

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
   },
   appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
   },
   appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen,
      }),
   },
   menuButton: {
      marginRight: 36,
      minWidth: 0,
   },
   hide: {
      display: "none",
   },
   drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
   },
   drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen,
      }),
      marginTop: "64px",
   },
   drawerClose: {
      transition: theme.transitions.create("width", {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
         width: theme.spacing(9) + 1,
      },
      marginTop: "64px",
   },
   toggleBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      marginTop: 16,
      padding: 10,
      minWidth: 44,
      borderRadius: 8,
      //padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      //...theme.mixins.toolbar,
   },
   footer: {
      //height: '250px'
   },
   popover: {
      pointerEvents: "none",
      marginTop: 6,
      marginLeft: 7,
   },
   popText: {
      padding: 4,
   },
   paper: {
      padding: theme.spacing(1),
   },
   icon: {
      width: 24,
      height: 24,
   },
   title: {
      marginRight: "auto",
   },
   list: {
      paddingBottom: 0,
   },
}));

// navConfig is an array of objects/arrays that contains the navbar header titles, navbar header icons, navbar routing
// subheader contains the name of the parent header title and creates its own section
// items is an array of objects that contains the child properties of the parent subheader section
const navConfig = [
   {
      subheader: "Info",
      items: [
         // {
         //   title: "Oracle Marketplace",
         //   href: "/app/oraclemarket",
         //   icon: ViewModule,
         // },
         {
            title: "Token Marketplace",
            href: "/app/tokenmarket",
            icon: ViewListIcon,
         },
         // {
         //   title: "Block Explorer",
         //   href: "/app/explorer",
         //   icon: Widgets,
         // },
      ],
   },
   {
      subheader: "Wizards",
      items: [
         // {
         //   title: "List a New Oracle",
         //   href: "/app/newendpt",
         //   icon: ShowChart,
         // },
         {
            title: "List a New Token Curve",
            href: "/app/tokenwizard",
            icon: TokenIcon,
         },
      ],
   },
   // {
   //    subheader: "Pages",
   //    href: "/app/pages",
   //    items: [
   //       {
   //          title: "Error",
   //          href: "/404",
   //          icon: AlertCircleIcon,
   //       },
   //    ],
   // },
];

export default function NavBar({ openMobile, onMobileClose }) {
   const classes = useStyles();
   // eslint-disable-next-line no-unused-vars
   const theme = useTheme();
   const location = useLocation();
   const [open, setOpen] = useState(true);
   const [openTransition, setOpenTransition] = useState(false);

   const [anchorEl, setAnchorEl] = useState(null);
   const [popoverLabel, setPopoverLabel] = useState(null);

   const handleDrawer = () => {
      if (open) {
         setOpen(false);
         setTimeout(() => setOpenTransition(true), 225);
      } else {
         setOpen(true);
         setOpenTransition(false);
      }
   };

   const handlePopoverOpen = (event, title) => {
      if (openTransition) {
         console.log("Open Popover", title);
         setPopoverLabel(title);
         setAnchorEl(event.currentTarget);
      }
   };

   const handlePopoverClose = () => {
      setAnchorEl(null);
   };

   const openPopover = Boolean(anchorEl);

   const handleClick = (href) => {
      if (window.location.pathname !== href) {
         setOpen(false);
         setTimeout(() => setOpenTransition(true), 225);
      }
   };

   useEffect(() => {
      if (openMobile && onMobileClose) {
         onMobileClose();
      }
      // eslint-disable-next-line
   }, [location.pathname]);

   // What goes inside the dashboard's side navbar
   const content = (
      <Box height="calc(100% - 200px)" display="flex" flexDirection="column">
         <PerfectScrollbar options={{ suppressScrollX: true }}>
            <Box p={2}>
               {navConfig.map((config) => {
                  const list = (
                     <List
                        key={config.subheader}
                        subheader={
                           <ListSubheader disableGutters disableSticky>
                              {open ? config.subheader : null}
                           </ListSubheader>
                        }
                        className={classes.list}>
                        {config.items.map((item) => (
                           <div
                              onMouseOver={(event) =>
                                 handlePopoverOpen(event, item.title)
                              }
                              onMouseLeave={handlePopoverClose}
                              aria-owns={
                                 !open ? "mouse-over-popover" : undefined
                              }
                              aria-haspopup="true">
                              <NavItem
                                 href={item.href}
                                 icon={item.icon}
                                 title={open || openMobile ? item.title : null}
                                 onClick={() => handleClick(item.href)}
                              />
                           </div>
                        ))}
                     </List>
                  );
                  return config.subheader !== "Wizards" ? (
                     list
                  ) : (
                     <Hidden mdDown>{list}</Hidden>
                  );
               })}
            </Box>
         </PerfectScrollbar>
      </Box>
   );
   return (
      <div className={classes.root}>
         <Hidden mdDown>
            <Drawer
               variant="permanent"
               className={clsx(classes.drawer, {
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open,
               })}
               classes={{
                  paper: clsx({
                     [classes.drawerOpen]: open,
                     [classes.drawerClose]: !open,
                  }),
               }}>
               {content}
               <div className={classes.footer}>
                  <Box p={2}>
                     {/* <Box p={2}>
              <Box p={2} borderRadius="borderRadius" bgcolor="background.dark">
                <Typography variant="h6" color="textPrimary">
                  Need Help?
            </Typography>
                <Grid direction="column" container item>
                  <Link
                    variant="subtitle1"
                    color="secondary"
                    component={RouterLink}
                    to="/docs"
                  >
                    Check our docs
              </Link>
                  <Settings />
                </Grid>
              </Box>
            </Box> */}
                     <div
                        onMouseOver={(event) =>
                           handlePopoverOpen(event, "Docs")
                        }
                        onMouseLeave={handlePopoverClose}
                        aria-owns={open ? "mouse-over-popover" : undefined}
                        aria-haspopup="true">
                        <NavItem
                           href={"/docs"}
                           icon={DescriptionIcon}
                           title={open || openMobile ? "Documentation" : null}
                        />
                     </div>
                     {/* <div onMouseOver={(event) => handlePopoverOpen(event, "Settings")}
                onMouseLeave={handlePopoverClose}
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true">
                <Settings
                  title={open || openMobile ? "Settings" : null}
                />
              </div> */}

                     <div
                        onMouseOver={(event) =>
                           handlePopoverOpen(event, "Expand Menu")
                        }
                        onMouseLeave={handlePopoverClose}
                        aria-owns={open ? "mouse-over-popover" : undefined}
                        aria-haspopup="true">
                        <NavItem
                           onClick={handleDrawer}
                           icon={open ? ChevronLeftIcon : ChevronRightIcon}
                           title={open || openMobile ? "Collapse Menu" : null}
                        />
                        {open ? null : (
                           <div>
                              <Popover
                                 id="mouse-over-popover"
                                 className={classes.popover}
                                 open={openPopover}
                                 anchorEl={anchorEl}
                                 anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                 }}
                                 transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                 }}
                                 onClose={handlePopoverClose}
                                 disableRestoreFocus>
                                 <Typography className={classes.popText}>
                                    {popoverLabel}
                                 </Typography>
                              </Popover>
                           </div>
                        )}
                     </div>
                  </Box>
               </div>
            </Drawer>
         </Hidden>

         <Hidden lgUp>
            <Drawer
               anchor="left"
               classes={{ paper: classes.mobileDrawer }}
               onClose={onMobileClose}
               open={openMobile}
               variant="temporary">
               {content}
            </Drawer>
         </Hidden>
      </div>
   );
}

NavBar.propTypes = {
   onMobileClose: PropTypes.func,
   openMobile: PropTypes.bool,
};
