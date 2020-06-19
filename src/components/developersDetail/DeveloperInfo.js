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
              <div className="companyLabel c5Para">{vaccine.DevelopersName}</div>
              <h4 className="companyName">{vaccine.slug}</h4>
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
                <p >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse massa orci, euismod sed pharetra eleifend, interdum nec odio. In a felis neque. Nam vitae luctus felis. Cras tincidunt, tellus id convallis tempus, elit nunc sagittis ligula, ac mattis nisi turpis non tortor. Curabitur accumsan blandit nisl quis mattis. Praesent faucibus dolor libero, et euismod velit sagittis vel. Curabitur dictum sem dignissim est fermentum, eget ornare erat mattis. Aliquam ullamcorper at ex quis finibus. Praesent sit amet fringilla magna.
                    </p>
                <p>
                  Etiam pharetra enim pulvinar dui posuere, bibendum iaculis nisi laoreet. Maecenas condimentum dictum erat, eu eleifend felis porttitor sed. In dignissim libero eu elit ornare ultrices. Proin molestie, felis eget finibus pharetra, eros lacus volutpat lectus, ut imperdiet ex arcu in ligula. In hac habitasse platea dictumst. Aliquam erat lectus, feugiat vitae mollis nec, mattis vitae augue. Quisque tincidunt quis est sit amet ullamcorper. Nulla luctus felis in odio consequat, in tempus dolor commodo. Quisque urna lacus, pellentesque vel justo a, hendrerit finibus tortor. Vestibulum mollis lectus vel pretium tincidunt. 
                  
              </p>
              <p>Integer elementum erat tortor, in sagittis ante iaculis eget. Cras efficitur commodo finibus. Etiam eget turpis vitae elit congue tempus a eu urna. Nunc non ex ultrices massa iaculis cursus vitae id sapien. Mauris ipsum odio, molestie eget diam et, interdum luctus dui. Praesent lacinia mollis risus, consectetur ullamcorper arcu dapibus ac. Donec consectetur nisi ante, in venenatis magna interdum finibus. Mauris fringilla sapien sit amet nulla blandit, in pellentesque metus sollicitudin. Vivamus tempus mattis tortor nec tincidunt. Sed mollis faucibus nibh at placerat. Etiam vel venenatis ligula. Proin consectetur pulvinar odio ac auctor. In hac habitasse platea dictumst. Mauris elit nibh, ornare et justo eu, vehicula congue justo.</p>
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
