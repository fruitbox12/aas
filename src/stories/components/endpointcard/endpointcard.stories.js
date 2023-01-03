import React from "react";
import EndpointCard from "src/components/endpointcard.js";
import EndpointCardDocs from "./endpointcarddocs.mdx";
import { withKnobs } from "@storybook/addon-knobs";

//Export component to Storybook
const Template = (args) => <EndpointCard {...args} />;

// A story for testing
export const alpha = Template.bind({});
alpha.args = {
   className: "",
   endptName: "Story Alpha",
   oracleName: "Alpha Provider",
   oracleAddress: "0x6781a0f84c7e9e846dcb84a9a5bd49333067b104",
   coefficientArr: [3,  0, 0, 1, 900],
   markdownLink: "",
   jsonLink: "",
   dotPrice: 42,
   dotsBonded: 264,
   dotLimit: 35,
   dotIssue: 8,
};
alpha.storyName = "Large Viewport";
alpha.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

export const beta = Template.bind({});
beta.args = { ...alpha.args };
beta.storyName = "Small Viewport";
beta.parameters = {
   viewport: {
      defaultViewport: "sm",
   },
};

// Story data
export default {
   title: "components/Endpoint Card",
   component: EndpointCard,
   parameters: {
      docs: {
         page: EndpointCardDocs,
      },
   },
   decorators: [withKnobs],
};
