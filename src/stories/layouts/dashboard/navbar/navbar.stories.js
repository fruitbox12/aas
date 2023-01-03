import React from "react";
import NavBar from "../../../../layouts/DashboardLayout/NavBar/index";
import { withKnobs } from "@storybook/addon-knobs";
import NavBarDocs from "./navbardocs.mdx"

//Export component to Storybook
const Template = (args) => <div><NavBar {...args} /></div>;

// A story for testing (see documentation for details)
export const alpha = Template.bind({});
alpha.args = {};
alpha.storyName = "Overview";
alpha.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

// Story data
export default {
   title: "Layouts/Dashboard Layout/Nav Bar/Full Nav",
   component: NavBar,
   parameters: {
      docs: {
         page: NavBarDocs,
      },
   },
   decorators: [withKnobs],
};
