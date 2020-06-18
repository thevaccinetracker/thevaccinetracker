import React, { Component } from "../../../node_modules/react"
import stage1Icon from "../../assets/images/exploratory.svg"
import stage2Icon from "../../assets/images/preClinical.svg"
import stage3Icon from "../../assets/images/humanTrials.svg"
import stage4Icon from "../../assets/images/approval.svg"
import stage5Icon from "../../assets/images/production.svg"
import Tabletop from "../../../node_modules/tabletop"
import Loader from "react-loader-spinner"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade'

class DevelopersDetail extends Component {
  constructor() {
    super()
    this.state = {
      vaccineList: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: "1ImpYv9-_qKmF8JkdV8YW1tN8IAycPszPpG6VCn-rH4Q",
      callback: virusInfo => {
        let getVaccineList = virusInfo.vaccineData.elements

        this.setState({
          vaccineList: getVaccineList
        })
        console.log(this.state.vaccineList)
      }
    })
  }

  render() {
    const Loading = () => {
      return (
        <Loader
          type="Circles"
          color="#FEB9D3"
          height={40}
          width={40}
          style={{
            textAlign: "center"
          }}
        />
      )
    }

    const MainOrganisationBox = () => {
      return this.state.vaccineList
        .map(vaccine => {
          if (vaccine.currentStage === "s1") {
            vaccine.icon = (
              <div className="icon s1">
                <img src={stage1Icon} alt="Vaccine at Pre Clinical Stage" />
              </div>
            )
            vaccine.currentStageText = "Stage 1"
          } else if (vaccine.currentStage === "s2") {
            vaccine.icon = (
              <div className="icon s2">
                <img src={stage2Icon} alt="Vaccine at Exploratory Stage" />
              </div>
            )
            vaccine.currentStageText = "Stage 2"
          } else if (
            vaccine.currentStage === "s3Phase1" ||
            vaccine.currentStage === "s3Phase2" ||
            vaccine.currentStage === "s3Phase3"
          ) {
            vaccine.icon = (
              <div className="icon s3">
                <img
                  src={stage3Icon}
                  alt="Vaccine at Human Trials Stage Phase 1, Phase 2, Phase 3"
                />
              </div>
            )
            if (vaccine.currentStage === "s3Phase1") {
              vaccine.currentStageText = "Stage 3 : Phase 1"
            } else if (vaccine.currentStage === "s3Phase2") {
              vaccine.currentStageText = "Stage 3 : Phase 2"
            } else if (vaccine.currentStage === "s3Phase3") {
              vaccine.currentStageText = "Stage 3 : Phase 3"
            }
          } else if (vaccine.currentStage === "s4") {
            vaccine.icon = (
              <div className="icon s4">
                <img src={stage4Icon} alt="Vaccine at Approval Stage" />
              </div>
            )
            vaccine.currentStageText = "Stage 4"
          } else {
            vaccine.icon = (
              <div className="icon s5">
                <img src={stage5Icon} alt="Vaccine at Approval Stage" />
              </div>
            )
            vaccine.currentStageText = "Stage 5"
          }
          return (
            <Fade bottom key={vaccine.ResearcherID}>
              {/* <Link to={`/developer/${vaccine.slug}`}> */}
                <div className="mainOrganisationBox">
                  <div className="row">
                    <div className="col-md-1 col-xs-3 hidden-xs">
                      {vaccine.icon}
                    </div>
                    <div className="col-md-7 col-xs-12 companyInfoLabel">
                      <div className="companyLabel c5Para">Company Name</div>
                      <h4 className="companyName">{vaccine.DevelopersName}</h4>
                    </div>
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
                          {vaccine.currentStageText}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              {/* </Link> */}
            </Fade>
          )
        })
        .slice(0, 10)
    }
    return (
      <div className="developersDetailedStages">
        <h1>Top 10 COVID-19 Vaccine producers &amp; their latest status</h1>
        {this.state.vaccineList.length === 0 ? (
          <Loading />
        ) : (
          <MainOrganisationBox />
        )}
      </div>
    )
  }
}

export default DevelopersDetail
