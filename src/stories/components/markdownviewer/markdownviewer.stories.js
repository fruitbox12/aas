import React from "react";
import MarkdownViewer from "src/components/markdownviewer.js";
import MarkdownViewerDocs from "markdownviewerdocs.mdx";
import { withKnobs } from "@storybook/addon-knobs";

//Export component to Storybook
const Template = (args) => <MarkdownViewer {...args} />;

// A story for testing
export const alpha = Template.bind({});
alpha.args = {
   className: "",
   file: "src/views/docs/faq/Content.mdx",
};
alpha.storyName = "Large Viewport";
alpha.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

export const beta = Template.bind({});
beta.args = {};
beta.storyName = "Small Viewport";
beta.parameters = {
   viewport: {
      defaultViewport: "sm",
   },
};

// Story data
export default {
   title: "components/Markdown Viewer",
   component: MarkdownViewer,
   parameters: {
      docs: {
         page: MarkdownViewerDocs,
      },
   },
   decorators: [withKnobs],
};
