import React from "react";
import { ThemeKnob } from "./themeknob";
import { MemoryRouter } from "react-router";
import { StaticStore } from "./staticstore";
import { SettingsProvider } from "src/context/SettingsContext";
import { SnackbarProvider } from 'notistack';

const customViewports = {
   sm: {
      name: "MUI's sm",
      styles: {
         width: "600px",
         height: "400px",
      },
      type: "mobile",
   },
   md: {
      name: "MUI's md",
      styles: {
         width: "960px",
         height: "600px",
      },
      type: "tablet",
   },
   lg: {
      name: "MUI's lg",
      styles: {
         width: "1280px",
         height: "960px",
      },
      type: "desktop",
   },
   xl: {
      name: "MUI's xl",
      styles: {
         width: "1920px",
         height: "1080px",
      },
      type: "desktop",
   },
};

export const parameters = {
   viewport: {
      viewports: customViewports,
   },
   actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
   (Story) => {
      return (
         <StaticStore>
            <SettingsProvider>
               <SnackbarProvider maxSnack={1}>
                  <MemoryRouter initialEntries={["/"]}>
                     <ThemeKnob>
                        <Story />
                     </ThemeKnob>
                  </MemoryRouter>
               </SnackbarProvider>
            </SettingsProvider>
         </StaticStore>
      );
   },
];
