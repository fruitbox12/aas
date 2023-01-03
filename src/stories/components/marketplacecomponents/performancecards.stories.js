import React from 'react';
import PerformanceCards from '../../../components/performancecards';
import PerformanceCardsDocs from './performancecardsdocs.mdx';

const Template = (args) => <PerformanceCards {...args} />;

export const alpha = Template.bind({});

export default {
    component: PerformanceCards,
    title: 'components/Oracle Market Place Components/Performance Cards',
    parameters: {
        docs: {
            page: PerformanceCardsDocs
        },
        viewport: {
            defaultViewport: "lg",
        },
    }
};