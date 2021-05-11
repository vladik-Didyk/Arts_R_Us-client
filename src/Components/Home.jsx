import React from "react";
import PictureUpload from "./PictureUpload";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="text-center mt-5">im main component</h1>
          <p className="text-center mb-4">
            description about the app and how to use it
          </p>
          {/* insert component here */}
          <PictureUpload />
        </div>
      </div>
    );
  }
}

export default Home;
