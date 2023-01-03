import React from "react";
import BondWizardPageView from "src/views/bondwizard";
import { withKnobs } from "@storybook/addon-knobs";
import BondWizardPageDocs from "./bondwizardpagedocs.mdx";

//Export component to Storybook
const Template = (args) => <BondWizardPageView {...args} />;

// A story for testing
export const alpha = Template.bind({});
alpha.args = {
   match: {
      params: {
         endpt: "0x7a19D7c4a1a8BbA505180b4FE645582ba016650FTadhana%20Token",
      },
   },
};
alpha.storyName = "Large Viewport";
alpha.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

export const beta = Template.bind({});
beta.args = {};
beta.storyName = "Small Viewport";
beta.parameters = {
   viewport: {
      defaultViewport: "m",
   },
};

// Story data
export default {
   title: "views/Bond Wizard Page",
   component: <BondWizardPageView />,
   parameters: {
      docs: {
         page: BondWizardPageDocs,
      },
   },
   decorators: [withKnobs],
};
