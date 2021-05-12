import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Tiles from './Tiles/Tiles'
import LiveAuctioneers from './LiveAuctioneers/LiveAuctioneers'

const Main = () => {
  return (
      <Router>
          <NavBar />
            <Switch>
               <Route path="/Tiles" component={Tiles} />
               <Route path="/LiveAuctioneers" component={LiveAuctioneers} />
              {/* <Route path="/four" component={four} />  */} 
            <Route exact path="/" component={Home} />
          </Switch>
      </Router>
  )
}

export default Main;