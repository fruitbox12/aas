import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  IconButton,
  Button,
  Box,
  Container,
  Grid,
  Link,
  Typography,
  makeStyles,
  Card
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 300,
    paddingBottom: 260,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.dark,
  },
  logo: {
    margin: '0px 8px',
    color: theme.palette.secondary.contrastText,
    width: '30px',
    height: '30px',
    
  },
  title: {
    marginTop: theme.spacing(2)
  },
  buttonLeftMargin: {
    marginLeft: theme.spacing(2)
  },
  cardDesc: {
    margin: theme.spacing(2),
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
  card: {
    backgroundColor: theme.palette.background.default,
    minHeight: 325,
    border: '1px solid rgba(255, 255, 255, 0.12)',
    boxShadow: "4.9574px 4.9574px 4.9574px rgb(0 0 0 / 33%)",
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

function Features({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >

      <div className={classes.sectionLightGrayDiagonalTop} />
      <div className={classes.sectionLightGrayDiagonalBottom} />
      <Container maxWidth="lg">

        <Typography
          variant="h1"
          align="center"
          color="textPrimary"
        >
          <strong>Build</strong> with <strong>Zap</strong>
        </Typography>
        <Box mt={8}>
          <Grid
            container
            spacing={5}
          >
            <Grid
              item
              xs={12}
              md={4}
            >
              <Card className={classes.card}>
                <Grid
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Typography
                    component="h2"
                    variant="h2"
                    color="textPrimary"
                    align="center"
                    className={classes.title}
                  >
                    <svg width="50" height="50" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.4375 25.875H2.72619C1.77284 25.875 1 25.0889 1 24.1191V3.67188M4.02083 0.5V1.91602C4.02083 2.88575 3.24799 3.67188 2.29464 3.67188H1M4.02083 0.5H17.3988C18.3522 0.5 19.125 1.28613 19.125 2.25586M4.02083 0.5L1 3.67188M9.45833 2.3125V3.72852C9.45833 4.69825 8.68549 5.48438 7.73214 5.48438H6.4375M9.45833 2.3125H22.8363C23.7897 2.3125 24.5625 3.09863 24.5625 4.06836M9.45833 2.3125L6.4375 5.48438M6.4375 5.48438V25.9316C6.4375 26.9014 7.21034 27.6875 8.16369 27.6875H11.875M14.8958 4.125V5.54102C14.8958 6.51075 14.123 7.29688 13.1696 7.29688H11.875M14.8958 4.125H28.2738C29.2272 4.125 30 4.91113 30 5.88086V27.7441C30 28.7139 29.2272 29.5 28.2738 29.5H13.6012C12.6478 29.5 11.875 28.7139 11.875 27.7441V7.29688M14.8958 4.125L11.875 7.29688M16.7299 21.0814L15.6541 23.6365M16.7299 21.0814L24.5919 13.2193M16.7299 21.0814L18.892 23.2434M15.6541 23.6365L15.532 23.9265C15.3952 24.2513 15.722 24.5781 16.0468 24.4414L16.3368 24.3193M15.6541 23.6365L16.3368 24.3193M18.892 23.2434L16.3368 24.3193M18.892 23.2434L26.754 15.3814M24.5919 13.2193L25.0188 12.7925C25.3258 12.4855 25.8236 12.4855 26.1306 12.7925L27.1808 13.8427C27.4878 14.1497 27.4878 14.6475 27.1808 14.9546L26.754 15.3814M24.5919 13.2193L26.754 15.3814M13.6875 19.5312C14.5938 18.1719 16.8594 17.2656 15.5 24.0625" stroke="url(#paint0_linear)" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                    <linearGradient id="paint0_linear" x1="0.58574" y1="15.0004" x2="30.4143" y2="15.0004" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#42AEEA"/>
                    <stop offset="1" stop-color="#05057E"/>
                    </linearGradient>
                    </defs>
                    </svg>
                  <span style={{marginLeft: '10px', verticalAlign: 'top', display: 'inline-block', paddingTop: '10px'}}>
                    Open Source Code
                  </span>
                  </Typography>
                </Grid>
                <Typography
                  component="h2"
                  variant="subtitle1"
                  color="textSecondary"
                  align="center"
                  className={classes.cardDesc}
                >
                  We take pride in putting our open source ethos into practice by encouraging our developer community to review, improve, and build upon the open source software we release. We invite developer and community support! Bounties and rewards are offered for select contributions.
                </Typography>
              </Card>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
            >
              <Card className={classes.card}>
                <Typography
                  component="h2"
                  variant="h2"
                  color="textPrimary"
                  align="center"
                  className={classes.title}
                >
                  <svg width="50" height="50" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 7.5L6.99999 0.5L5.5 5.5H10L2.99999 13.5L4.72726 7.5H0.5Z" fill="url(#paint0_linear)" stroke="url(#paint1_linear)" stroke-width="1px" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                    <linearGradient id="paint1_linear" x1="0.364294" y1="7.00018" x2="10.1357" y2="7.00018" gradientUnits="userSpaceOnUse" width="1px">
                    <stop stop-color="#42AEEA"/>
                    <stop offset="1" stop-color="#05057E"/>
                    </linearGradient>
                    </defs>
                  </svg>
                  <span style={{marginLeft: '10px', verticalAlign: 'top', display: 'inline-block', paddingTop: '10px'}}>
                    Power your Dapps
                  </span>
                </Typography>
                <Typography
                  component="h2"
                  variant="subtitle1"
                  color="textSecondary"
                  align="center"
                  className={classes.cardDesc}
                >
                  Zap Protocol provides the decentralized tools and marketplace necessary to power your Dapps. Whether needing valuable data feeds or issuing a new token, Zap Protocol is the bonding curve solution for all your DeFi application needs.
                </Typography>
              </Card>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
            >
              <Card className={classes.card}>
                <Typography
                  component="h2"
                  variant="h2"
                  color="textPrimary"
                  align="center"
                  className={classes.title}
                >
                  <svg width="50" height="50" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.75 2.3125C22.75 1.31148 23.5615 0.5 24.5625 0.5H28.1875C29.1885 0.5 30 1.31148 30 2.3125V4.125C30 5.12602 29.1885 5.9375 28.1875 5.9375H24.5625C23.5615 5.9375 22.75 5.12602 22.75 4.125V3.21875V2.3125Z" fill="url(#paint0_linear)"/>
                    <path d="M22.75 14.0938C22.75 13.0927 23.5615 12.2812 24.5625 12.2812H28.1875C29.1885 12.2812 30 13.0927 30 14.0938V15.9062C30 16.9073 29.1885 17.7188 28.1875 17.7188H24.5625C23.5615 17.7188 22.75 16.9073 22.75 15.9062V15V14.0938Z" fill="url(#paint1_linear)"/>
                    <path d="M11.875 19.5312C11.875 18.5302 12.6865 17.7188 13.6875 17.7188H15.5H17.3125C18.3135 17.7188 19.125 18.5302 19.125 19.5312V21.3438C19.125 22.3448 18.3135 23.1562 17.3125 23.1562H15.5H13.6875C12.6865 23.1562 11.875 22.3448 11.875 21.3438V20.4375V19.5312Z" fill="url(#paint2_linear)"/>
                    <path d="M11.875 8.65625C11.875 7.65523 12.6865 6.84375 13.6875 6.84375H15.5H17.3125C18.3135 6.84375 19.125 7.65523 19.125 8.65625V10.4688C19.125 11.4698 18.3135 12.2812 17.3125 12.2812H15.5H13.6875C12.6865 12.2812 11.875 11.4698 11.875 10.4688V9.5625V8.65625Z" fill="url(#paint3_linear)"/>
                    <path d="M1 14.0938C1 13.0927 1.81148 12.2812 2.8125 12.2812H4.625H6.4375C7.43852 12.2812 8.25 13.0927 8.25 14.0938V15.9062C8.25 16.9073 7.43852 17.7188 6.4375 17.7188H4.625H2.8125C1.81148 17.7188 1 16.9073 1 15.9062V14.0938Z" fill="url(#paint4_linear)"/>
                    <path d="M22.75 25.875C22.75 24.874 23.5615 24.0625 24.5625 24.0625H28.1875C29.1885 24.0625 30 24.874 30 25.875V27.6875C30 28.6885 29.1885 29.5 28.1875 29.5H24.5625C23.5615 29.5 22.75 28.6885 22.75 27.6875V26.7812V25.875Z" fill="url(#paint5_linear)"/>
                    <path d="M11.875 20.4375V21.3438C11.875 22.3448 12.6865 23.1562 13.6875 23.1562H15.5M11.875 20.4375V19.5312C11.875 18.5302 12.6865 17.7188 13.6875 17.7188H15.5M11.875 20.4375H6.4375C5.43648 20.4375 4.625 19.626 4.625 18.625V17.7188M11.875 9.5625V10.4688C11.875 11.4698 12.6865 12.2812 13.6875 12.2812H15.5M11.875 9.5625V8.65625C11.875 7.65523 12.6865 6.84375 13.6875 6.84375H15.5M11.875 9.5625H6.4375C5.43648 9.5625 4.625 10.374 4.625 11.375V12.2812M22.75 26.7812V27.6875C22.75 28.6885 23.5615 29.5 24.5625 29.5H28.1875C29.1885 29.5 30 28.6885 30 27.6875V25.875C30 24.874 29.1885 24.0625 28.1875 24.0625H24.5625C23.5615 24.0625 22.75 24.874 22.75 25.875V26.7812ZM22.75 26.7812H17.3125C16.3115 26.7812 15.5 25.9698 15.5 24.9688V23.1562M22.75 15V15.9062C22.75 16.9073 23.5615 17.7188 24.5625 17.7188H28.1875C29.1885 17.7188 30 16.9073 30 15.9062V14.0938C30 13.0927 29.1885 12.2812 28.1875 12.2812H24.5625C23.5615 12.2812 22.75 13.0927 22.75 14.0938V15ZM22.75 15H15.5M22.75 3.21875V4.125C22.75 5.12602 23.5615 5.9375 24.5625 5.9375H28.1875C29.1885 5.9375 30 5.12602 30 4.125V2.3125C30 1.31148 29.1885 0.5 28.1875 0.5H24.5625C23.5615 0.5 22.75 1.31148 22.75 2.3125V3.21875ZM22.75 3.21875H17.3125C16.3115 3.21875 15.5 4.03023 15.5 5.03125V6.84375M4.625 12.2812H2.8125C1.81148 12.2812 1 13.0927 1 14.0938V15.9062C1 16.9073 1.81148 17.7188 2.8125 17.7188H4.625M4.625 12.2812H6.4375C7.43852 12.2812 8.25 13.0927 8.25 14.0938V15.9062C8.25 16.9073 7.43852 17.7188 6.4375 17.7188H4.625M15.5 12.2812H17.3125C18.3135 12.2812 19.125 11.4698 19.125 10.4688V8.65625C19.125 7.65523 18.3135 6.84375 17.3125 6.84375H15.5M15.5 12.2812V15M15.5 17.7188H17.3125C18.3135 17.7188 19.125 18.5302 19.125 19.5312V21.3438C19.125 22.3448 18.3135 23.1562 17.3125 23.1562H15.5M15.5 17.7188V15" stroke="url(#paint6_linear)" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 14.0938C1 13.0927 1.81148 12.2812 2.8125 12.2812H6.4375C7.43852 12.2812 8.25 13.0927 8.25 14.0938V15.9062C8.25 16.9073 7.43852 17.7188 6.4375 17.7188H2.8125C1.81148 17.7188 1 16.9073 1 15.9062V14.0938Z" stroke="url(#paint7_linear)" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.875 8.65625C11.875 7.65523 12.6865 6.84375 13.6875 6.84375H17.3125C18.3135 6.84375 19.125 7.65523 19.125 8.65625V10.4688C19.125 11.4698 18.3135 12.2812 17.3125 12.2812H13.6875C12.6865 12.2812 11.875 11.4698 11.875 10.4688V8.65625Z" stroke="url(#paint8_linear)" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.75 2.3125C22.75 1.31148 23.5615 0.5 24.5625 0.5H28.1875C29.1885 0.5 30 1.31148 30 2.3125V4.125C30 5.12602 29.1885 5.9375 28.1875 5.9375H24.5625C23.5615 5.9375 22.75 5.12602 22.75 4.125V2.3125Z" stroke="url(#paint9_linear)" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.75 14.0938C22.75 13.0927 23.5615 12.2812 24.5625 12.2812H28.1875C29.1885 12.2812 30 13.0927 30 14.0938V15.9062C30 16.9073 29.1885 17.7188 28.1875 17.7188H24.5625C23.5615 17.7188 22.75 16.9073 22.75 15.9062V14.0938Z" stroke="url(#paint10_linear)" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.875 19.5312C11.875 18.5302 12.6865 17.7188 13.6875 17.7188H17.3125C18.3135 17.7188 19.125 18.5302 19.125 19.5312V21.3438C19.125 22.3448 18.3135 23.1562 17.3125 23.1562H13.6875C12.6865 23.1562 11.875 22.3448 11.875 21.3438V19.5312Z" stroke="url(#paint11_linear)" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.75 25.875C22.75 24.874 23.5615 24.0625 24.5625 24.0625H28.1875C29.1885 24.0625 30 24.874 30 25.875V27.6875C30 28.6885 29.1885 29.5 28.1875 29.5H24.5625C23.5615 29.5 22.75 28.6885 22.75 27.6875V25.875Z" stroke="url(#paint12_linear)" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                    <linearGradient id="paint0_linear" x1="0.58574" y1="15.0004" x2="30.4143" y2="15.0004" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#42AEEA"/>
                    <stop offset="1" stop-color="#05057E"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="0.58574" y1="15.0004" x2="30.4143" y2="15.0004" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#42AEEA"/>
                    <stop offset="1" stop-color="#05057E"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear" x1="0.58574" y1="15.0004" x2="30.4143" y2="15.0004" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#42AEEA"/>
                    <stop offset="1" stop-color="#05057E"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear" x1="0.58574" y1="15.0004" x2="30.4143" y2="15.0004" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#42AEEA"/>
                    <stop offset="1" stop-color="#05057E"/>
                    </linearGradient>
                    <linearGradient id="paint4_linear" x1="0.58574" y1="15.0004" x2="30.4143" y2="15.0004" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#42AEEA"/>
                    <stop offset="1" stop-color="#05057E"/>
                    </linearGradient>
                    <linearGradient id="paint5_linear" x1="0.58574" y1="15.0004" x2="30.4143" y2="15.0004" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#42AEEA"/>
                    <stop offset="1" stop-color="#05057E"/>
                    </linearGradient>
                    <linearGradient id="paint6_linear" x1="0.58574" y1="15.0004" x2="30.4143" y2="15.0004" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#42AEEA"/>
                    <stop offset="1" stop-color="#05057E"/>
                    </linearGradient>
                    <linearGradient id="paint7_linear" x1="0.58574" y1="15.0004" x2="30.4143" y2="15.0004" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#42AEEA"/>
                    <stop offset="1" stop-color="#05057E"/>
                    </linearGradient>
                    <linearGradient id="paint8_linear" x1="0.58574" y1="15.0004" x2="30.4143" y2="15.0004" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#42AEEA"/>
                    <stop offset="1" stop-color="#05057E"/>
                    </linearGradient>
                    <linearGradient id="paint9_linear" x1="0.58574" y1="15.0004" x2="30.4143" y2="15.0004" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#42AEEA"/>
                    <stop offset="1" stop-color="#05057E"/>
                    </linearGradient>
                    <linearGradient id="paint10_linear" x1="0.58574" y1="15.0004" x2="30.4143" y2="15.0004" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#42AEEA"/>
                    <stop offset="1" stop-color="#05057E"/>
                    </linearGradient>
                    <linearGradient id="paint11_linear" x1="0.58574" y1="15.0004" x2="30.4143" y2="15.0004" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#42AEEA"/>
                    <stop offset="1" stop-color="#05057E"/>
                    </linearGradient>
                    <linearGradient id="paint12_linear" x1="0.58574" y1="15.0004" x2="30.4143" y2="15.0004" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#42AEEA"/>
                    <stop offset="1" stop-color="#05057E"/>
                    </linearGradient>
                    </defs>
                  </svg>
                  <span style={{marginLeft: '10px', verticalAlign: 'top', display: 'inline-block', paddingTop: '10px'}}>
                    Connect to Endpoints
                  </span>
                </Typography>
                <Typography
                  component="h2"
                  variant="subtitle1"
                  color="textSecondary"
                  align="center"
                  className={classes.cardDesc}
                >
                  Providers can list and monetize their data on the Zap Oracle Marketplace by utilizing the Endpoint Wizard and Zap Oracle Templates available in multiple programming languages. Subscribers can use the Zap Subscriber Template to incorporate data they purchase into their apps in a step-by-step process                 
                  </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

Features.propTypes = {
  className: PropTypes.string
};

export default Features;
