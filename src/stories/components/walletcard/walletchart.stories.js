import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import WalletCharDocs from "./walletchartdocs.mdx";
import WalletChart from "../../../components/walletcard/walletchart";

//Export component to Storybook
const Template = (args) => <WalletChart {...args} />;

// A story for testing (see documentation for details)
export const alpha = Template.bind({});
alpha.args = {
   tokens: [1, 3, 5],
};
alpha.storyName = "Overview";
alpha.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

// Story data
export default {
   title: "components/Wallet Card/Parts/Wallet Chart",
   component: WalletChart,
   parameters: {
      docs: {
         page: WalletCharDocs,
      },
   },
   decorators: [withKnobs],
};
