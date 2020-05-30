import React, { Component } from "../../../node_modules/react";

class HomePage extends Component {
  render() {
    return (
      <div className="firstFold">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="firstFold">
                <h1 className="largeHeading">
                  COVID - 19 Vaccine &amp; Treatment Tracker
                </h1>
              </div>
            </div>
          </div>
          <div className="row mainSimpleTracker">
            <div className="col-md-10 col-md-offset-1">
              <div className="row">
                <div className="col-md-6">
                <div className="simpleVaccineTracker">
                  Vaccine
                </div>
              </div>
              <div className="col-md-6">
                <div className="simpleTreatmentTracker">
                  Treatment
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="upcoming">
                <p className="paragraph">
                  We will be launching the detailed version soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
