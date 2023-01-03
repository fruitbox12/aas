import React from "react";
import NameCard from "src/components/namecard.js";
import NameCardDocs from "./namecarddocs.mdx";
import { withKnobs } from "@storybook/addon-knobs";

//Export component to Storybook
const Template = (args) => <NameCard {...args} />;

// A story for testing
export const alpha = Template.bind({});
alpha.args = {
   className: "",
   name: "Story Alpha",
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
   title: "components/Name Card",
   component: NameCard,
   parameters: {
      docs: {
         page: NameCardDocs,
      },
   },
   decorators: [withKnobs],
};
