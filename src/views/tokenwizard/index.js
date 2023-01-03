import React from 'react';
import Page from 'src/components/Page';
import {
    Box,
    Container,
    Paper,
    makeStyles
} from '@material-ui/core';
import Header from 'src/views/endpointwizard/header.js';
import TokenWizard from './tokenwizard.js';


// Component Styles
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100%',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    }
}));

//Component Itself
function TokenWizardView() {
    const classes = useStyles();
    return (
        <Page
            className={classes.root}
            title="New Oracle EndPoint Wizard">
            <Container maxWidth={false}>
                <Header title = {"New Token Wizard"} define={"Create a New Token"}/>
                <Box mt={3}>
                    <Paper>
                        <TokenWizard />
                    </Paper>
                </Box>
            </Container>
        </Page>
    );
}

export default TokenWizardView;