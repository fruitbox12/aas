import React from "react";
import EndpointDetails from "../../../../views/endpointwizard/steps/endpointdetails";
import { withKnobs } from "@storybook/addon-knobs";
import EndpointDetailsDocs from "./endptdetailsdocs.mdx";

//Export component to Storybook
const Template = (args) => <EndpointDetails {...args} />;

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
   title: "components/Endpoint Wizard/Steps/Endpoint Details",
   component: EndpointDetails,
   parameters: {
      docs: {
         page: EndpointDetailsDocs,
      },
   },
   decorators: [withKnobs],
};
