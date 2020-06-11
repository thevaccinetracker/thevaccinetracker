import React, { Component } from "../../../node_modules/react";
import TrackerMain from "../trackerMain/TrackerMain";

class HomePage extends Component {
  render() {
    return (
      <div className="firstFold">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="firstFold">
                <h1 className="largeHeading">
                  COVID-19 Vaccine Tracker
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <TrackerMain/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="upcoming">
                <h6 className="">
                  We will be launching the detailed version soon
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
