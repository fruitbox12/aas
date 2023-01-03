import {
  Button,
  Container,
  Grid,
  Typography,
  makeStyles,
  Divider,
} from "@material-ui/core";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import OfflineBoltOutlinedIcon from "@material-ui/icons/OfflineBoltOutlined";
import Particles from "./3d/Particles.js";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import SocialIcons from "src/components/SocialIcons.js";
import clsx from "clsx";
import WalletModal from "src/components/WalletModal";
import Banner from "src/components/Banner";
import { useHistory } from "react-router";
import HeroVideo from "./HeroVideo";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "aboslute",
    top: 40,
    paddingTop: 0,
    paddingBottom: 0,
    [theme.breakpoints.down("md")]: {
      paddingTop: 0,
      paddingBottom: 20,
    },
    alignItems: "center",
    minHeight: "100vh",
  },
  logo: {
    maxHeight: "15vh",
    margin: "auto",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  hero: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateY(-50%) translateX(-50%)",
    //overflow: 'hidden',
    width: "100%",
    backgroundColor: "transparent",
    zIndex: 1,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 15,
      paddingRight: 15,
    },
  },
  button: {
    marginLeft: theme.spacing(3.5),
    marginRight: theme.spacing(3.5),
    marginTop: theme.spacing(1),
    textTransform: "none",
    height: 65,
    width: 215,
    fontSize: 20,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      width: 250,
      height: 55,
    },
    //border: '1px solid #000000',
    /* boxSizing: 'border-box',
      boxShadow: '3px 3px 2px rgba(0, 0, 0, 0.5)' */
  },
  icon: {
    height: 35,
    width: "auto",
  },
  spaceAbove: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
    },
  },
  socialIconsContainer: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
      maxWidth: 300,
    },
  },
  title: {
    fontSize: 63,
    fontWeight: 470,
    width: 850,
    color: "#087FFE",
    lineHeight: 1.1,
    "-webkit-text-stroke-width": "0.5px",
    "-webkit-text-stroke-color": "rgba(28, 32, 37, 0.76)",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(4),
      fontSize: 34,
      width: 380,
      maxWidth: "calc(100vw - 30px)",
    },
  },
  desc: {
    fontSize: 20,
    width: 440,
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(0),
      fontSize: 18,
      width: 380,
      maxWidth: "calc(100vw - 30px)",
    },
  },
  videoContainer: {
    zIndex: 0,
    width: "100vw",
    overflow: "hidden",
    height: "100vh",
    justifyContent: "center",
  },
  bannerLink: {
    color: "#e4e3e7",
  },
  backgroundMask: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateY(-50%) translateX(-50%)",
    minWidth: '100%',
    minHeight: '100%',
    background: 'linear-gradient(90deg, rgba(0,0,0,0.35) 29%, rgba(0,0,0,0.65) 43%, rgba(0,0,0,0.68) 73%, rgba(0,0,0,0.90) 100%)',
  }
}));

function Hero({ className, ...rest }) {
  const classes = useStyles();
  const history = useHistory();
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const [openWallet, setOpenWallet] = React.useState(false);
  const handleCloseWalletModal = () => {
    console.log("close");
    setOpenWallet(false);
  };

  const navigateDashboard = () => {
    console.log("navigating to dashboard");
    history.push("/app");
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      {/* <Particles /> */}
      <div className={classes.videoContainer}>
        <HeroVideo size={width} />
        {/* <Banner>
               Zap 2.0 Beta - <a href="https://medium.com/the-zap-project" className={classes.bannerLink}> Learn More </a>
            </Banner> */}
        { width <= 680 ? null :
        <div className={classes.backgroundMask}>

        </div>}
        <Grid
          alignItems={"center"}
          container
          direction={"column"}
          justify={"center"}
          xs={12}
          className={classes.hero}
        >
          <Grid
            alignItems={"center"}
            container
            direction={"column"}
            item
            justify={"center"}
            xs={12}
          >
            {/* <img
                        className={classes.logo}
                        alt={"ZAP.org Logo"}
                        src={"static/zaplogo.png"}
                     /> */}
            <Typography
              align={"center"}
              className={classes.title}
              lineHeight="normal"
            >
              Triggering Real World Financial Events on the Blockchain
            </Typography>
            <Typography
              align={"center"}
              color={"textPrimary"}
              className={classes.desc}
            >
              Zap Protocol allows users to create and subscribe to decentralized
              oracle data feeds, fueling smart contracts with real world data
            </Typography>
          </Grid>
          <Grid
            className={classes.spaceAbove}
            alignItems={"center"}
            container
            direction={"row"}
            item
            justify={"center"}
            xs={12}
          >
            <Button
              className={classes.button}
              color="primary"
              variant="contained"
              size="large"
              to="/app"
              startIcon={<DesktopWindowsIcon className={classes.icon} />}
              onClick={() => setOpenWallet(true)}
            >
              Dashboard
            </Button>
            <Button
              className={classes.button}
              color="primary"
              component="a"
              href="/docs/"
              variant="contained"
              size="large"
              target="_blank"
              startIcon={<InsertDriveFileIcon className={classes.icon} />}
            >
              Learn More
            </Button>
            {/* <Button
                        className={classes.button}
                        color="primary"
                        component="a"
                        href="https://app.uniswap.org/#/swap?outputCurrency=0x6781a0f84c7e9e846dcb84a9a5bd49333067b104"
                        target={"_blank"}
                        rel={"noreferrer"}
                        variant="contained"
                        size="large"
                        startIcon={
                           <OfflineBoltOutlinedIcon className={classes.icon} />
                        }>
                        Get Zap
                     </Button> */}
            <WalletModal
              isOpen={openWallet}
              handleClose={handleCloseWalletModal}
            />
          </Grid>
          <Grid className={classes.socialIconsContainer}>
            <SocialIcons width={window.screen.width < 700 ? 16 : 36}/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
