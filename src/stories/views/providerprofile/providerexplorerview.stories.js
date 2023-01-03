import React from "react";
import ProviderProfile from "src/views/providerprofile";
import { withKnobs } from "@storybook/addon-knobs";
import ProviderExplorerViewDocs from "./providerexplorerviewdocs.mdx"

//Export component to Storybook
const Template = (args) => <ProviderProfile {...args} />;

// A story for testing
export const alpha = Template.bind({});
alpha.args = {providerAddress: "0x1"};
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
   title: "views/Provider Profile View",
   component: <ProviderProfile />,
   parameters: {
      docs: {
         page: ProviderExplorerViewDocs,
      },
   },
   decorators: [withKnobs],
};
