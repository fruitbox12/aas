import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import FAQS from "../../../../../views/pages/HomeView/FAQS";
import FaqsDocs from "./faqsdocs.mdx";

//Export component to Storybook
const Template = (args) => <FAQS />;

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
   title: "Views/Pages/Home View/FAQs",
   component: FAQS,
   parameters: {
      docs: {
         page: FaqsDocs,
      },
   },
   decorators: [withKnobs],
};
