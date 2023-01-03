import { makeStyles } from "@material-ui/core";
import { THEMES } from "src/constants";

export const useStyles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        maxWidth: '95%',
        [theme.breakpoints.down("sm")]:{
          marginLeft: "2.5%"
        },
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            // width: '90%',
        },
    },
    title: {
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(4),
        minHeight: 50,
    },
    content: {
        marginTop: theme.spacing(2),
        [theme.breakpoints.down("sm")]:{
          width: window.screen.width * (85/100),
          minHeight: null
        },
        // minHeight: 330,
        marginLeft: "32px",

        "& svg": {
          position: "relative",
          [theme.breakpoints.down("xs")]:{
            left: "-35%"
          },

        }

    },
    url: {
      marginTop: theme.spacing(2),
      [theme.breakpoints.down("sm")]:{
        width: window.screen.width * (85/100),
        minHeight: null,
        alignSelf: "flex-end",
      },
      minHeight: 330,
    },
    confirmContent: {
        // marginTop: theme.spacing(2),
        height: "60vh",
        minHeight:  330,
        width:"100%",
        alignSelf: "center",
        [theme.breakpoints.down("sm")]:{
          minWidth: null,
          width: window.screen.width * (65/100)
        },

    },
    zapContent: {
      marginTop: theme.spacing(2),
      minHeight: 500,
    },
    confirmDets:{
      marginTop: theme.spacing(2),
      minHeight: 50,
      textAlign:"center",
      [theme.breakpoints.down("sm")]:{
        transform: null,
      },
      // transform: "translate(2vw, -2vh)",

    },
    confirmListing:{
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.down("sm")]:{
        marginLeft: "2.5%"
      },
      '& .MuiTextField-root': {
          margin: theme.spacing(1),
          // width: '90%',
      },
    },
    confirmCard:{
      padding: theme.spacing(2.5),
      width:"75%",
      // marginLeft:"25%",
      backgroundColor: "#1c2025"
    },
    confirmCardContainer: {
      justifyContent: "center",
    },
    tables:{
      // position: window.screen.width < 600 ? "relative" : null,
      // left: window.screen.width < 600 ? "30px" : null
      alignSelf:"center",
    },
    confirmGraph:{
      minHeight: 280,
      [theme.breakpoints.down("sm")]:{
        padding:"10px",
        alignSelf:"center",
        justifyContent:null,
        transform:null,
      },
      justifyContent: "center",

      // transform:  "translate(-3vw, 0)",
    },
    backBtn: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
      minHeight: 30,
      borderRadius: "20px 0px 0px 20px"
    },
    nextBtn: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        minHeight: 30,
        borderRadius: "0px 20px 20px 0px",
        "&:hover":{
          backgroundColor: '#E0E0E1',
        },
    },
    listBtn:{
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        minHeight: 30,
        borderRadius: "0px 20px 20px 0px",
        color: "theme.palette.text.primary",
        backgroundColor: "#7fe7fd",
        "&:hover":{
          backgroundColor: '#52d1ec',
        },
    },
    finalBtn:{
      color: "theme.palette.text.primary",
      backgroundColor: "#7fe7fd",
      "&:hover":{
        backgroundColor: '#52d1ec',
      },
    },
    item: {
        display: 'block',
        paddingTop: 0,
        paddingBottom: 0
    },
    display: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        marginTop: "15px",
        display:"block",
        maxWidth: '95%',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            // width: '90%',
        },
        [theme.breakpoints.down("sm")]:{
          marginLeft: "5px"
        },
        backgroundColor:'white',
        minHeight: 280,
        maxHeight: 280,
        wordBreak:"break-all",
        overflowY:"scroll",
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        ' & p':{
          width:'100px',
          padding: "10px",
          wordBreak:'break-all'
        },
        color: 'black',
        whiteSpace: 'pre',
        borderRadius: '5px',
        padding: '10px',
        ...(theme.name === THEMES.LIGHT
          ? {
             backgroundColor: "lightgrey",
             boxShadow: '1px 1px 3px rgb(127,231,253)'
            }
          : {}),
         ...(theme.name === THEMES.ONE_DARK
          ? {
             backgroundColor: 'rgb(87,90,97)',
             boxShadow:'1px 1px 3px rgb(127,231,253)'
            }
          : {}),
    },
    button: {
        color: theme.palette.text.secondary,
        padding: '10px 8px',
        justifyContent: 'flex-start',
        textTransform: 'none',
        letterSpacing: 0,
        width: '100%'
      },
    icon: {
      display: 'flex',
      alignItems: 'center',
      marginRight: theme.spacing(1)
    },
    navTitle: {
      marginRight: 'auto'
    },
    active: {
      color: theme.palette.secondary.main,
      '& $title': {
        fontWeight: theme.typography.fontWeightMedium
      },
      '& $icon': {
        color: theme.palette.secondary.main
      }
    },
    equation: {
      overflowX: 'auto',
      wordWrap: 'break-word',
    },
    svg: {
      display:"block",
      borderRadius:"4px",
      strokeWidth: "4px",
      stroke: theme.palette.text.primary,
      strokeLinejoin:"round",
      alignSelf: "center"
    },
    listEndpointBtn: {
      backgroundColor: "#61CFFF",
      color: "white",
    },
    listBtnGroup:{
      marginBottom:"10px",
      paddingRight:"5px",
      paddingLeft:"5px",
    },
    table: {
      [theme.breakpoints.down("sm")]:{
        position:"relative",
        left: "25px",
      },
      fontSize: "10px",
      boxShadow: "1px 1px 3px darkgrey",
      borderRadius: "8px",
      padding: "0px"
    },
    tableHead: {
      ...(theme.name === THEMES.LIGHT
				? {
					 boxShadow: "none",
					 backgroundColor: "rgb(127,231,253)",
				  }
				: {}),
			 ...(theme.name === THEMES.ONE_DARK
				? {
					 backgroundColor: theme.palette.text.primary,
				  }
        : {}),
        color: "black",
        fontSize: 16,
        width: "100%",
        // margin: "5px",
        textAlign: "center",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
        padding:"16px 0px 16px 0px",
        

    },
    tableBody: {
      // boxShadow: "0 0 2px black",
      padding:"16px 0px 16px 0px",
			borderBottomLeftRadius: "8px",
			borderBottomRightRadius: "8px",
      borderBottom: "none",
      width: "100%",
      color: theme.palette.text.primary,
			fontSize: 16,
      margin: "5px",
      alignSelf: "center",
      textAlign: "center",
      overflowWrap: "anywhere",
      overflowY:"hidden",
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      overflowX:"hidden",
    },
    text: {
      textAlign: "center"
    }, 
    loader: {
      animationName: "loader",
      animationDuration:"1s",
      animationIterationCount:"infinite"
    },
    '@global': {
          '@keyframes loader' : {
        "0%" : {
          transform: "rotate(0deg)"
        },
      "100%" : {
          transform: "rotate(360deg)"
        }
      }
    },
    parent: {
      width: "100%",
      marginBottom: "10px"
    },
    broker:{
      display:"none"
    },
    // bondBtn : {
    //   margin: "5px",
    //   // padding: '20px 18px',
    //   // fontSize:"1.2rem",
    //   // width: "40%",
    // },
    stepper: {
      color:"#61CFFF"
    },
    inputField: {
      width: "95%",
      margin: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      maxWidth: '95%',
      minWidth: 120,
      "& button": {
        postion: "relative",
        top: "10px"
      }
    },
    toggle: {
      "& span":{
        color: theme.palette.primary.main
      },
    },
    withTip: {
      display: "inline"
    },

}));
