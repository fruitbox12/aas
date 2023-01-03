import React from "react";
import DragCurveBuilder from "../../../../views/endpointwizard/steps/dragcurvebuilder";
import { withKnobs } from "@storybook/addon-knobs";
import DragCurveBuilderDocs from "./dragcurvebuilderdocs.mdx";

//Export component to Storybook
const Template = (args) => <DragCurveBuilder {...args} />;

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
   title: "components/Endpoint Wizard/Steps/Drag Curve Builder",
   component: DragCurveBuilder,
   parameters: {
      docs: {
         page: DragCurveBuilderDocs,
      },
   },
   decorators: [withKnobs],
};
