import React from "react";
import MarketBodyRow from "../../../components/oraclemarkettable/marketbodyrow";
import { withKnobs } from "@storybook/addon-knobs";
import MarketBodyRowDocs from "./marketbodyrowdocs.mdx";

//Export component to Storybook
const Template = (args) => <MarketBodyRow {...args} />;

// A story for testing (see documentation for details)
export const alpha = Template.bind({});
alpha.args = {
   "name": "Y-Solowarm",
   "bound": 3,
   "price": 23,
   "issued": 99,
   "limit": 72
};
alpha.storyName = "Large Viewport";
alpha.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

export const beta = Template.bind({});
beta.args = {
   ...alpha.args
};
beta.storyName = "Small Viewport";
beta.parameters = {
   viewport: {
      defaultViewport: "sm",
   },
};

// Story data
export default {
   title: "components/Oracle Market Table / Parts / Market Body Row",
   component: MarketBodyRow,
   parameters: {
      docs: {
         page: MarketBodyRowDocs,
      },
   },
   decorators: [withKnobs],
};
