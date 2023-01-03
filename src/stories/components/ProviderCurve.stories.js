import React from 'react';
import {ProviderCurve} from 'src/components/providercurve/ProviderCurve';

/// This default export determines where you story goes in the story list
export default {
  title: "components/Provider Curve/Provider Curve Default",
  component: ProviderCurve,
};

const Template = (args) => <ProviderCurve {...args} />;

export const alpha = Template.bind({});

alpha.args = {
  editable: false,
  bondedDots: 0,
  bonded: false,
  bonding: false,
  existingCoefficientArray: [
    3,
    223,
    0.006802721088435374,
    -0.0022097274283863206,
    274,
  ],
  // 3, 2072.5856, -0.07528, 0.00009428, 8894
  parentWidth: null,
  parentHeight: null,
  axesOptions: {xAxisTicks: 3, yAxisTicks: 3, showLabels: false},
  zoomFit: 1.1,  
/* the args you need here will depend on your component */
};
alpha.storyName = "Provider Curve";


