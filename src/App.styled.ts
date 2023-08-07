import { createGlobalStyle } from 'styled-components';

// @ts-ignore
import Roboto from './assets/fonts/Roboto-Regular.ttf';
// @ts-ignore
import RobotoLight from './assets/fonts/Roboto-Light.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Roboto;
    src: url(${Roboto}) format('truetype');
  }
  
  @font-face {
    font-family: "Roboto Light";
    src: url(${RobotoLight}) format('truetype');
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #E5E5E5;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  body, html {
    width: 100%;
    height: 100%;
  }

  body, button, textarea, input {
    font-family: Roboto, sans-serif;
  }

  a, button {
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
  
  /* stylelint-disable selector-class-pattern */
  .imxLinkIframeContainer {
    z-index: 10;
  }
  
  &::-webkit-scrollbar {
    width: 0;
  }
  
  &::-webkit-scrollbar-thumb {
    width: 0;
  }
  
  &::-webkit-scrollbar-track {
    width: 0;
  }
`;
