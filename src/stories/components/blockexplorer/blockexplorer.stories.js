import React from "react";
import BlockExplorer from "src/components/blockexplorer/index.js";
import BlockExplorerDocs from "./blockexplorerdocs.mdx";
import { withKnobs } from "@storybook/addon-knobs";

//Export component to Storybook
const Template = (args) => <BlockExplorer {...args} />;

// A story for testing
export const alpha = Template.bind({});
alpha.args = {
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
   title: "components/Block Explorer",
   component: BlockExplorer,
   parameters: {
      docs: {
         page: BlockExplorerDocs,
      },
   },
   decorators: [withKnobs],
};
