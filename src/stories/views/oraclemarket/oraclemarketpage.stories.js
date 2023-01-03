import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import OracleMarketView from "../../../views/oraclemarket/index.js";
import OracleMarketPageDocs from "./oraclemarketpagedocs.mdx";

//Export component to Storybook
const Template = (args) => <OracleMarketView />;

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
   title: "views/Oracle Market",
   component: <OracleMarketView />,
   parameters: {
      docs: {
         page: OracleMarketPageDocs,
      },
   },
   decorators: [withKnobs],
};
