import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import "./index.css";

import Root from "./components/Root";
import reducer from "./reducers";
import { fetchHeros, fetchHero } from "./actions";

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware // lets us dispatch() functions
    )
);

// Initialise store according to route
if (window.location.pathname === "/") {
    store.dispatch(fetchHeros());
} else {
    const heroPath = window.location.pathname.split("/");
    const heroId = heroPath[heroPath.length - 1];
    store.dispatch(fetchHero(heroId));
}

// Boot the app
ReactDOM.render(<Root store={store} />, document.getElementById("root"));
