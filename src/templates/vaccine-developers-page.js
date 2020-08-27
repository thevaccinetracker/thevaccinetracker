import React, { Component } from 'react'
import '../assets/styles/style.scss'
import { vaccineObj } from '../contants/conts.js'
import MainFooter from '../components/MainFooter'
import MainHeader from '../components/MainHeader'
import SEO from '../components/seo'

class DeveloperInfo extends Component {
  constructor() {
    super()
    this.ResearcherID = ''
  }

  componentDidMount() {}

  MainOrganisationBox = () => {
    let vaccine = this.props.pageContext.vaccine
    let vaccineStage = {}
    if (vaccine && vaccine.currentstage) {
      vaccineStage = vaccineObj[vaccine.currentstage] || {}
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
            <div className="companyLabel c5Para">Organisation Name</div>
            <h4 className="companyName">{vaccine.developersname}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-xs-12 no-padding">
            <div className="currentStageGraph">
              <div
                className={`stage s1 ${vaccine.stage >= 1 ? 'highlight' : ''}`}
              />
              <div
                className={`stage s2 ${vaccine.stage >= 2 ? 'highlight' : ''}`}
              />
              <div
                className={`stage s3 ${vaccine.stage >= 3 ? 'highlight' : ''}`}
              >
                <div
                  className={`phase p1 ${
                    vaccine.stage >= 4 ||
                    (vaccine.stage === 3 && vaccine.phase >= 1)
                      ? 'highlight'
                      : ''
                  }`}
                />
                <div
                  className={`phase p2 ${
                    vaccine.stage >= 4 ||
                    (vaccine.stage === 3 && vaccine.phase >= 2)
                      ? 'highlight'
                      : ''
                  }`}
                />
                <div
                  className={`phase p3 ${
                    vaccine.stage >= 4 ||
                    (vaccine.stage === 3 && vaccine.phase >= 3)
                      ? 'highlight'
                      : ''
                  }`}
                />
              </div>
              <div
                className={`stage s4 ${vaccine.stage >= 4 ? 'highlight' : ''}`}
              />
              <div
                className={`stage s5 ${vaccine.stage >= 5 ? 'highlight' : ''}`}
              />
            </div>
            <div className="currentStageText">
              <p className="gs0Para">Current Stage</p>
              <p className="stageNumber c5Para">{vaccineStage.text}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-xs-24">
            <div className="vaccineDesc">
              <p>
                {vaccine.developersname} is currently in {vaccineStage.text}.
              </p>
              {/* <p>Detailed information Coming Soon.</p> */}
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <SEO
          title={
            'Current stage of ' +
            this.props.pageContext.vaccine.developersname +
            ' Vaccine'
          }
        />
        <MainHeader />
        <div className="firstFold">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="developersDetailedStages">
                  {this.MainOrganisationBox()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <MainFooter />
      </div>
    )
  }
}

export default DeveloperInfo
