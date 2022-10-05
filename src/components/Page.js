import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";

const Page = () => {
    <Router>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        </Switch>
    </Router>
}

export default Page;