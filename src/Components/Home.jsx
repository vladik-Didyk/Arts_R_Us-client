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
        <div className="container pt-5 mt-5 ">
          <div className="">
            <div>
              <h1 className="text-center">im main component</h1>
              <p className="text-center">
                description about the app and how to use it
             </p>
            </div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/images/3.jpg" className="d-block w-100" alt="..." height="500" />
                </div>
                <div className="carousel-item">
                  <img src="/images/4.jpg" className="d-block w-100" alt="..." height="500" />
                </div>
                <div className="carousel-item">
                  <img src="/images/44.jpg" className="d-block w-100" alt="..." height="500" />
                </div>
              </div>
            </div>
          </div>
          {/* insert component here */}
          <PictureUpload />
        </div>
      </div>
    );
  }
}

export default Home;
