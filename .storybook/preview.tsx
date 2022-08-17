import React from "react";
import { WiseProvider } from "../src/lib/contexts";
import GlobalFont from "../src/lib/styles/GlobalFontByStoryBook";
import { MemoryRouter } from "react-router-dom";

export const decorators = [
  (Story) => (
    <>
      <WiseProvider>
        <MemoryRouter>
          <Story />
          <GlobalFont />
        </MemoryRouter>
      </WiseProvider>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
