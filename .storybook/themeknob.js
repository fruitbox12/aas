import React, { useState } from "react";
import { select } from "@storybook/addon-knobs";
import { createTheme } from "../src/theme";
import { THEMES } from "../src/constants";
import { create } from "jss";
import {
   jssPreset,
   StylesProvider,
   ThemeProvider,
   Paper,
} from "@material-ui/core";
import rtl from "jss-rtl";

const themeNames = Object.keys(THEMES);
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export const ThemeKnob = ({ children }) => {
   const theme = select("Theme", themeNames, themeNames[1], "Themes");

   return (
      <ThemeProvider theme={createTheme({ theme: theme })}>
         <StylesProvider jss={jss}>
            <Paper
               style={{
                  margin: "auto",
                  padding: "5vh",
               }}>
               {children}
            </Paper>
         </StylesProvider>
      </ThemeProvider>
   );
};
