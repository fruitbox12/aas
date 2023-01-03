import React from "react";
import WalletCard from "../../../components/walletcard";
import { withKnobs } from "@storybook/addon-knobs";
import WalletCardDocs from "./walletcarddocs.mdx"

//Export component to Storybook
const Template = (args) => <WalletCard {...args} />;

// A story for testing (see documentation for details)
export const alpha = Template.bind({});
alpha.args = {};
alpha.storyName = "Overview";
alpha.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

// Story data
export default {
   title: "components/Wallet Card/Full Card",
   component: WalletCard,
   parameters: {
      docs: {
         page: WalletCardDocs,
      },
   },
   decorators: [withKnobs],
};
