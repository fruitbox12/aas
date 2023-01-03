import React, { useReducer, createContext, useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Grid, Typography, TextField } from "@material-ui/core/";
// import CreateIcon from '@material-ui/icons/Create';
// import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { useStyles} from "src/utils/providerCurveUtil.js";
import CoefficientArrayDialog from 'src/components/dialog/CoefficientArrayDialog';
import ProviderCurveSvg from 'src/components/providercurve/ProviderCurveSvg';


const initialState = {
   margin: { top: 0, right: 0, bottom: 0, left: 0 },
  //  width: null, // (document.getElementById('svg').parentNode.clientWidth),
  //  height: null, //parentHeight || (document.getElementById('svg').parentNode.clientHeight),
   pointsOriginal: [],
   points: [],
   coefficientArray: [],
   k: 0, /// Tracks number of previous control points after adding subsequent curves, subtracting overlap
   numActivePoints: 0,
   initialCoefficientArrayInput: 0,
   previousNumActivePoints: 0,
   previewCurveOn: false, /// Set default for preview curve feature to be false
   addCurveButtonDragging: false, /// When true, click to add control point nullified
   mousePositionX: null,
   freezeGraph: false,
   axesInitialized: false,
   inputChanging: false,
   clickedCoordinates: null,
   pointsPreview: [],
   curveTracingCircleRadius: 6,
   dotSupplyScale: 1,
   zapCostScale: 1,
   zoomFitScaleX: 1,
   zoomFitScaleY: 1,
  formulaValue: "y = x",
   renderOnce: false,
}

function reducer(state, action) {
   return { ...state, ...action };
}

const ProviderCurveContext = createContext();
// let {
//   state: {
//     formulaValue,
//   },
//   dispatch,
// } = useContext(ProviderCurveContext);

