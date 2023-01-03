import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Box,
  Button,
} from "@material-ui/core";
import NewsCard from "../../../components/NewsCard";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    //paddingTop: 300,
    //paddingBottom: 300,
    position: "relative",
    overflow: "hidden",
  },
  containerPadding: {
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
    backgroundColor: theme.palette.primary.main,
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3),
    textTransform: "none",
    height: 65,
    width: 230,
    fontSize: 20,
    "&:hover": {
      backgroundColor: "rgb(33, 118, 178)",
    },
  },
  sectionLightGrayDiagonalTop: {
    position: "absolute",
    left: 0,
    top: "-20px",
    right: 0,
    bottom: "auto",
    width: "110vw",
    height: "200px",
    marginTop: "-50px",
    marginLeft: "-5vw",
    backgroundColor: theme.palette.background.default,
    "-webkit-transform": "rotate( -4deg)",
    "-ms-transform": "rotate(-4deg)",
    transform: "rotate( -4deg )",
  },
  sectionLightGrayDiagonalBottom: {
    position: "absolute",
    left: 0,
    top: "auto",
    right: 0,
    bottom: 0,
    width: "110vw",
    height: "200px",
    marginTop: 0,
    marginBottom: "-100px",
    marginLeft: "-5vw",
    backgroundColor: theme.palette.background.default,
    "-webkit-transform": "rotate( -4deg)",
    "-ms-transform": "rotate(-4deg)",
    transform: "rotate( -4deg )",
  },
}));

function LatestNews({ className, ...rest }) {
  const classes = useStyles();
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/the-zap-project"
    )
      .then((resp) => resp.json())
      .then((blogs) => {
        for (let i = 0; i < blogs.items.length - 1; i++) {
          blogs.items[i].title = blogs.items[i].title.replace("amp;", "");
        }
        setStories(blogs.items);
        console.log(stories);
      });
  }, []);

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      {/* <div className={classes.sectionLightGrayDiagonalTop} /> */}
      {/* <div className={classes.sectionLightGrayDiagonalBottom} /> */}
      <Container maxWidth="lg" className={classes.containerPadding}>
        <Box my={3}>
          <Typography variant="h1" align="center" color="textPrimary">
            <strong>Latest News</strong>
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {stories.length !== 0 ? (
            stories.slice(0, 3).map((entry, key) => (
              <Grid item xs={12} md={4}>
                <NewsCard news={entry} />
              </Grid>
            ))
          ) : (
            <Grid item xs={12} md={4}>
              <Typography variant="h2" align="center" color="textSecondary">
                Unable to connect to blog
              </Typography>
            </Grid>
          )}
        </Grid>
        <Grid my={3} align="center">
          <Button
            className={classes.button}
            href="https://medium.com/the-zap-project"
            variant="contained"
            size="large"
            target="_blank"
          >
            Read More
          </Button>
        </Grid>
      </Container>
    </div>
  );
}

LatestNews.propTypes = {
  className: PropTypes.string,
};

export default LatestNews;
