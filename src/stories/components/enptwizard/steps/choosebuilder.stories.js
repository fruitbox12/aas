import React from "react";
import ChooseBuilder from "../../../../views/endpointwizard/steps/choosebuilder";
import { withKnobs } from "@storybook/addon-knobs";
import ChooseBuilderDocs from "./choosebuilderdocs.mdx";

//Export component to Storybook
const Template = (args) => <ChooseBuilder {...args} />;

// A story for testing (see documentation for details)
export const alpha = Template.bind({});
alpha.args = {
   values: { privder: {} },
   handleChange: () => {},
};
alpha.storyName = "view";
alpha.parameters = {
   viewport: {
      defaultViewport: "sm",
   },
};

// Story data
export default {
   title: "components/Endpoint Wizard/Steps/Choose Builder",
   component: ChooseBuilder,
   parameters: {
      docs: {
         page: ChooseBuilderDocs,
      },
   },
   decorators: [withKnobs],
};
