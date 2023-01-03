import React from "react";
import EndpointWizardView from "../../../views/endpointwizard/index.js";
import { withKnobs } from "@storybook/addon-knobs";
import EndPtWizardPageDocs from "./endptwizardpagedocs.mdx"

//Export component to Storybook
const Template = (args) => <EndpointWizardView />;

// A story for testing
export const alpha = Template.bind({});
alpha.args = {
  
};
alpha.storyName = "Large Viewport";
alpha.parameters = {
   viewport: {
      defaultViewport: "xl",
   },
};

export const beta = Template.bind({});
beta.args = {};
beta.storyName = "Small Viewport";
beta.parameters = {
   viewport: {
      defaultViewport: "sm",
   },
};

// Story data
export default {
   title: "views/Endpoint Wizard",
   component: <EndpointWizardView />,
   parameters: {
      docs: {
         page: EndPtWizardPageDocs,
      },
   },
   decorators: [withKnobs],
};
