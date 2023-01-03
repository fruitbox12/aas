import React from "react";
import Roadmap from "src/components/roadmap/index.js";
// import RoadmapChartDocs from "./roadmapchartdocs.mdx";
import { withKnobs } from "@storybook/addon-knobs";

//Export component to Storybook
const Template = (args) => <Roadmap {...args} />;

// A story for testing
export const alpha = Template.bind({});
alpha.args = {
};
alpha.storyName = "Large Viewport";
alpha.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

// Story data
export default {
   title: "components/Roadmap",
   component: Roadmap,
   parameters: {
      docs: {
        //  page: RoadmapChartDocs,
      },
   },
   decorators: [withKnobs],
};
