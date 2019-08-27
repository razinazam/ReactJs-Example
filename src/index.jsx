import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router , browserHistory} from "react-router-dom";
import { Reducer } from "./reducer/index";
import thunk from "redux-thunk";
import logger from "redux-logger";
const store = createStore(Reducer, applyMiddleware(thunk, logger));
ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
