import {
  Box,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
  makeStyles,
} from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";
import { SOCIAL } from "../../../constants/socialmedia";
import SubscribeToNewsLetter from "../../../components/SubscribeToNewsLetter";
// Imports the terms and conditions pdf
import TermsPdf from "../../../assets/pdf/terms.pdf";
import PrivacyPdf from "../../../assets/pdf/privacy.pdf";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
  },
  browseButton: {
    marginLeft: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(0.5),
  },
  padding: {
    padding: theme.spacing(2.5),
    width: '100%'
  },
  sm_icon: {
    //color: theme.palette.sm_icon.primary,
    padding: theme.spacing(0.5),
  },
  socialText: {
    position: "absolute",
  },
  socialIcon: {
    marginTop: 2,
    marginRight: 2,
  },
  subAndLegal: {
    width: 'auto',
    margin: 0,
    marginBottom: theme.spacing(2),
  }
}));

function FOOTER({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg" className={clsx(classes.padding)}>
        <Grid
          container
          direction="row"
          justify="space-around"
          //alignItems="center"
        >
          <Box>
            <Grid
              container
              direction="column"
              justify="space-evenly"
              alignItems="center"
              spacing={4}
              className={classes.subAndLegal}
            >
              <Box>
                <SubscribeToNewsLetter />
              </Box>
              <Typography variant="body1" color="textPrimary" align="center">
                Copyright © Zap 2021
                <Box component="span" mx={2}>
                  |
                </Box>
                <Link
                  href={PrivacyPdf}
                  color="inherit"
                  underline="none"
                  variant="inherit"
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                >
                  Privacy Policy
                </Link>
                <Box component="span" mx={2}>
                  |
                </Box>
                <Link
                  href={TermsPdf}
                  // download
                  color="inherit"
                  underline="none"
                  variant="inherit"
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                >
                  Terms of Use
                </Link>
              </Typography>
            </Grid>
          </Box>

          <Box>
            <Typography variant="body1" color="textPrimary" align="right">
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={3}
              >
                <Grid item>
                  <List>
                    <ListItem>Developers</ListItem>
                    <Typography variant="caption">
                      {/* <ListItem>
                        <Link
                          href="https://github.com/zapproject/zap-ethereum-api"
                          color="inherit"
                          underline="none"
                          variant="inherit"
                          target="_blank"
                        >
                          Ethereum Contracts
                        </Link>
                      </ListItem> */}
                      <ListItem>
                        <Link
                          href="/docs/welcome"
                          color="inherit"
                          underline="none"
                          variant="inherit"
                          target="_blank"
                        >
                          Documentation
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link
                          href="https://github.com/zapproject"
                          color="inherit"
                          underline="none"
                          variant="inherit"
                          target="_blank"
                        >
                          GitHub
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link
                          href="https://github.com/zapproject/pythia"
                          color="inherit"
                          underline="none"
                          variant="inherit"
                          target="_blank"
                        >
                          Zap SDK
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link
                          href="https://github.com/zapproject/zap-term"
                          color="inherit"
                          underline="none"
                          variant="inherit"
                          target="_blank"
                        >
                          CLI Tools
                        </Link>
                      </ListItem>
                    </Typography>
                  </List>
                </Grid>
                <Grid item>
                  <List>
                    <ListItem>Community</ListItem>
                    <Typography variant="caption">
                      {SOCIAL("14px").map((entry) => {
                        if (entry.title !== "GitHub") {
                          return (
                            <ListItem>
                              <Link
                                href={entry.link}
                                color="inherit"
                                underline="none"
                                variant="inherit"
                                justify={"center"}
                                target="_blank"
                              >
                                <span className={classes.socialIcon}>
                                  {" "}
                                  {entry.icon}{" "}
                                </span>
                                <span className={classes.socialText}>
                                  {entry.title}
                                </span>
                              </Link>
                            </ListItem>
                          );
                        }
                      })}
                    </Typography>
                  </List>
                </Grid>
                {/* <Grid item>
                           <List>
                              <ListItem>Info</ListItem>
                              <Typography variant="caption">
                                 <ListItem>
                                    <Link
                                       href="#"
                                       color="inherit"
                                       underline="none"
                                       variant="inherit">
                                       Blog
                                    </Link>
                                 </ListItem>
                                 <ListItem>
                                    <Link
                                       href="#"
                                       color="inherit"
                                       underline="none"
                                       variant="inherit">
                                       FAQ
                                    </Link>
                                 </ListItem>
                                 <ListItem>
                                    <Link
                                       href="#"
                                       color="inherit"
                                       underline="none"
                                       variant="inherit">
                                       About
                                    </Link>
                                 </ListItem>
                                 <ListItem>
                                    <Link
                                       href="#"
                                       color="inherit"
                                       underline="none"
                                       variant="inherit">
                                       Community
                                    </Link>
                                 </ListItem>
                                 <ListItem>
                                    <Link
                                       href="#"
                                       color="inherit"
                                       underline="none"
                                       variant="inherit">
                                       Jobs
                                    </Link>
                                 </ListItem>
                                 <ListItem>
                                    <Link
                                       href="#"
                                       color="inherit"
                                       underline="none"
                                       variant="inherit">
                                       Brand Assets
                                    </Link>
                                 </ListItem>
                              </Typography>
                           </List>
                        </Grid> */}
              </Grid>
            </Typography>
          </Box>
        </Grid>
      </Container>
    </div>
  );
}

FOOTER.propTypes = {
  className: PropTypes.string,
};

export default FOOTER;
