import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './App.theme';
import { useMetricConverter } from './hooks/UseMetricConverter'
import { GlobalStyle } from './App.styled'
import AppRouter from './App.router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { convertPxToVw } = useMetricConverter();

  return (
    <ThemeProvider theme={{ ...theme, convertPxToVw }}>
      <GlobalStyle />
      <AppRouter />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </ThemeProvider>
  );
}

export default App;
