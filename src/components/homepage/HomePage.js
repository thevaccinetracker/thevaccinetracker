import React, { Component } from "../../../node_modules/react";
import TrackerMain from "../trackerMain/TrackerMain";
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
            humanTrail : 15,
            vaccineTreatmentType : "Vaccine"
          },
          treatmentData: {
            totalProducers : virusInfo.treatmentData.elements.length,
            success : 0,
            humanTrail : 0,
            vaccineTreatmentType : "Treatment"
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
