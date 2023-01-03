import React from "react";
import TokenWizardView from "src/views/tokenwizard/tokenwizardview.js";
import { withKnobs } from "@storybook/addon-knobs";
import TokenWizardPageDocs from "./tokenwizardpagedocs.mdx";

//Export component to Storybook
const Template = (args) => <TokenWizardView {...args} />;

// A story for testing
export const alpha = Template.bind({});
alpha.args = {
   listBtn: () => {},
   contractButtons: () => {},
   handleChange: () => {},
   handleDragCurve: () => {},
   handleAxesArgs: () => {},
   errClose: () => {},
   jumpStep: () => {},
   nextStep: () => {},
   prevStep: () => {},
   progToggle: () => {},
   addTokens: () => {},
   state: {
      step: 0,
      done: 0,
      contractStep: 0,
      coordinator: "0xb007eca49763f31edff95623ed6c23c8c1924a16",
      providerName: "Storybook Test Provider",
      providerAlready: true,
      providerAddress: "0x45c27e06564bE11b12F3199FD793fA6b44B2F926",
      proAddEmpty: false,
      proNameEmpty: false,
      tokenSymbol: "",
      symbolValid: true,
      symbolEmpty: false,
      publicKey: 0,
      deployedAddress: "",
      artifact: null,
      artifactName: "TokenDotFactory",
      Instance: "",
      artifactEmpty: true,
      drop: "",
      curveArray: [2, 5, 0, 100],
      userError: false,
      genError: false,
      tokenError: false,
      maxDots: 10000,
      maxYAxis: 10000,
      curveArrayEmpty: false,
      specifier: "Storybook Token",
      specifierEmpty: false,
      tokenName: "",
      tokenNameEmpty: false,
      factoryAddress: "0xe13fef4c8e75c12f9706e8bdf28fe847ce99cb42",
      created: false,
      tokenAddress: "",
      toogle: false,
      reuseTDF: false,
      ownedTDF: [
         {
            oracleTitle: "Storybook Test Provider",
            oracleAddress: "0x7a19D7c4a1a8BbA505180b4FE645582ba016650F",
            oracleParams: [
               "0x54616468616e6120546f6b656e00000000000000000000000000000000000000",
            ],
            brokerAddress: "0x7a19D7c4a1a8BbA505180b4FE645582ba016650F",
            coeffecientArr: [2, 0, 1000000000000000, 10000],
            endpointName: "SB Token",
            dotsBounded: 706,
            dotsIssued: 706,
            dotLimit: 10000,
            pricePerDot: parseFloat("707000000000000000"),
            markdownLink: "",
            jsonSchema: "",
            userDots: 0,
            zapBound: parseFloat(249571000000000000000),
            isToken: true,
            symbol:
               "TT\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000",
            tokenAdd: "0x0056c51E5A8ae49455B727063F71D245aD36cc96",
            tknBal: 480,
            isTDFOwner: true,
         },
         {
            oracleTitle: "Storybook Test Provider COPY 1",
            oracleAddress: "0x7a19D7c4a1a8BbA505180b4FE645582ba016650F",
         },
         {
            oracleTitle: "Storybook Test Provider COPY 2",
            oracleAddress: "0x7a19D7c4a1a8BbA505180b4FE645582ba016650F",
         },
         {
            oracleTitle: "Storybook Test Provider Almost Same",
            oracleAddress: "0x7a19D7c4a1a8BbA50582ba0166",
         },
         {
            oracleTitle: "Storybook Test Provider2",
            oracleAddress: "0x7a19D7c4a1a8BbA50582ba016650F",
         },
         {
            oracleTitle: "Storybook Test Provider3",
            oracleAddress: "0x7a6650F",
         },
      ],
   },
};
alpha.storyName = "Step 0: New DTF";
alpha.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

export const alpha1 = Template.bind({});
alpha1.args = { ...alpha.args, state: { ...alpha.args.state, done: 0, step: 0, reuseTDF: true } };
alpha1.storyName = "Step 0: Reuse DTF";
alpha1.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

export const beta = Template.bind({});
beta.args = { ...alpha.args, state: { ...alpha.args.state, done: 1, step: 1 } };
beta.storyName = "Step 1";
beta.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

export const gamma = Template.bind({});
gamma.args = {
   ...alpha.args,
   state: { ...alpha.args.state, done: 2, step: 2 },
};
gamma.storyName = "Step 2";
gamma.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

export const delta = Template.bind({});
delta.args = {
   ...alpha.args,
   state: { ...alpha.args.state, done: 3, step: 3 },
};
delta.storyName = "Step 3";
delta.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

export const epsilon = Template.bind({});
epsilon.args = {
   ...alpha.args,
   state: { ...alpha.args.state, done: 4, step: 4 },
};
epsilon.storyName = "Step 4a: Initiate Provider";
epsilon.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

export const zeta = Template.bind({});
zeta.args = {
   ...alpha.args,
   state: { ...alpha.args.state, done: 4, step: 4, contractStep: 1 },
};
zeta.storyName = "Step 4b: Deploy Token Dot Factory";
zeta.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

export const eta = Template.bind({});
eta.args = {
   ...alpha.args,
   state: { ...alpha.args.state, done: 4, step: 4, contractStep: 2 },
};
eta.storyName = "Step 4c: Deploy and Mint Tokens";
eta.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

export const theta = Template.bind({});
theta.args = {
   ...alpha.args,
   state: {
      ...alpha.args.state,
      done: 4,
      step: 4,
      contractStep: 3,
      created: true,
   },
};
theta.storyName = "Step 4d: Next Steps";
theta.parameters = {
   viewport: {
      defaultViewport: "lg",
   },
};

// Story data
export default {
   title: "views/Token Wizard",
   component: <TokenWizardView />,
   parameters: {
      docs: {
         page: TokenWizardPageDocs,
      },
   },
   decorators: [withKnobs],
};
