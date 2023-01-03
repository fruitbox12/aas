import React from "react";
import Wizard from "../../../views/endpointwizard/wizard";
import { withKnobs } from "@storybook/addon-knobs";
import EndPtWizardDocs from "./endptwizarddocs.mdx"

//Export component to Storybook
const Template = (args) => <Wizard {...args} />;

// A story for testing (see documentation for details)
export const alpha = Template.bind({});
alpha.args = {};
alpha.storyName = "1: Details";
alpha.parameters = {
   viewport: {
      defaultViewport: "md",
   },
};

export const beta = Template.bind({});
beta.args = {
  state: {
      provider: "Test Provider",
      endpoint: "Test Endpoint",
      step: 1, // 0: details, 1: curve initialization, 2: initialize curve, 3:confirmation
      builder: 0, // 0: choose method, 1: curve dragger, 2: argument array
      done: 1, // Increments with `step` but doesn't decrement to let user jump using wizard nav
  },
};
beta.storyName = "2: Pick Initializer";
beta.parameters = {
   viewport: {
      defaultViewport: "md",
   },
};

export const gamma = Template.bind({});
gamma.args = {
   state: {
      provider: "Test Provider",
      endpoint: "Test Endpoint",
      step: 2, // 0: details, 1: curve initialization, 2: initialize curve, 3:confirmation
      builder: 1, // 0: choose method, 1: curve dragger, 2: argument array
      done: 2, // Increments with `step` but doesn't decrement to let user jump using wizard nav
   },
};
gamma.storyName = "3a: Curve Dragger";
gamma.parameters = {
   viewport: {
      defaultViewport: "md",
   },
};

export const delta = Template.bind({});
delta.args = {
   state: {
      provider: "Test Provider",
      endpoint: "Test Endpoint",
      step: 2, // 0: details, 1: curve initialization, 2: initialize curve, 3:confirmation
      builder: 2, // 0: choose method, 1: curve dragger, 2: argument array
      done: 2, // Increments with `step` but doesn't decrement to let user jump using wizard nav
   },
};
delta.storyName = "3b: Argument Aray";
delta.parameters = {
   viewport: {
      defaultViewport: "md",
   },
};

export const epsilon = Template.bind({});
epsilon.args = {
   state: {
      provider: "Test Provider",
      endpoint: "Test Endpoint",
      step: 3, // 0: details, 1: curve initialization, 2: initialize curve, 3:confirmation
      builder: 1, // 0: choose method, 1: curve dragger, 2: argument array
      done: 3, // Increments with `step` but doesn't decrement to let user jump using wizard nav
   },
};
epsilon.storyName = "4a: Confirm Drag";
epsilon.parameters = {
   viewport: {
      defaultViewport: "md",
   },
};

export const zeta = Template.bind({});
zeta.args = {
   state: {
      provider: "Test Provider",
      endpoint: "Test Endpoint",
      step: 3, // 0: details, 1: curve initialization, 2: initialize curve, 3:confirmation
      builder: 2, // 0: choose method, 1: curve dragger, 2: argument array
      done: 3, // Increments with `step` but doesn't decrement to let user jump using wizard nav
      curveArray: [3,1,1,1,10],
   },
};
zeta.storyName = "4a: Confirm Array";
zeta.parameters = {
   viewport: {
      defaultViewport: "md",
   },
};

// Story data
export default {
   title: "components/Endpoint Wizard/Full Wizard",
   component: Wizard,
   parameters: {
      docs: {
         page: EndPtWizardDocs,
      },
   },
   decorators: [withKnobs],
};
