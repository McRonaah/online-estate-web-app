import React from "react";
import Header from "./landing/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";

const Page = () => {
    <Router>
        <Header />
            <Switch>
            <Route exact path='/' component={Home} />
            </Switch>
    </Router>
}

export default Page;