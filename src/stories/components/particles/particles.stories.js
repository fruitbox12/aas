import React from "react";
import Particles from "../../../views/pages/HomeView/3d/Particles";
import { withKnobs } from "@storybook/addon-knobs";
import ParticlesDocs from "./particlesdocs.mdx"

//Export component to Storybook
const Template = (args) => <Particles {...args} />;

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
   title: "Views/Pages/Home View/Particles",
   component: Particles,
   parameters: {
      docs: {
         page: ParticlesDocs,
      },
   },
   decorators: [withKnobs],
};
