import React from 'react';
import TermsOfService from 'src/components/termsofservice/index';

/// This default export determines where you story goes in the story list
export default {
  title: "components/Terms Of Service",
  component: TermsOfService,
};

const Template = (args) => <TermsOfService {...args} />;

export const alpha = Template.bind({});

alpha.args = {
  /* the args you need here will depend on your component */
};
alpha.storyName = "Terms Of Service";
