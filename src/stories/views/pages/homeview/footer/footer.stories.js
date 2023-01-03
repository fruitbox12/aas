import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import FOOTER from "../../../../../views/pages/HomeView/FOOTER";
import FooterDocs from "./footerdocs.mdx";

//Export component to Storybook
const Template = (args) => <FOOTER />;

// A story for testing
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
   title: "Views/Pages/Home View/footer",
   component: FOOTER,
   parameters: {
      docs: {
         page: FooterDocs,
      },
   },
   decorators: [withKnobs],
};
