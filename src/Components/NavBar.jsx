import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/one">
          <li>one</li>
        </Link>
        <Link to="/two">
          <li>two</li>
        </Link>
        <Link to="/three">
          <li>three</li>
        </Link>
      </div>
    );
  }
}

export default NavBar;
