import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import ExpandedOracleMarketView from "../../../views/expandedoraclemarket/index.js";
import ExpandedOracleMarketPageDocs from "./expandedoraclemarketpagedocs.mdx";

//Export component to Storybook
const Template = (args) => <ExpandedOracleMarketView />;

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
   title: "views/Expanded Oracle Market",
   component: <ExpandedOracleMarketView />,
   parameters: {
      docs: {
         page: ExpandedOracleMarketPageDocs,
      },
   },
   decorators: [withKnobs],
};
