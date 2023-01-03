import React from "react";
import SocialStrip from "../../../../../views/pages/HomeView/socialstrip";
import { withKnobs } from "@storybook/addon-knobs";
import SocialsDocs from "./socialsdocs.mdx";

//Export component to Storybook
const Template = (args) => <SocialStrip {...args} />;

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
   title: "Views/Pages/Home View/Social Strip",
   component: SocialStrip,
   parameters: {
      docs: {
         page: SocialsDocs,
      },
   },
   decorators: [withKnobs],
};
