import React, { useRef } from "react";
import { TextField, Grid, Typography, Divider } from "@material-ui/core";
import { useStyles } from "src/views/endpointwizard/styles.js";
//import ProviderAddressDialog from "src/components/dialog/ProviderAddressDialog";
//import TokenNameDialog from "src/components/dialog/TokenNameDialog";
//import TokenSymbolDialog from "src/components/dialog/TokenSymbolDialog";
import {useSelector} from 'react-redux';
//import ProviderTitleDialog from "src/components/ProviderTitleDialog";

const TokenName = ({navBtns, handleChange, info}) => {
    const classes = useStyles();
    const account = useSelector((state) => state.account);
    const btnDisplay = useRef();
    return (
        <Grid className={classes.root} container>
        <Grid className={classes.title} xs={12}>
            <Typography variant="h2" color="textPrimary">
                Token Name
            </Typography>
        </Grid>
            <form className={classes.inputField}>
                <Grid
                alignContent={"center"}
                className={classes.content}
                container
                direction={"column"}
                justify={"space-evenly"}
                xs={12}>
                <Grid 
                    alignContent={"center"}
                    container
                    xs={7}
                    direction="column"
                >
                    <Typography
                        variant="h4"
                        color="inherit"
                    >
                        <strong>Token Name</strong>
                    </Typography>
                    <Typography variant="body1" color="inherit">
                        Choose a name for your token! This will be the full name of your token listed in the marketplace, and cannot be changed after token creation.
                    </Typography>
                    <TextField
                        defaultValue={info.tokenName}
                        // error={emptyEndpoint}
                        // helperText="Endpoint name cannot be empty"
                        fullWidth
                        // hintText={
                        //     "The name of the endpoint you are trying to make a bonding curve for"
                        // }
                        style={{margin: '6px 0px 16px'}}
                        inputProps={{ maxLength: 32 }}
                        label={"Token Name"}
                        onChange={handleChange(
                            "tokenName",
                            "tokenNameEmpty"
                        )}
                        required
                        error={info.tokenNameEmpty}
                        variant="filled"
                    />
                    </Grid>
                    {/* <Grid item xs={1} pl={4} alignContent={"center"}>
                        <TokenNameDialog />
                    </Grid> */}
                    <Divider style={{marginBottom: 12}}/>
                <Grid 
                    alignContent={"center"}
                    container
                    xs={7}
                    direction="column"
                >
                    <Typography
                        variant="h4"
                        color="inherit"
                    >
                        <strong>Token Symbol</strong>
                    </Typography>
                    <Typography variant="body1" color="inherit">
                        Token Symbols are character combinations of 6 or less that are displayed as shorthand representations of each token. Once your token is created this cannot be changed.
                    </Typography>
                    <TextField
                        defaultValue={info.tokenSymbol}
                        error={!info.symbolValid || info.symbolEmpty}
                        helperText={info.symbolValid ? "" : "Token Symbol has to have Length of 6 or less"}
                        fullWidth
                        style={{margin: '6px 0px 6px'}}
                        inputProps={{ maxLength: 6, style: {textTransform: 'uppercase'}  }}
                        label={"Token Symbol"}
                        onChange={handleChange(
                            "tokenSymbol",
                            "symbolEmpty"
                        )}
                        required
                        variant="filled"
                    />
                    </Grid>
                    {/* <Grid item xs={1} pl={4} alignContent={"center"}>
                        <TokenSymbolDialog />
                    </Grid> */}
                </Grid>
            </form>
            <Grid
                ref={btnDisplay}
                container
                direction={"row"}
                item
                justify={"flex-end"}
                xs={12}>
                {navBtns}
            </Grid>
      </Grid>
   );
};

export default TokenName;
