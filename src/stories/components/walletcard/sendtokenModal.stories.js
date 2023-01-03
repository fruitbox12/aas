import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import SendTokenModal from "../../../components/walletcard/sendtokenModal";

const Template = (args) => <SendTokenModal {...args} />;

export const alpha = Template.bind({});
alpha.args = {};
alpha.storyName = "Overview";
alpha.parameters = {
  viewport: {
    defaultViewport: "lg",
  },
};

export default {
  title: "components/Wallet Card/Parts/SendToken Modal",
  component: SendTokenModal,
  //   parameters: {
  //     docs: {
  //       page: SendTokenModalDocs,
  //     },
  //   },
  decorators: [withKnobs],
};
