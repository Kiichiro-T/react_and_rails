import React from 'react';
import ReactDOM from 'react-dom';

// 全体に適用
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// パレット
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
})

document.addEventListener('turbolinks:load', () => {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
    document.getElementById('material-ui-app'));
})

