import React from "react";
import Logo from "../../../components/Logo";
import LogoDocs from "./logodocs.mdx";
import { withKnobs } from "@storybook/addon-knobs";

//Export component to Storybook
const Template = (args) => <Logo {...args} />;

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
   title: "components/ZAP Logo",
   component: Logo,
   parameters: {
      docs: {
         page: LogoDocs,
      },
   },
   decorators: [withKnobs],
};
