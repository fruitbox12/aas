import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";
import Roadmap from 'src/components/roadmap';
import "./roadmap.css"
import $ from "jquery";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 230,
    paddingBottom: 230,
    position: 'relative',
    overflow: 'hidden',
  },
  containerPadding: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  media: {
    height: 140,
  },
  cardStyle: {
    boxShadow: "4.9574px 4.9574px 4.9574px rgba(0, 0, 0, 0.33);",
    padding: theme.spacing(2),
  },
  button: {
    color: theme.palette.text.secondary,
  },
  sectionLightGrayDiagonalTop: {
    position: 'absolute',
    left: 0,
    top: '-20px',
    right: 0,
    bottom: 'auto',
    width: '110vw',
    height: '200px',
    marginTop: '-50px',
    marginLeft: '-5vw',
    backgroundColor: theme.palette.background.default,
    '-webkit-transform': 'rotate( -4deg)',
    '-ms-transform': 'rotate(-4deg)',
    'transform': 'rotate( -4deg )',
  },
  sectionLightGrayDiagonalBottom: {
    position: 'absolute',
    left: 0,
    top: 'auto',
    right: 0,
    bottom: 0,
    width: '110vw',
    height: '200px',
    marginTop: 0,
    marginBottom: '-100px',
    marginLeft: '-5vw',
    backgroundColor: theme.palette.background.default,
    '-webkit-transform': 'rotate( -4deg)',
    '-ms-transform': 'rotate(-4deg)',
    'transform': 'rotate( -4deg )',
  },
}));

function RoadMap({ className, ...rest }) {
  const classes = useStyles();

  $(document).on("mouseenter mouseleave", ".roadmap .content", function (e) {
    if (e.type == "mouseenter") {
      console.log('yeet')
      $(this).children('p').removeClass("roadmap-paragraph");
      $(this).addClass("highlight-roadmap");
    } else {
      $(this).children('p').addClass("roadmap-paragraph");
      $(this).removeClass("highlight-roadmap");
    }
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={classes.sectionLightGrayDiagonalTop} />
      <div className={classes.sectionLightGrayDiagonalBottom} />
      <Container maxWidth="lg" className={classes.containerPadding}>
        <Box my={3}>
          <Typography
            variant="h1"
            align="center"
            color="textPrimary"
          >
            <strong>Q2 RoadMap</strong>
          </Typography>
        </Box>
        <Grid
          direction="column"
          alignItems="center"
          justify="center"
          >
          {/* <Roadmap /> */}
          <div class="roadmap-container desktop">
            <div class="flex justify-content-between align-items-end">
              <div class="roadmap">
                <div class="content">
                  <h2>Coingecko Price Feeds</h2>
                  <p class="roadmap-paragraph">Release of a Zap miner allowing users to stake $ZAP and earn more by solving Proof of Work problems, in turn providing accurate price feeds using the Coingecko (as well as Poloneix and Bitrue) APIs </p>
                </div>
                <div class="line"></div>
                <div class="circle"></div>
              </div>
              <div class="roadmap">
                <div class="content">
                  <h2>L2 Solutions</h2>
                  <p class="roadmap-paragraph">To alleviate the high cost of the main Ethereum chain (layer 1), we are integrating L2 solutions</p>
                </div>
                <div class="line"></div>
                <div class="circle"></div>
              </div>
              <div class="roadmap">
                <div class="content">
                  <h2>Governance</h2>
                  <p class="roadmap-paragraph">Zap Improvement Proposals (or ZIPs) will be introduced to provide the community with a system for governance inside the Zap ecosystem. Anyone has the ability to create a ZIP which undergoes review</p>
                </div>
                <div class="line"></div>
                <div class="circle"></div>
              </div>  
            </div>
            <div class="axis"></div>
            <div class="flex second justify-content-center infrastructure">
              <div class="roadmap">
                <div class="circle"></div>
                <div class="line"></div>
                <div class="content">
                  <h2>Non-Fungible Token (NFTs) Factory</h2>
                  <p class="roadmap-paragraph">Similar to the Token (ERC20) Factory, a Non-Fungible Token (ERC721) Factory will be implemented, allowing users to tie their music, art, etc. to the Zap bonding curve mechanism</p>
                </div>
              </div>
              <div class="roadmap">
                <div class="circle"></div>
                <div class="line"></div>
                <div class="content">
                  <h2>Cross-Chain Bridge</h2>
                  <p class="roadmap-paragraph">Utilization of cross-chain solutions with Zap will be implemented to address scaling and connectivity</p>
                </div>
              </div>  
            </div>
          </div>
          <div class="roadmap-container mobile">
            <div class="roadmap">
              <div class="line-container">
                <div class="circle outer"><div class="circle"></div></div>
                <div class="line"></div>  
              </div>
              <div class="content">
                <h2>Coingecko Price Feed</h2>
                <p class="roadmap-paragraph">Release of a Zap miner allowing users to stake $ZAP and earn more by solving Proof of Work problems, in turn providing accurate price feeds using the Coingecko (as well as Poloneix and Bitrue) APIs </p>
              </div>
            </div>
            <div class="roadmap">
              <div class="dash"></div>
              <div class="line-container">
                <div class="circle outer"><div class="circle"></div></div>
                <div class="line"></div>  
              </div>
              <div class="content">
                <h2>L2 Solutions</h2>
                  <p class="roadmap-paragraph">To alleviate the high cost of the main Ethereum chain (layer 1), we are integrating L2 solutions</p>
                </div>
            </div>
            <div class="roadmap">
              <div class="dash"></div>
              <div class="line-container">
                <div class="circle outer"><div class="circle"></div></div>
                <div class="line"></div>  
              </div>
              <div class="content">
                <h2>Governance</h2>
                <p class="roadmap-paragraph">Zap Improvement Proposals (or ZIPs) will be introduced to provide the community with a system for governance inside the Zap ecosystem. Anyone has the ability to create a ZIP which undergoes review</p>
              </div>
            </div>
            <div class="roadmap">
              <div class="dash"></div>
              <div class="line-container">
                <div class="circle outer"><div class="circle"></div></div>
                <div class="line"></div>  
              </div>
              <div class="content">
                <h2>Non-Fungible Token (NFTs) Factory</h2>
                <p class="roadmap-paragraph">Similar to the Token (ERC20) Factory, a Non-Fungible Token (ERC721) Factory will be implemented, allowing users to tie their music, art, etc. to the Zap bonding curve mechanism</p>
              </div>
            </div>
            <div class="roadmap">
              <div class="dash"></div>
              <div class="line-container">
                <div class="circle outer"><div class="circle"></div></div>
                <div class="line"></div>  
              </div>
              <div class="content">
                <h2>Cross-Chain Bridge</h2>
                <p class="roadmap-paragraph">Utilization of cross-chain solutions with Zap will be implemented to address scaling and connectivity</p>
              </div>
            </div>  
          </div>
        </Grid>
      </Container>
    </div>
  );
}

RoadMap.propTypes = {
  className: PropTypes.string,
};

export default RoadMap;
