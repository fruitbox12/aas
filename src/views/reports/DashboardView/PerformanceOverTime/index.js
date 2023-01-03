import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types'; 
import { 
  Card,
  CardHeader,
  CardContent,
  Divider,
  makeStyles
} from '@material-ui/core';
import GenericMoreButton from 'src/components/GenericMoreButton';
// import Chart from './Chart';
import ProviderCurveThumbnail from '../../../../components/providercurve/ProviderCurveThumbnail';

const useStyles = makeStyles(() => ({
  root: {},
  chart: {
    height: '100%'
  }
}));

function PerformanceOverTime({ className, ...rest }) {
  const classes = useStyles();
 
  const editable = false;
  const existingCoefficientArray = [
    4,
    0,
    0,
    0.002962962962962963,
    -0.0000039506172839506175,
    450,
  ];
  const bondedDots = 0;
  const bonded = false;
  const bonding = false;
  const parentWidth = null;
  const parentHeight = null;
  const axesOptions = {xAxisTicks: 5, yAxisTicks: 5, showLabels: true};

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
        action={<GenericMoreButton />}
        title="Performance Over Time"
      />
      <Divider />
      <CardContent>
        {/* <PerfectScrollbar> */}
          {/* <Box minHeight={500} minWidth={500}> */}
            <ProviderCurveThumbnail
              existingCoefficientArray={existingCoefficientArray}
              editable = {editable}
              bondedDots = {bondedDots}
              bonded = {bonded}
              bonding = {bonding}
              parentWidth = {parentWidth}
              parentHeight = {parentHeight}
              axesOptions = {axesOptions}
            />
          {/* </Box> */}
        {/* </PerfectScrollbar> */}
      </CardContent>
    </Card>
  );
}

PerformanceOverTime.propTypes = {
  className: PropTypes.string
};

export default PerformanceOverTime;
