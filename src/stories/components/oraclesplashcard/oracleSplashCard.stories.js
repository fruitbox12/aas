import React from "react";
import SplashOracles from "../../../components/splashoracles";
import { withKnobs } from "@storybook/addon-knobs";
//import oracleSplashCardDocs from "../components/"

//Export component to Storybook
const Template = (args) => <SplashOracles {...args} />;

export const SplashTemplate = Template.bind({});

// Story data
export default {
   title: "components/Splash Oracle Card",
   component: SplashOracles,
   decorators: [withKnobs],
};
