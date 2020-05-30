import React, { Component } from "../../../node_modules/react";

class SimpleTracker extends Component {
  render() {
    return (
        <div className="simpleVaccineTreatmentTracker">
            <div className="icon">

            </div>
            <div className="infoSection">
                <div className="type">
                    Vaccine
                </div>
                <div className="infoNumber">
                    <div className="count producers">
                        <div className="number">
                            130
                        </div>
                        <div className="countlabel">
                            UNDER DEVELOPMENT
                        </div>
                    </div>
                    <div className="count success">
                        <div className="number">
                            0
                        </div>
                        <div className="countlabel">
                            DEVELOPED
                        </div>
                    </div>
                    <div className="count trials">
                        <div className="number">
                            12
                        </div>
                        <div className="countlabel">
                            HUMAN TRIAL
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default SimpleTracker;
