import React, { Component } from "../../../node_modules/react";
import injectionIcon from "../../assets/images/injection.svg";
import Loader from "react-loader-spinner";

class SimpleTracker extends Component {
  render() {
    const {vaccineTreatmentInfo} = this.props;

    const Loading = () => {
      return (
        <Loader type="TailSpin" color="#19265f" height={26} width={50} style={{
          textAlign: 'center'
        }}/>
      )
    }

    
    return (
        <div className="simpleVaccineTreatmentTracker">
            <div className="icon">
                <img src={injectionIcon} alt="Injection Icon"/>
            </div>
            <div className="infoSection">
                <div className="type">
                    {vaccineTreatmentInfo.vaccineTreatmentType}
                </div>
                <div className="infoNumber">
                    <div className="count producers">
                        <div className="number">
                            {vaccineTreatmentInfo.totalProducers>=0 ? vaccineTreatmentInfo.totalProducers : <Loading/>}
                        </div>
                        <div className="countlabel">
                            UNDER DEVELOPMENT
                        </div>
                    </div>
                    <div className="count success">
                        <div className="number">
                        {vaccineTreatmentInfo.success>=0 ? vaccineTreatmentInfo.success : <Loading/>}
                        </div>
                        <div className="countlabel">
                            DEVELOPED
                        </div>
                    </div>
                    <div className="count trials">
                        <div className="number">
                        {vaccineTreatmentInfo.humanTrail>=0 ? vaccineTreatmentInfo.humanTrail : <Loading/>}
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
