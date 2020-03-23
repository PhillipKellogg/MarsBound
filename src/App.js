import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import World from "./components/world";
import Dialogue from "./components/dialogue";
import store from "./config/store";
import { func } from "prop-types";
import About from "./website/about"
import AboutMe from "./website/aboutMe"


class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={World} />
          <Route path="/about" component={About} />
          <Route path="/phillipkellogg" component={AboutMe} />

        </Switch>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
