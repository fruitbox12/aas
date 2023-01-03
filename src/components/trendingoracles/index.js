// import React, { useEffect, useState } from "react";
// import { Paper, makeStyles, Box, Container, Slide, Hidden } from "@material-ui/core";
// import Header from "./header";
// import Slider from "src/components/trendingoracles/Slider";

// const useStyles = makeStyles((theme) => ({
//    root: {
//       width: "100%",
//    },
//    container: {
//       textAlign: "center",
//       justifyContent: "center",
//       [theme.breakpoints.down("sm")]: {
//          width:"90vw"
//       },
//       alignItems: "center",
//       paddingBottom: "5vh",
//    },
//    paper: {
//       display: "flex",
//       alignItems: "center",
//       [theme.breakpoints.down("sm")]: {
//          width:"95%",
//          // position:"relative",
//          // left:"-10px"
//       },
//       marginBottom: theme.spacing(2),
//       justifyContent: "space-around",
//       padding: "20px",
//       height: "14vh",
//    },
//    arrow: {
//       height: "30px",
//       cursor: "pointer",
//    },
//    slide: {
//       display: "flex",
//    },
// }));

// const SLIDE_CATEGORIES = [
//    { description: "Trending", id: "dotsBounded" },
//    { description: "DotLimit", id: "dotLimit" },
//    { description: "Popular", id: "dotsIssued" },
// ];

// const TrendingOracles = (props) => {
//    const classes = useStyles();
//    const {
//       allOracles,
//       // tokenMarket
//    } = props;
//    const oracleData = Object.values(allOracles);
//    const [active, setActive] = useState(0);
//    // const [index, setIndex] = useState(0);
//    // const [slideIn, setSlideIn] = useState(true);
//    // const [slideDirection, setSlideDirection] = useState("down");
//    // const [order, setOrder] = useState("desc");
//    // const [orderBy, setOrderBy] = useState(SLIDE_CATEGORIES[index].id);
//    // const [headerDescription, setHeaderDescription] = useState(
//    //    SLIDE_CATEGORIES[index].description
//    // );

//    const index = 0,
//       slideIn = true,
//       slideDirection = "down",
//       order = "desc",
//       orderBy = SLIDE_CATEGORIES[index].id,
//       headerDescription = SLIDE_CATEGORIES[index].description;

//    function descendingComparator(a, b, orderBy) {
//       if (b[orderBy] < a[orderBy]) {
//          return -1;
//       }
//       if (b[orderBy] > a[orderBy]) {
//          return 1;
//       }
//       return 0;
//    }

//    function getComparator(order, orderBy) {
//       return order === "desc"
//          ? (a, b) => descendingComparator(a, b, orderBy)
//          : (a, b) => -descendingComparator(a, b, orderBy);
//    }

//    // Sorting algoirthm used by MUI
//    function stableSort(array, comparator) {
//       const stabilizedThis = array.map((el, index) => [el, index]);
//       stabilizedThis.sort((a, b) => {
//          const order = comparator(a[0], b[0]);
//          if (order !== 0) return order;
//          return a[1] - b[1];
//       });
//       return stabilizedThis.map((el) => el[0]);
//    }

//    function changeTime(){
//       if(active === 2){
//          console.log("active is two")
//          setActive(0)
//       }
//       else {
//          const temp = active + 1
//          console.log(active + 1)
//          setActive(temp)
//       }
//    }

//    useEffect(()=>{
//       const interval = setTimeout(()=>changeTime(), 5000)
      
//       return () => clearTimeout(interval);
//    }, [active])

//    return (
//       <Container maxWidth={false} className={classes.container}>
//          <Box mt={2}>
//             <Header headerDescription={headerDescription} />
//             <Paper className={classes.paper}>
//                <Slide
//                   in={slideIn}
//                   direction={slideDirection}
//                   className={classes.slide}
//                   mountOnEnter
//                   unmountOnExit>
//                   <div>
//                      {stableSort(oracleData, getComparator(order, orderBy))
//                         .slice(0, 3)
//                         .map((oracle,index) => {
//                            console.log(index, "index")
//                            return (index === active ? <Slider key = {index} oracle={oracle} /> : <Hidden mdDown> <Slider key ={index} oracle={oracle} /> </Hidden>);
//                         })}
//                   </div>
//                </Slide>
//             </Paper>
//          </Box>
//       </Container>
//    );
// };
// export default TrendingOracles;