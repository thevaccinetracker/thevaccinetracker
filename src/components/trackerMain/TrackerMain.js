import React, { Component } from "../../../node_modules/react";
import stage1Icon from "../../assets/images/exploratory.svg";
import stage2Icon from "../../assets/images/preClinical.svg";
import stage3Icon from "../../assets/images/humanTrials.svg";
import stage4Icon from "../../assets/images/approval.svg";
import stage5Icon from "../../assets/images/production.svg";
import {Line} from 'rc-progress';
import Tabletop from '../../../node_modules/tabletop';
// import Loader from "react-loader-spinner";

class TrackerMain extends Component {
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
                // this.setState({
                //     vaccineData: {
                //         totalProducers : virusInfo.vaccineData.elements.length,
                //         success : 0,
                //         humanTrail : 15,
                //         vaccineTreatmentType : "Vaccine"
                //     },
                //     treatmentData: {
                //         totalProducers : virusInfo.treatmentData.elements.length,
                //         success : 0,
                //         humanTrail : 0,
                //         vaccineTreatmentType : "Treatment"
                //     }
                // });
                console.log('Vaccine Data ------>', virusInfo.vaccineData.elements);
            }
        })
    }

    render() {
    // const {vaccineTreatmentInfo} = this.props;

    // const Loading = () => {
    //   return (
    //     <Loader type="ThreeDots" color="#FEB9D3" height={26} width={26} style={{
    //       textAlign: 'left'
    //     }}/>
    //   )
    // }

    return (
        <div className="covidVaccineStagesAndPhases">
            <div className="stages stage1">
                <div className="icon">
                    <img src={stage1Icon} alt="Stage 1 icon, Microscope Icon"/>
                </div>
                <div className="stageTitle paragraph">
                    <h3>Exploratory<br/>Stage</h3>
                </div>
                <div className="stageNumber">
                    <p className="c5Para">
                        Stage 1
                    </p>
                </div>
                <div className="totalStageCount">
                    <h2>138</h2>
                </div>
                <div className="progressBar">
                    <Line percent={(138*100)/138} strokeWidth="3" strokeColor="#FEB9D3" />
                </div>
                <div className="progressCount">
                    <div className="gs0Para">
                        Success
                    </div>
                    <div className="count gs0Para">
                        138 <span className=""> / 138</span>
                    </div>
                </div>
            </div>
            <div className="stages stage2">
            <div className="icon">
                    <img src={stage2Icon} alt="Stage 1 icon, Microscope Icon"/>
                </div>
                <div className="stageTitle paragraph">
                    <h3>Pre Clinical<br/>Stage</h3>
                </div>
                <div className="stageNumber">
                    <p className="c5Para">
                        Stage 2
                    </p>
                </div>
                <div className="totalStageCount">
                    <h2>138</h2>
                </div>
                <div className="progressBar">
                    <Line percent={(138*100)/138} strokeWidth="3" strokeColor="#FEB9D3" />
                </div>
                <div className="progressCount">
                    <div className="gs0Para">
                        Success
                    </div>
                    <div className="count gs0Para">
                        138 / 138
                    </div>
                </div>
            </div>
            <div className="stages stage3">
                <div className="icon">
                    <img src={stage3Icon} alt="Stage 1 icon, Microscope Icon"/>
                </div>
                <div className="stageTitle paragraph">
                    <h3>Human Trials<br/>Stage</h3>
                </div>
                <div className="stageNumber">
                    <p className="c5Para">
                        Stage 3
                    </p>
                </div>
                <div className="totalStageCount">
                    <div className="phases phase1">
                        <h2>12</h2>
                        <p className="c5Para">
                            S3 : Phase 1
                        </p>
                    </div>
                    <div className="phases phase2">
                        <h2>8</h2>
                        <p className="c5Para">
                            S3 : Phase 2
                        </p>
                    </div>
                    <div className="phases phase3">
                        <h2>1</h2>
                        <p className="c5Para">
                            S3 : Phase 3
                        </p>
                    </div>
                </div>
                <div className="progressBar">
                    <Line percent={(21*100)/138} strokeWidth="1.6" trailWidth="0.6" strokeColor="#FEB9D3" />
                </div>
                <div className="progressCount">
                    <div className="gs0Para">
                        Success
                    </div>
                    <div className="count gs0Para">
                        21 / 138
                    </div>
                </div>
            </div>
            <div className="stages stage4">
                <div className="icon">
                    <img src={stage4Icon} alt="Stage 1 icon, Microscope Icon"/>
                </div>
                <div className="stageTitle paragraph">
                    <h3>Approval<br/>Stage</h3>
                </div>
                <div className="stageNumber">
                    <p className="c5Para">
                        Stage 4
                    </p>
                </div>
                <div className="totalStageCount">
                    <h2>0</h2>
                </div>
                <div className="progressBar">
                    <Line percent={(0*100)/138} strokeWidth="3" strokeColor="#FEB9D3" />
                </div>
                <div className="progressCount">
                    <div className="gs0Para">
                        Success
                    </div>
                    <div className="count gs0Para">
                        0 / 138
                    </div>
                </div>
            </div>
            <div className="stages stage5">
                <div className="icon">
                    <img src={stage5Icon} alt="Stage 1 icon, Microscope Icon"/>
                </div>
                <div className="stageTitle paragraph">
                    <h3>Production<br/>Stage</h3>
                </div>
                <div className="stageNumber">
                    <p className="c5Para">
                        Stage 5
                    </p>
                </div>
                <div className="totalStageCount">
                    <h2>0</h2>
                </div>
                <div className="progressBar">
                    <Line percent={(0*100)/138} strokeWidth="3" strokeColor="#FEB9D3" />
                </div>
                <div className="progressCount">
                    <div className="gs0Para">
                        Success
                    </div>
                    <div className="count gs0Para">
                        0 / 138
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default TrackerMain;
