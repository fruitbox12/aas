import React from "react";
import ZapLoader from "src/views/endpointwizard/steps/zaploader.js";
import ZapLoaderDocs from "./zaploaderdocs.mdx";
import { withKnobs } from "@storybook/addon-knobs";

//Export component to Storybook
const Template = (args) => <ZapLoader {...args} />;

// A story for testing
export const alpha = Template.bind({});
alpha.args = {
};
alpha.storyName = "Large Viewport";
alpha.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

export const beta = Template.bind({});
beta.args = {...alpha.args};
beta.storyName = "Small Viewport";
beta.parameters = {
   viewport: {
      defaultViewport: "sm",
   },
};

// Story data
export default {
   title: "components/Zap Loader",
   component: ZapLoader,
   parameters: {
      docs: {
         page: ZapLoaderDocs,
      },
   },
   decorators: [withKnobs],
};