import React from "react";
import { Hero } from "../../../../../views/pages/HomeView/Hero";
import { withKnobs } from "@storybook/addon-knobs";
import HeroDocs from "./herodocs.mdx";

//Export component to Storybook
const Template = (args) => <Hero {...args} />;

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
   title: "Views/Pages/Home View/Hero",
   component: Hero,
   parameters: {
      docs: {
         page: HeroDocs,
      },
   },
   decorators: [withKnobs],
};
