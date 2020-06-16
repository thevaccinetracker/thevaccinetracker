import React, { Component } from "../../../node_modules/react";
import TrackerMain from "../trackerMain/TrackerMain";

class HomePage extends Component {
  render() {
    return (
      <div className="firstFold">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="firstFold">
                <h1 className="text-left">
                  COVID-19 / Coronavirus vaccine development status
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <TrackerMain/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
