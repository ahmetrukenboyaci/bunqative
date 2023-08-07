import { ThemeProvider } from 'styled-components';
import type { Preview } from "@storybook/react";
import { useMetricConverter } from '../src/hooks/UseMetricConverter'
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { theme } from '../src/App.theme'
import { GlobalStyle } from '../src/App.styled'

export const decorators = [
  (Story) => {
    const { convertPxToVw } = useMetricConverter();

    return (
      <ThemeProvider theme={{ ...theme, convertPxToVw }}>
        <Story />
      </ThemeProvider>
    );
  },
  withThemeFromJSXProvider({
    GlobalStyles: GlobalStyle,
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    decorators,
  },
};

export default preview;
