import React, { useState, useRef } from 'react';
import {
  Button,
  ListItem,
  Popover,
  Typography,
  Box,
  Switch,
  FormControlLabel,
  TextField,
  makeStyles
} from '@material-ui/core';
import { Settings as SettingsIcon } from "react-feather";
import useSettings from "src/hooks/useSettings";
import { capitalCase } from "change-case";
import { THEMES } from "src/constants";

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: theme.palette.text.secondary,
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%'
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    minWidth: '20px',
    maxWidth: '20px',
    marginRight: '2px',
    marginLeft: '2px'
  },
  title: {
    marginRight: 'auto',
    marginLeft: '8px'
  },
  active: {
    color: theme.palette.secondary.main,
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '& $icon': {
      color: theme.palette.secondary.main
    }
  },
  popover: {
    width: 320,
    padding: theme.spacing(2),
    // eslint-disable-next-line no-dupe-keys
    padding: 60
  },
}));

function Settings({ title }) {
  const classes = useStyles();
  const { settings, saveSettings } = useSettings();
  const [isOpen, setOpen] = useState(false);
  const [values, setValues] = useState({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    theme: settings.theme,
  });
  const ref = useRef(null);

  let padding = 10;
  let minWidth = 44;
  let borderRadius = 8;

  let style = { padding, minWidth };
  if (title === null) style = { padding, minWidth, borderRadius };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (field, value) => {
    setValues({
      ...values,
      [field]: value,
    });
  };

  const handleSave = () => {
    saveSettings(values);
    setOpen(false);
  };

  return (
    <div ref={ref}>
      <ListItem
        className={classes.item}
        disableGutters
        key={'Settings'}
      >
        <Button
          activeClassName={classes.active}
          className={classes.button}
          exact
          style={style}
          onClick={handleOpen}
        >
          <SettingsIcon
            className={classes.icon}
          />
          <span className={classes.title}>
            {title}
          </span>
        </Button>
      </ListItem>
      <Popover
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        classes={{ paper: classes.popover }}
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
      >
        <Typography variant="h4" color="textPrimary">
          Settings
        </Typography>
        <Box mt={2} px={1}>
          <FormControlLabel
            control={
              <Switch
                checked={values.direction === "rtl"}
                edge="start"
                name="direction"
                onChange={(event) =>
                  handleChange(
                    "direction",
                    event.target.checked ? "rtl" : "ltr"
                  )
                }
              />
            }
            label="RTL"
          />
        </Box>
        <Box mt={2} px={1}>
          <FormControlLabel
            control={
              <Switch
                checked={values.responsiveFontSizes}
                edge="start"
                name="direction"
                onChange={(event) =>
                  handleChange(
                    "responsiveFontSizes",
                    event.target.checked
                  )
                }
              />
            }
            label="Responsive font sizes"
          />
        </Box>
        <Box mt={2}>
          <TextField
            fullWidth
            label="Theme"
            name="theme"
            onChange={(event) =>
              handleChange("theme", event.target.value)
            }
            select
            SelectProps={{ native: true }}
            value={values.theme}
            variant="outlined">
            {Object.keys(THEMES).map((theme) => (
              <option key={theme} value={theme}>
                {capitalCase(theme)}
              </option>
            ))}
          </TextField>
        </Box>
        <Box mt={2}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleSave}>
            Save Settings
               </Button>
        </Box>
      </Popover>
    </div>

  );
}

export default Settings;
