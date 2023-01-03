import React from "react";
import AddProviderModal from "src/components/addProviderModal.js";
import AddProviderModalDocs from "addprovidermodaldocs.mdx";
import { withKnobs } from "@storybook/addon-knobs";

//Export component to Storybook
const Template = (args) => <AddProviderModal {...args} />;

// A story for testing
export const alpha = Template.bind({});
alpha.args = {
   className: "",
   open: "true",
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
   title: "components/Add Provider Modal",
   component: AddProviderModal,
   parameters: {
      docs: {
         page: AddProviderModalDocs,
      },
   },
   decorators: [withKnobs],
};
