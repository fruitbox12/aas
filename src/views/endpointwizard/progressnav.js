import React from "react";
import { Grid, List, Button, makeStyles, Divider, Hidden} from "@material-ui/core";
import CameraOutlinedIcon from "@material-ui/icons/CameraOutlined";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { fade } from "@material-ui/core/styles/colorManipulator";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    minHeight: "100%"
  },
  inner: {
    minHeight: "100%",
    minWidth: "100%"
  },
  item: {
    display: "block",
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: theme.palette.text.secondary,
    // padding: "10px 8px",
    marginBottom:"5px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "auto"
  },
  notStep: {
    paddingLeft: 40
  },
  icon: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(1)
  },
  title: {
    marginRight: "auto",
  },
  active: {
    backgroundColor: fade("#61CFFF", 0.12),
    color: theme.palette.secondary.main,
    "& $title": {
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.secondary.main
    },
    "& $icon": {
      color: theme.palette.secondary.main
    }
  },
  divider: {
    width: "100%",
    height: 1,
    display: "block",
    // margin: "43% 0 0 0"
  },
  list: {
    maxWidth: "100%",
    display:"flex",
    width:"auto",
    // marginTop: "65%",
    // marginBottom: "auto",
    [theme.breakpoints.down("sm")]:{
      marginTop:"0px"
    },
  },
  toggle:{
    position:"relative",
    [theme.breakpoints.only("sm")]:{
      left:"-20%"
    },
    [theme.breakpoints.down("xs")]:{
        left:"-23%",
    },
    "& span":{
      color: theme.palette.primary.main
    }
  }
}));

// const wizPages = [
//   {
//     title: "Endpoint Details",
//     step: 0
//   },
//   {
//     title: "Max Supply and Price",
//     step: 1
//   },
//   {
//     title: "Initialize Curve",
//     step: 2
//   },
//   {
//     title: "Markdown File",
//     step: 3
//   },
//   {
//     title: "JSON Schema",
//     step: 4
//   },
// ];


const ProgressNav = ({ done, jumpStep, step, wizPages, progToggle }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container direction={"row"}>
      <Grid className={classes.inner} container direction={"row"} item justify={"center"} xs={12}>
        <Hidden only={['md','lg', 'xl']}>
            <Button item onClick={() => progToggle()} className={classes.toggle}>
              <KeyboardArrowUpIcon/> Hide Navigation
            </Button>
        </Hidden>
        <List className={classes.list} disablePadding>
          {wizPages.map((page, i) => (
            <Button
              className={i === step ? [classes.button, classes.active] : [classes.button, classes.notStep]}
              activeClassName={classes.active}
              onClick={() => jumpStep(i)}
              disabled={i > done}
            >
              {i === step && <CameraOutlinedIcon className={classes.icon} size="20" />}
              <span className={classes.title}>{page.title}</span>
            </Button>
          ))}
        </List>
        <Hidden only={['sm', 'xs']}>
          <Divider className={classes.divider} />
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default ProgressNav;
