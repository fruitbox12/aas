import React from "react";
import MarketHeaderCell from "../../../components/oraclemarkettable/marketheadercell";
import { withKnobs } from "@storybook/addon-knobs";
import MarketHeaderCellDocs from "./marketheadercelldocs.mdx";

//Export component to Storybook
const Template = (args) => <MarketHeaderCell {...args} />;

// A story for testing (see documentation for details)
export const alpha = Template.bind({});
alpha.args = {
   className: "",
   createSortHandler: () => {},
   disablePadding: false,
   id: "category",
   label: "Alpha",
   numeric: false,
   order: "asc",
   orderBy: "",
};
alpha.storyName = "Default / Not Active";
alpha.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

export const beta = Template.bind({});
beta.args = {
   className: "",
   createSortHandler: () => {},
   disablePadding: false,
   id: "beta",
   label: "Beta",
   numeric: false,
   order: "asc",
   orderBy: "beta",
};
beta.storyName = "Active Ascending";
beta.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

export const gamma = Template.bind({});
gamma.args = {
   className: "",
   createSortHandler: () => {},
   disablePadding: false,
   id: "gamma",
   label: "Gamma",
   numeric: false,
   order: "desc",
   orderBy: "gamma",
};
gamma.storyName = "Active Descending";
gamma.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

// Story data
export default {
   title: "components/Oracle Market Table / Parts / Market Header Cell",
   component: MarketHeaderCell,
   parameters: {
      docs: {
         page: MarketHeaderCellDocs,
      },
   },
   decorators: [withKnobs],
};
