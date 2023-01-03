import React from 'react';
import Login from '../../../components/Login'
import LoginDocs from "./login.mdx";
import { withKnobs } from "@storybook/addon-knobs";


const Template = args => <Login {...args} />;


export const Default = Template.bind({});
Default.args = {};
Default.storyName = "Login";



// Story data
export default {
   title: "components/Login",
   component: Login,
   parameters: {
      docs: {
         page: LoginDocs,
      },
   },
   decorators: [withKnobs],
};