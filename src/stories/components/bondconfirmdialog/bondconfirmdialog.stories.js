import React from "react";
import BondConfirmDialog from "src/components/bondconfirmdialog.js";
import { withKnobs } from "@storybook/addon-knobs";
import BondConfirmDialogDocs from "./bondconfirmdialogdocs.mdx";

//Export component to Storybook
const Template = (args) => <BondConfirmDialog {...args} />;

// A story for testing (see documentation for details)
export const alpha = Template.bind({});
alpha.args = {
   className: "",
   dots: 543,
   handleAccept: () => {},
   handleCancel: () => {},
   mode: "Bond",
   open: true,
   tsx: null,
   tsxEnum: {
      0: "Standby",
      1: "Sent",
      2: "Confirmed",
   },
   tsxState: "Standby",
   zap: 5434,
};
alpha.storyName = "Standby";
alpha.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

export const beta = Template.bind({});
beta.args = { ...alpha.args, tsxState: "Sent" };
beta.storyName = "Sent";
beta.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

export const gamma = Template.bind({});
gamma.args = { ...alpha.args, tsxState: "Confirmed" };
gamma.storyName = "Confirmed";
gamma.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

export const delta = Template.bind({});
delta.args = { ...alpha.args, mode: "Unbond" };
delta.storyName = "Unbond";
delta.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

// Story data
export default {
   title: "components/Bond Confirm Dialog",
   component: BondConfirmDialog,
   parameters: {
      docs: {
         page: BondConfirmDialogDocs,
      },
   },
   decorators: [withKnobs],
};
