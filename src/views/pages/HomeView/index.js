import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Hero from './Hero';
import Features from './Features';
import LatestNews from './LatestNews';
import FAQS from './FAQS';
import FOOTER from './FOOTER';
import SmartDataStrip from './smartdatastrip';
import EarnTrustStrip from './earntruststrip';
import Videos from './Videos';
import SocialStrip from "./socialstrip.js";
import JoinUs from './JoinUs';
import RoadMap from './RoadMap';
import Widget from './Widget';

const useStyles = makeStyles(() => ({
  root: {},
}));

function HomeView() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Home"
    >
      <Hero />
      <SmartDataStrip />
      {/* <EarnTrustStrip /> */}
      <Widget />
      <Videos />
      <Features />
      <JoinUs />
      {/* <SocialStrip /> */}
      <RoadMap />
      <LatestNews />
      {/* <FAQS /> */}
      <FOOTER />
    </Page>
  );
}

export default HomeView;
