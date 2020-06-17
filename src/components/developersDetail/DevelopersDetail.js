import React, { Component } from "../../../node_modules/react";
// import stage1Icon from "../../assets/images/exploratory.svg";
// import stage2Icon from "../../assets/images/preClinical.svg";
import stage3Icon from "../../assets/images/humanTrials.svg";
// import stage4Icon from "../../assets/images/approval.svg";
// import stage5Icon from "../../assets/images/production.svg";
import Tabletop from '../../../node_modules/tabletop';
import Loader from "react-loader-spinner";

class DevelopersDetail extends Component {
    constructor() {
        super()
        this.state = {
            vaccineList : []
        }
    }

    componentDidMount() {
        Tabletop.init({
            key: '1ImpYv9-_qKmF8JkdV8YW1tN8IAycPszPpG6VCn-rH4Q',
            callback: virusInfo => {

                let getVaccineList = virusInfo.vaccineData.elements;

                this.setState({
                    vaccineList : getVaccineList
                });
                // console.log(this.state.vaccineList);
            }
        })
    }

    render() {
        const Loading = () => {
            return (
                <Loader type="ThreeDots" color="#FEB9D3" height={26} width={26} style={{
                textAlign: 'center'}}/>
            )
        }
    return (
        <div className="developersDetailedStages">
            {
            this.state.vaccineList.length === 0
            ? <h2><Loading/></h2>
                : this.state.vaccineList.map(vaccine => (
                    <div className="mainOrganisationBox" key={vaccine.ResearcherID}>
                        <div className="row">
                            <div className="col-md-1 col-xs-3">
                                <div className="icon s5">
                                    <img src={stage3Icon} alt="Human Trials"/>
                                </div>
                            </div>
                            <div className="col-md-7 col-xs-9 no-padding">
                                <div className="companyLabel c5Para">
                                    Company Name
                                </div>
                                <h4 className="companyName">
                                    {vaccine.DevelopersName}
                                </h4>
                            </div>
                            <div className="col-md-4 col-xs-12">
                                <div className="currentStageGraph">
                                    <div className="stage s1"></div>
                                    <div className="stage s2"></div>
                                    <div className="stage s3"></div>
                                    <div className="stage s4"></div>
                                    <div className="stage s5"></div>
                                </div>
                                <div className="currentStageText">
                                    <p className="gs0Para">
                                        Current Stage
                                    </p>
                                    <p className="stageNumber c5Para">
                                        {vaccine.currentStage}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
  }
}

export default DevelopersDetail;
