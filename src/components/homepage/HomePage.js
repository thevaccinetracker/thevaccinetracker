import React, { Component } from "../../../node_modules/react";
import SimpleTracker from "../simpletracker/SimpleTracker";
import Tabletop from '../../../node_modules/tabletop';


class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      vaccineData: [],
      treatmentData : []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1ImpYv9-_qKmF8JkdV8YW1tN8IAycPszPpG6VCn-rH4Q',
      callback: virusInfo => {
        this.setState({
          vaccineData: {
            totalProducers : virusInfo.vaccineData.elements.length,
            success : 0,
            humanTrail : 15
          },
          treatmentData: {
            totalProducers : virusInfo.treatmentData.elements.length,
            success : 0,
            humanTrail : 0
          }
        });
        // console.log('Vaccine Data ------>', this.state.vaccineData);
        // console.log('Treatment Data ---->', this.state.treatmentData);
      }
    })
  }

  render() {
    return (
      <div className="firstFold">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
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
                  <SimpleTracker vaccineTreatmentInfo = {this.state.vaccineData}/>
                </div>
                <div className="col-md-6">
                  <SimpleTracker vaccineTreatmentInfo = {this.state.treatmentData}/>
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
