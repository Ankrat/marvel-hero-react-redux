import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HeroContainer from "../containers/HeroList_container";
import HeroSingleContainer from "../containers/HeroSingle_container";
import PageHeader from "./PageHeader_component";

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div className="component-container">
                <PageHeader />

                <Route exact path="/" component={HeroContainer} />
                <Route
                    path="/:name/:id"
                    exact
                    component={HeroSingleContainer}
                />
            </div>
        </Router>
    </Provider>
);

export default Root;
