import React from "react";
import BetaWarningDialog from "src/components/betawarningdialog.js";
import { withKnobs } from "@storybook/addon-knobs";
import BetaWarningDialogDocs from "./betawarningdocs.mdx";

//Export component to Storybook
const Template = (args) => <BetaWarningDialog {...args} />;

export const alpha = Template.bind({});
alpha.args = {
   className: "",
   open: true,
   handleClose: () => {},
};
alpha.storyName = "Large Viewport";
alpha.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

export const beta = Template.bind({});
beta.args = {
   ...alpha.args,
};
beta.storyName = "Small Viewport";
beta.parameters = {
   viewport: {
      defaultViewport: "sm",
   },
};

// Story data
export default {
   title: "components/Legacy Warning Dialog",
   component: BetaWarningDialog,
   parameters: {
      docs: {
         page: BetaWarningDialogDocs,
      },
   },
   decorators: [withKnobs],
};
