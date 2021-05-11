import React from "react";
import PictureUpload from "./PictureUpload";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";

const Main = () => {
  return (
    <div>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/two" component={two} />
            <Route path="/three" component={three} />
          <Route path="/four" component={four} /> */}
          </Switch>
        </div>
      </Router>
    </div>

  );
};

export default Main;