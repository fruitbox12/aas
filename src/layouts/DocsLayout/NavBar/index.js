/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Drawer,
  Hidden,
  List,
  makeStyles
} from '@material-ui/core';
import Logo from 'src/components/Logo';
import NavItem from './NavItem';

const navItems = [
  {
    title: 'General Introduction',
    href: '/docs/intro'
  },
  {
    title: 'Zap Protocol User Guide',
    href: '/docs/userguide'
  },
  {
    title: 'Zap Protocol Technical Overview',
    href: '/docs/technical'
  },
  {
    title: 'Zap Protocol Contracts & Tools',
    href: '/docs/tools'
  },
  // {
  //   title: 'Create an Oracle with Zap Protocol',
  //   href: '/docs/createoracle'
  // },
  {
    title: 'Create Tokenized Products & Services with Zap Protocol',
    href: '/docs/tokenize'
  },
  // {
  //   title: 'FAQ',
  //   href: '/docs/faq'
  // },
  {
    title: 'How to Bond',
    href: '/docs/bonding'
  },
  {
    title: 'How to Unbond',
    href: '/docs/unbonding'
  },
  {
    title: 'How to Approve Zap Tokens',
    href: '/docs/approving'
  },
  {
    title: 'How to List a Tokenized Product or Service',
    href: '/docs/listtoken'
  },
  {
    title: 'How to Redeem a Tokenized Service on Zap Protocol',
    href: '/docs/redeemtoken'
  },
  {
    title: 'How to Track Your Platform Activity',
    href: '/docs/trackactivity'
  },
  // {
  //   title: 'Official Zap Channels',
  //   href: '/docs/social'
  // },
  {
    title: 'Whitepaper',
    href: '/docs/whitepaper'
  },
];

function renderNavItems({ items, ...rest }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, ...rest }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({
  acc,
  item,
  depth = 0
}) {
  if (item.items) {
    acc.push(
      <NavItem
        depth={depth}
        key={item.href}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          items: item.items
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        key={item.href}
        title={item.title}
      />
    );
  }

  return acc;
}

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  }
}));

function NavBar({ openMobile, onMobileClose }) {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Hidden lgUp>
        <Box p={2}>
          <RouterLink to="/">
            <Logo />
          </RouterLink>
        </Box>
      </Hidden>
      <Box p={2}>
        {renderNavItems({ items: navItems })}
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
}

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default NavBar;
