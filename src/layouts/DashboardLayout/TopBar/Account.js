import {
  Box,
  Button,
  ButtonBase,
  Menu,
  MenuItem,
  makeStyles,
  Hidden,
} from "@material-ui/core";
import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "src/actions/accountActions";
import { useHistory } from "react-router";
import { useSnackbar } from "notistack";
import { useContracts } from "src/hooks/contractHooks.js";
import { ethers } from "ethers";
import { updateUser } from "src/actions/accountActions.js";
import Balance from "src/components/Balance";
import ZapBalance from "src/components/ZapBalance";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(1),
  },
  popover: {
    width: 200,
  },
}));

const parseAddress = (address) => {
  return address.slice(0, 7) + "..." + address.slice(38, address.length);
};

const ProviderTitle = () => {
  const [providerTitle, setProviderTitle] = useState("");
  const contracts = useContracts();
  const { registry } = contracts;
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = true;
    if (registry !== null) {
      async function getTitle(address) {
        const title = await registry.getProviderTitle(address);
        const titleString = ethers.utils.parseBytes32String(title);
        setProviderTitle(titleString);
        dispatch(updateUser("providerTitle", titleString));

        const user = JSON.parse(localStorage.getItem("accessToken"));
        localStorage.setItem(
          "accessToken",
          JSON.stringify({ ...user, providerTitle: titleString })
        );
      }
      async function getPublicKey(address) {
        const key = await registry.getProviderPublicKey(address);
        dispatch(updateUser("publicKey", key));

        const user = JSON.parse(localStorage.getItem("accessToken"));
        localStorage.setItem(
          "accessToken",
          JSON.stringify({ ...user, publicKey: key })
        );
      }
      if (mounted) {
        getTitle(account.user.account);
        getPublicKey(account.user.account);
      }
    }
    return () => (mounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account.user.account]);

  return (
    providerTitle && (
      <Button variant="none" color="secondary">
        {`${providerTitle}`}
      </Button>
    )
  );
};

function Account({ balance }) {
  const classes = useStyles();
  const history = useHistory();
  const ref = useRef(null);
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  const { enqueueSnackbar } = useSnackbar();
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    try {
      handleClose();
      await dispatch(logout());
      history.push("/");
    } catch (error) {
      enqueueSnackbar("Unable to logout", {
        variant: "error",
      });
    }
  };

  return (
    <>
      <Box display="flex" alignItems="center" component={ButtonBase} ref={ref}>
        <Button variant="outlined" color="secondary" onClick={handleOpen}>
          {/* {`${account.user.account}`} */}
          {parseAddress(account.user.account)}
        </Button>

        {/* <Hidden smDown>
           <Typography variant='h6' color='inherit'>
             {`${account.user.firstName} ${account.user.lastName}`}
           </Typography>
         </Hidden> */}
        <Hidden only={["md", "sm", "xs"]}>
          <ProviderTitle />
        </Hidden>
      </Box>
      <Menu
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        keepMounted
        PaperProps={{ className: classes.popover }}
        getContentAnchorEl={null}
        anchorEl={ref.current}
        open={isOpen}
      >
        {/* <MenuItem component={RouterLink} to='/app/social/profile'>
           Profile
         </MenuItem> */}
        {/* <MenuItem component={RouterLink} to='/app/account'>
           Account
         </MenuItem> */}
        {/* <MenuItem onClick={walletChange}>Change</MenuItem> */}
        <Hidden only={["lg", "xl"]}>
          <ProviderTitle />
          <ZapBalance />
          <Balance balance={balance} />
        </Hidden>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default Account;
