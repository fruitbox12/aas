import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import QrModalDocs from "./qrmodaldocs.mdx";
import QrModal from "../../../components/walletcard/qrmodal";

//Export component to Storybook
const Template = (args) => <QrModal {...args} />;

// A story for testing (see documentation for details)
export const alpha = Template.bind({});
alpha.args = {
   address: "0x6781a0f84c7e9e846dcb84a9a5bd49333067b104",
   handleClose: () => {},
   open: true,
};
alpha.storyName = "Overview";
alpha.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

// Story data
export default {
   title: "components/Wallet Card/Parts/QR Modal",
   component: QrModal,
   parameters: {
      docs: {
         page: QrModalDocs,
      },
   },
   decorators: [withKnobs],
};
