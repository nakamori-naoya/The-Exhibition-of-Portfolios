import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import * as History from "history"
import {ConnectedRouter}from "connected-react-router"

const history =History.createBrowserHistory();

ReactDOM.render(
  <ConnectedRouter history={history}>
    <App />
  </ConnectedRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
