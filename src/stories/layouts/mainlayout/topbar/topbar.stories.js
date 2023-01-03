import React from "react";
import TopBar from "../../../../layouts/MainLayout/TopBar";
import { withKnobs } from "@storybook/addon-knobs";
import TopBarDocs from "./topbardocs.mdx"

//Export component to Storybook
const Template = (args) => <TopBar {...args} />;

// A story for testing (see documentation for details)
export const alpha = Template.bind({});
alpha.args = {};
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
      defaultViewport: "md",
   },
};

// Story data
export default {
   title: "Layouts/Main Layout/Top Bar",
   component: TopBar,
   parameters: {
      docs: {
         page: TopBarDocs,
      },
   },
   decorators: [withKnobs],
};
