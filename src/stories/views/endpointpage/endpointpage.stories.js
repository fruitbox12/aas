import React from "react";
import EndpointPageView from "src/views/endpointpage";
import { withKnobs } from "@storybook/addon-knobs";
import EndPtWizardPageDocs from "./endpointpagedocs.mdx"

//Export component to Storybook
const Template = (args) => <EndpointPageView />;

// A story for testing
export const alpha = Template.bind({});
alpha.args = {};
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
   title: "views/Endpoint Page",
   component: <EndpointPageView />,
   parameters: {
      docs: {
         page: EndPtWizardPageDocs,
      },
   },
   decorators: [withKnobs],
};
