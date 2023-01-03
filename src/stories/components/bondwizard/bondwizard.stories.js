import React from "react";
import BondWizard from "src/components/bondwizard.js";
import { withKnobs } from "@storybook/addon-knobs";
import BondWizardDocs from "./bondwizarddocs.mdx";

//Export component to Storybook
const Template = (args) => <BondWizard {...args} />;

// A story for testing (see documentation for details)
export const alpha = Template.bind({});
alpha.args = {
   className: "",
   oracleAddress: "0x7a19D7c4a1a8BbA505180b4FE645582ba016650F",
   endpointName: "Tadhana Token",
};
alpha.storyName = "Desktop";
alpha.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

export const beta = Template.bind({});
beta.args = { ...alpha.args };
beta.storyName = "Mobile";
beta.parameters = {
   viewport: {
      defaultViewport: "md",
   },
};

// Story data
export default {
   title: "components/Bond Wizard",
   component: BondWizard,
   parameters: {
      docs: {
         page: BondWizardDocs,
      },
   },
   decorators: [withKnobs],
};
