import React from "react";
import ArgumentCurveBuilder from "../../../../views/endpointwizard/steps/argumentcurvebuilder";
import ArgumentCurveBuilderDocs from "./argumentcurvebuilderdocs.mdx";
import { withKnobs } from "@storybook/addon-knobs";

//Export component to Storybook
const Template = (args) => <ArgumentCurveBuilder {...args} />;

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
   title: "components/Endpoint Wizard/Steps/Argument Curve Builder",
   component: ArgumentCurveBuilder,
   parameters: {
      docs: {
         page: ArgumentCurveBuilderDocs,
      },
   },
   decorators: [withKnobs],
};
