import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles, Grid, Card, CardContent, IconButton } from '@material-ui/core';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#30A9FF',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:  
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      // 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
      theme.palette.primary.main,
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
}));

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  // const icons = {
  //   1: <SettingsIcon />,
  //   2: <GroupAddIcon />,
  //   3: <VideoLabelIcon />,
  // };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: active,
      })}
    >
      {/* {icons[String(props.icon)]} */}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    '&.Mui-disabled': {
        // color: theme.palette.primary.main,
        // opacity: 0.5,
        cursor: "pointer",
    },
    backgroundColor: "transparent"
  },
  horizontal: {
    justifyContent: 'center',
    // background: 'rgb(255 255 255 / 0%);'
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepText: {
    height: 70,
  },
  stepper: {
    cursor: "pointer",
    backgroundColor: "transparent",
  },
  stepInProgress: {
    backgroundColor: theme.palette.primary.main
  }
}));

function getSteps() {
  return ['Coingecko Initial Oracle Offering (IOO)', 'Non-Fungible Token (NFTs) Factory','L2 Solutions', 'Cross-Chain Bridge', 'Governance'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Release of a Zap oracle with fully functional price feeds using the Coingecko API ';
    case 1:
      return 'Similar to the Token (ERC20) Factory, a Non-Fungible Token (ERC721) Factory will be implemented, allowing users to tie their music, art, etc. to the Zap bonding curve mechanism';
    case 2:
      return 'To alleviate the high cost of the main Ethereum chain (layer 1), we are integrating L2 solutions';
    case 3:
      return 'Utilization of cross-chain solutions with Zap will be implemented to address scaling and connectivity';
    case 4:
      return 'Zap Improvement Proposals (or ZIPs) will be introduced to provide the community with a system for governance inside the Zap ecosystem. Anyone has the ability to create a ZIP which undergoes review';
    default:
      return '';
  }
}

export default function Roadmap() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [stepText, setStepText] = React.useState('');

  return (
    <Grid container direction="column" alignItems="center" justify="center" className={classes.root}>
      <Typography variant="h3" color="textSecondary" align="center">
        Beta 2.0 Updates:
      </Typography>
      <Typography variant="h4" color="textSecondary" align="center">
        Introducing the continuous release of the revamped Zap UI!
      </Typography>
      <Grid container item className={classes.horizontal}>
        <Stepper className={classes.stepper} alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
          {steps.map((label, index) => (
            <Step key={label} onClick={() => setStepText(getStepContent(index))} /* className={classes.stepInProgress} */>
              <StepLabel StepIconComponent={QontoStepIcon} >{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
      <Grid 
        item
        xs={6}
      >
        <Typography className={classes.stepText} variant="h5" color="textSecondary">
          {stepText}
        </Typography>
      </Grid>
        
        {/* <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div>
                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div> */}
    </Grid>
  );
}