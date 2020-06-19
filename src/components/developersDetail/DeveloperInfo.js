import React, { Component } from 'react';
import MainHeader from "../MainHeader";
import MainFooter from "../MainFooter";
import "../../assets/styles/style.scss";
import { vaccineObj } from "../../contants/conts.js";
import { apiService, selectedVaccine } from '../../service/apiService';

class DeveloperInfo extends Component {

  constructor() {
    super();
    this.state = {
      vaccine: {}
    }
    this.ResearcherID  ="";
  }

  componentDidMount() { 
    const { state } = this.props.location;
    console.log(state)
    this.setState({
      vaccine: state.vaccine
    })
  }

  render() {
      const MainOrganisationBox = () => {
      let vaccine = this.state.vaccine;
      let vaccineStage ={}
      if(vaccine && vaccine.currentStage) {
        vaccineStage= vaccineObj[vaccine.currentStage] ||{};
      }
      return (        
        <div className="mainOrganisationBox">
          <div className="row">
            <div className="col-md-1 col-xs-3 hidden-xs">
              <div className={`icon ${vaccineStage.class}`}>
                <img src={vaccineStage.icon} alt={`${vaccineStage.icon_alt}`} />
              </div>
            </div>
            <div className="col-md-11 col-xs-12 companyInfoLabel">
              <div className="companyLabel c5Para">Company Name</div>
              <h4 className="companyName">{vaccine.DevelopersName}</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-xs-12">
              <div className="currentStageGraph">
                <div className="stage s1" />
                <div className="stage s2" />
                <div className="stage s3" />
                <div className="stage s4" />
                <div className="stage s5" />
              </div>
              <div className="currentStageText">
                <p className="gs0Para">Current Stage</p>
                <p className="stageNumber c5Para">
                  {vaccineStage.text}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-xs-24">
              <div className="vaccineDesc">
                <p>
                  {vaccine.DevelopersName} is currently in {vaccineStage.text}.
                </p>
                <p>
                  Detailed information Coming Soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <MainHeader />
          <div className="firstFold">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="developersDetailedStages">
                    <MainOrganisationBox />
                  </div>
                </div>
              </div>
            </div>
          </div>
        <MainFooter />
      </div >
    );
  }
}
export default DeveloperInfo;
