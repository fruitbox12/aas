import React from "react";
import TopBar from "src/layouts/DashboardLayout/TopBar/";
import { withKnobs } from "@storybook/addon-knobs";
import TopBarDocs from "./topbardocs.mdx"

//Export component to Storybook
const Template = (args) => <TopBar {...args} />;

// A story for testing (see documentation for details)
export const alpha = Template.bind({});
alpha.args = {};
alpha.storyName = "Desktop";
alpha.parameters = {
   viewport: {
      defaultViewport: "xl",
   },
};

export const beta = Template.bind({});
beta.args = {};
beta.storyName = "Mobile";
beta.parameters = {
   viewport: {
      defaultViewport: "sm",
   },
};

// Story data
export default {
   title: "Layouts/Dashboard Layout/Top Bar",
   component: TopBar,
   parameters: {
      docs: {
         page: TopBarDocs,
      },
   },
   decorators: [withKnobs],
};
