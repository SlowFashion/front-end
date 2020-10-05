import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { green } from '@material-ui/core/colors';
import { makeStyles, createMuiTheme, MuiThemeProvider, createPallette } from '@material-ui/core/styles';

const btntheme = createMuiTheme({
  pallete: {
    primary: green
  }
});

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <MuiThemeProvider theme={btntheme}>
        <App />
      </MuiThemeProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
