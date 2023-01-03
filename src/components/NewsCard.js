import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  colors,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PropTypes from "prop-types";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "4.9574px 4.9574px 4.9574px rgba(0, 0, 0, 0.33);",
    padding: theme.spacing(2),
  },
  media: {
    height: 200,
    backgroundColor: theme.palette.background.dark,
  },
  likedButton: {
    color: colors.red[600],
  },
  subscribersIcon: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
  },
  content: {
    maxHeight: 200,
    overflow: "hidden",
  },
  title: {
    height: 40,
  },
}));

function NewsCard({ news, className, ...rest }) {
  const classes = useStyles();

  const getContent = (text) => {
    var span = document.createElement("span");
    span.innerHTML = text;
    return span.textContent || span.innerText;
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
      variant="outlined"
    >
      <CardActionArea href={news.link} target="_blank">
        <CardMedia
          className={classes.media}
          image={news.thumbnail}
          title="Latest News Placeholder Image"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.title}
          >
            {news.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.content}
          >
            {getContent(news.description)}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
            <Box
               display="flex"
               flexDirection="row"
               justifyContent="flex-end"
               width={1}>
               <Button
                  size="small"
                  color={classes.button}
                  variant="outlined"
                  endIcon={<ChevronRightIcon />}
                  href={news.link}>
                  Read more
               </Button>
            </Box>
         </CardActions> */}
    </Card>
  );
}

NewsCard.propTypes = {
  className: PropTypes.string,
  news: PropTypes.object.isRequired,
};

export default NewsCard;
