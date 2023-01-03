import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useHistory } from "react-router";
import {
  Button,
  Box,
  Container,
  colors,
  makeStyles,
} from "@material-ui/core";
import Page from "src/components/Page";
import Logo from "src/components/Logo";
import Login from "src/components/Login"



const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    height: "100%",
    minHeight: "100%",
    flexDirection: "column",
    paddingBottom: 80,
    paddingTop: 80,
  },
  backButton: {
    marginLeft: theme.spacing(2),
  },
  card: {
    overflow: "visible",
    display: "flex",
    position: "relative",
    "& > *": {
      flexGrow: 1,
      flexBasis: "50%",
      width: "50%",
    },
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4),
  },
  icon: {
    backgroundColor: colors.green[500],
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: "absolute",
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64,
  },
  media: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: theme.spacing(3),
    color: theme.palette.common.white,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));



function LoginView() {

  const classes = useStyles();
  const history = useHistory();
 
  const handleSubmitSuccess = () => {
      history.push("/app");
  };

  return (
    <Page className={classes.root} title='Login'>
      <Container maxWidth='md'>
        <Box mb={4} display='flex' alignItems='center'>
          <RouterLink to='/'>
            <Logo />
          </RouterLink>
          <Button component={RouterLink} to='/' className={classes.backButton}>
            Back to home
          </Button>
        </Box>

        <Login onSubmitSuccess={handleSubmitSuccess} />
        
      </Container>
    </Page>
  );
}

export default LoginView;