const ProviderCurve = (props) => {
  const classes = useStyles();
  const { editable, values } = props;
  const initialWidth = !props.splash ? null : window.screen.width > 650 ? 600 : 250;
  const initialHeight = !props.splash ? null : window.screen.width > 650 ? 400 : 250;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight);
  const [formula] = useState("y = x");
  // const [formulaInputProps, setFormulaInputProps] = useState({
  //   readOnly: true,
  // });
  // const [editingFormula, setEditingFormula] = useState(false);
  const curveFormulaRef = useRef();
  const maxXAxisRef = useRef();
  const maxYAxisRef = useRef();

  // const handleClick = () => {
  //   console.log("click handled")
  //   console.log(editingFormula)
  //   setFormulaInputProps({
  //     readOnly: false,
  //   })
  //   setEditingFormula(true);
  // }

  // const changeFormula = (e) => {
  //   // console.log(e.target.value)
  //   setFormula(e.target.value)
  // }

  // const handleClickAway = (e) => {
  //   // console.log(editingFormula, e.target, formulaRef.current.children[1].children[0]);
  //   if (e.target !== curveFormulaRef.current.children[1].children[0]) {
  //     setEditingFormula(false);
  //     setFormulaInputProps({
  //       readOnly: true,
  //     })
  //   }
  //   console.log("clicked away")
  // }

  /* Use Parent's width and height to set svg's dimensions
  Don't render svg the first time as parent height and width
  not yet determined */
  let element = useRef();
  useEffect(() => {
    if (!window.screen.width > 650) {
      setHeight(props.parentHeight)
      setWidth(props.parentWidth)
      return
    }
    if (element) {
      let rect = element.current.getBoundingClientRect();
      console.log(rect)
      console.log(element.current)
      props.bonded ? setHeight(rect.height) : setHeight(rect.height);
      props.bonded ? setWidth(rect.width) : setWidth(rect.width);
      // setHeight(600)
      // setWidth(800)
      console.log(height, width)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element])

  useEffect(() => {
    if (maxXAxisRef.current && values) {
      maxXAxisRef.current.style.minWidth = `${String(props.values.maxXAxis).length}ch`;
      maxYAxisRef.current.style.minWidth = `${String(props.values.maxYAxis).length}ch`;
      curveFormulaRef.current.style.minWidth = `${String(props.values.curveFormula).length}ch`;
    }
  })

  return (
    <ProviderCurveContext.Provider value={{ state, dispatch }}>
      {props.children}
      <React.Fragment>
        <Grid
          className={props.splash ? classes.splashContainer : classes.container}
          container
          direction={"row"}
          xs={12}
          id="container"
          alignItems={"center"}
        >
          <Grid container direction={"column"} className={classes.subContainer} xs={props.editable && !props.splash ? 9 : 12} alignItems={"center"} ref={element}>
            
            {height && width ?
              <ProviderCurveSvg props={props} _parentHeight={height} _parentWidth={width} />
              : null}
            {editable && values ?
              <Grid className={classes.maxYAxisField}>
                <TextField
                  defaultValue={values.maxYAxis}
                  fullWidth
                  // label={"Maximum y-axis"}
                  type={"number"}
                  id="maxYAxis"
                  inputProps={{ min: 1, max: 100000000 }}
                  // onChange={handleChange("maxYAxis")}
                  variant={"outlined"}
                  ref={maxYAxisRef}
                />
              </Grid>
            : null }
            {editable && values ?
              <Grid className={classes.maxXAxisField}>
                <TextField
                  defaultValue={values.maxDots}
                  fullWidth
                  // label={"Maximum x-axis"}
                  type={"number"}
                  id="maxXAxis"
                  inputProps={{ min: 1, max: 1000000000 }}
                  // onChange={handleChange("maxDots")}
                  ref={maxXAxisRef}
                  variant={"outlined"}
                />
              </Grid>
            : null }
          </Grid>

          {editable && values ? (
            <Grid
              alignItems={"stretch"}
              className={classes.sidebar}
              container
              direction={window.screen.width < 650 ? "row" : "column"}
              justify={"space-around"}
              id={"sidebar"}
              xs={4}
              sm={window.screen.width < 650 ? 12 : 3}>
              <Button
                id="templateA"
                className={classes.selectTemplate}
                color={"primary"}
                variant={"outlined"}
                value="stable">
                <Typography className={classes.chartText}></Typography>
                <img
                  src="/static/images/Stable.svg"
                  alt="stable template"
                />
              </Button>

              <Button
                id="templateB"
                className={classes.selectTemplate}
                color={"primary"}
                variant={"outlined"}
                value="linear-positive">
                <Typography className={classes.chartText}></Typography>
                <img
                  src="/static/images/linear.svg"
                  alt="linear template"
                />
              </Button>

              <Button
                id="templateC"
                className={classes.selectTemplate}
                color={"primary"}
                variant={"outlined"}
                value="incentivize-early-adoption">
                <Typography className={classes.chartText}></Typography>
                <img
                  src="/static/images/earlyAdoption.svg"
                  alt="early adoption template"
                />
              </Button>

              <Grid
                id="enterCoefficientArray"
                className={classes.enterCoefficientArray}></Grid>
              <Typography
                id="bondedDotsInfo"
                className={classes.bondedDotsInfo}
                align={"right"}></Typography>
              <Typography
                id="bondedDotsDifference"
                className={classes.bondedDotsDifference}></Typography>
              <Typography
                id="newDotsDifference"
                className={classes.newDotsDifference}></Typography>
            </Grid>
          ) : null}
          {editable ? (
            <Grid
              alignItems={"stretch"}
              className={!props.splash ? classes.bottombar : classes.splashBottomBar}
              container
              direction={"row"}
              justify={"space-around"}
              id={"bottombar"}
              xs={12}>
              {editable? (
                <>
                  <Typography
                    color="textPrimary"
                    id="curveFormula"
                    className={classes.formulaStyle}
                    variant={window.screen.innerWidth > 960 ? "h2" : "h4" }
                    align="center"
                  >
                  </Typography>
                  <Grid container item direction="row" className={classes.formulaStyleGrid}>
                    {!props.splash ? (
                      <Grid container item direction="row" className={classes.formulaStyleRow}>
                        <TextField
                          label="Bonding Curve"
                          id="curveFormulaInput"
                          className={classes.formulaStyle}
                          size="medium"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          // onChange={changeFormula}
                          defaultValue={ formula }
                          // InputProps={formulaInputProps}
                          variant="outlined"
                          ref={curveFormulaRef}
                        />
                        <div className={classes.coefficientArrayDialogueButton}>
                          <CoefficientArrayDialog tokenSymbol={props.tokenSymbol}/>
                        </div>
                      </Grid>
                    ) :
                      null
                    }
                  </Grid>
                  
                </>
              ) : null
              }

                
              <div
                name="coefficientArray"
                className={classes.coefficientArrayInput}>
                <Typography className={classes.coefficientArrayLabel}>Coefficient Array:</Typography>
                <div className={classes.coefficientArrayInputBox}>
                  <input
                    type="text"
                    placeholder="Enter custom coefficient array"
                    id="coefficientArrayInput"
                    className={classes.coefficientArrayText}></input>
                </div>
                
              </div>
            </Grid>
          ) : null}
        </Grid>
      </React.Fragment>
    </ProviderCurveContext.Provider>
   );
};

ProviderCurve.propTypes = {
   classes: PropTypes.object.isRequired,
   className: PropTypes.string,
};

ProviderCurve.defaultProps = {
   editable: true, /// Default is true - if passed in false, module will become static without buttons
   existingCoefficientArray: [], /// Default is empty - if a coefficient array is passed in, editable will be set to false, curve generated from coefficient array
   bondedDots: 0,
   bonded: false,
   bonding: false,
   parentWidth: null,
   parentHeight: null,
   axesOptions: { xAxisTicks: 5, yAxisTicks: 5, showLabels: true },
   curveId: null,
};

export { ProviderCurveContext, ProviderCurve };
// export default withStyles(styles)(ProviderCurve);
