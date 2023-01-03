import React from "react";
import ProviderDetailsCard from "src/components/providerdetailscard.js";
import ProviderDetailsCardDocs from "./providerdetailscarddocs.mdx";
import { withKnobs } from "@storybook/addon-knobs";

//Export component to Storybook
const Template = (args) => <ProviderDetailsCard {...args} />;

// A story for testing
export const alpha = Template.bind({});
alpha.args = {
   className: "",
   providerAddress: "0x3435",
   providerName: "Alpha Story",
   numEndpts: 5
};
alpha.storyName = "Large Viewport";
alpha.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

export const beta = Template.bind({});
beta.args = {...alpha.args};
beta.storyName = "Small Viewport";
beta.parameters = {
   viewport: {
      defaultViewport: "sm",
   },
};

// Story data
export default {
   title: "components/Provider Details Card",
   component: ProviderDetailsCard,
   parameters: {
      docs: {
         page: ProviderDetailsCardDocs,
      },
   },
   decorators: [withKnobs],
};
