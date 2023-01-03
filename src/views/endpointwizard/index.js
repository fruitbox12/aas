import React from 'react';
import Page from 'src/components/Page';
import {
    Box,
    Container,
    Paper,
    makeStyles
} from '@material-ui/core';
import Header from './header';
import Wizard from './wizard';


// Component Styles
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100%',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    }
}));

//Component Itself
function EndpointWizardView() {
    const classes = useStyles();
    return (
        <Page
            className={classes.root}
            title="New Oracle EndPoint Wizard">
            <Container maxWidth={false}>
                <Header define={"List A New Oracle Endpoint"} title ={"New Endpoint Wizard"}/>
                <Box mt={3}>
                    <Paper>
                        <Wizard />
                    </Paper>
                </Box>
            </Container>
        </Page>
    );
}

export default EndpointWizardView;