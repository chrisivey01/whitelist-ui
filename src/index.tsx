import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import combineReducers from "./redux/index";
import GlobalStyle from "./utils/globalCss";
const middle = [thunk, logger];
const store = createStore(combineReducers, applyMiddleware(...middle)); // Defaults to weight 400.

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {/* <GlobalStyle /> */}
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
