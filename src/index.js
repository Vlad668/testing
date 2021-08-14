import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import App from "./containers/App";
import "tachyons";
import "./index.css";
import { createLogger } from "redux-logger";
import registerServiceWorker from "./registerServiceWorker";

// import reportWebVitals from './reportWebVitals';

import { searchRobots, requestRobots } from "./reducer";
const logger = createLogger();

const reducers = combineReducers({ requestRobots, searchRobots });

const store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals(console.log);
