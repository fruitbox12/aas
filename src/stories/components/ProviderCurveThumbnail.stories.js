import React from 'react';
import ProviderCurveThumbnail from 'src/components/providercurve/ProviderCurveThumbnail';

/// This default export determines where you story goes in the story list
export default {
  title: "components/Provider Curve/Provider Curve Thumbnail",
  component: ProviderCurveThumbnail,
};

const Template = (args) => <ProviderCurveThumbnail {...args} />;

export const alpha = Template.bind({});

alpha.args = {
  existingCoefficientArray: [
    3,
    223,
    0.006802721088435374,
    -0.0022097274283863206,
    274,
  ],
  editable: false,
  bondedDots: 0,
  bonded: false,
  bonding: false,
  parentWidth: null,
  parentHeight: null,
  axesOptions: {xAxisTicks: 3, yAxisTicks: 3, showLabels: false},
  zoomFit: 1.1,
};
alpha.storyName = "Provider Curve Thumbnail";