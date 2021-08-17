import { ThemeProvider, createTheme, } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';

const theme = createTheme({
  dark: {
    color: "#000",
  },
  light: {
    color: "#fff",
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
