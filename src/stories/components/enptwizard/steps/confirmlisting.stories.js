import React from "react";
import ConfirmListing from "../../../../views/endpointwizard/steps/confirmlisting";
import { withKnobs } from "@storybook/addon-knobs";
import ConfirmListingDocs from "./confirmlistingdocs.mdx";

//Export component to Storybook
const Template = (args) => <ConfirmListing {...args} />;

// A story for testing (see documentation for details)
export const alpha = Template.bind({});
alpha.args = {
   info: {
      step: 0,
      builder: 0,
      done: 0,
      emptyProvider: false,
      emptyEndpoint: false,
      invalidArray: false,
      provider: "",
      endpoint: "",
      markdownLink: "",
      jsonLink: "",
      curveArray: [],
      arrayErrorMsg: "",
   },
};
alpha.storyName = "view";
alpha.parameters = {
   viewport: {
      defaultViewport: "sm",
   },
};

// Story data
export default {
   title: "components/Endpoint Wizard/Steps/Confirm Listing  ",
   component: ConfirmListing,
   parameters: {
      docs: {
         page: ConfirmListingDocs,
      },
   },
   decorators: [withKnobs],
};
