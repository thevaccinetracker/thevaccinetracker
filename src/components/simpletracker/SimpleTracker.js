import React, { Component } from "../../../node_modules/react";
import injectionIcon from "../../assets/images/injection.svg";

class SimpleTracker extends Component {
  render() {
    return (
        <div className="simpleVaccineTreatmentTracker">
            <div className="icon">
                <img src={injectionIcon} alt="Injection Icon"/>
            </div>
            <div className="infoSection">
                <div className="type">
                    Vaccine
                </div>
                <div className="infoNumber">
                    <div className="count producers">
                        <div className="number">
                            {this.props.vaccineTreatmentInfo.totalProducers}
                        </div>
                        <div className="countlabel">
                            UNDER DEVELOPMENT
                        </div>
                    </div>
                    <div className="count success">
                        <div className="number">
                        {this.props.vaccineTreatmentInfo.success}
                        </div>
                        <div className="countlabel">
                            DEVELOPED
                        </div>
                    </div>
                    <div className="count trials">
                        <div className="number">
                        {this.props.vaccineTreatmentInfo.humanTrail}
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
