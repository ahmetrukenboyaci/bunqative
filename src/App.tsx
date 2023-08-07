import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './App.theme';
import { useMetricConverter } from './hooks/UseMetricConverter'
import { GlobalStyle } from './App.styled'
import AppRouter from './App.router'

function App() {
  const { convertPxToVw } = useMetricConverter();

  return (
    <ThemeProvider theme={{ ...theme, convertPxToVw }}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
