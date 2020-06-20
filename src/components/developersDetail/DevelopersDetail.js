import Loader from 'react-loader-spinner'
// import { Link } from "gatsby"
import Fade from 'react-reveal/Fade'
import React, { Component } from '../../../node_modules/react'
import { vaccineObj } from '../../contants/conts.js'
// import { apiService, selectedVaccine } from "../../service/apiService"
import { apiService } from '../../service/apiService'

class DevelopersDetail extends Component {
  constructor() {
    super()
    this.state = {
      vaccineList: []
    }
  }

  componentDidMount() {
    let scope = this
    apiService.getVirusList(function (virusInfo) {
      scope.setState({
        vaccineList: virusInfo.map(vaccine => ({
          ...vaccine,
          stage: parseInt(vaccine.currentStage.charAt(1)),
          phase: parseInt(vaccine.currentStage.split('Phase')[1]) || null
        }))
      })
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
            textAlign: 'center'
          }}
        />
      )
    }

    const MainOrganisationBox = () => {
      return this.state.vaccineList
        .map(vaccine => {
          let vaccineStage = vaccineObj[vaccine.currentStage]
          return (
            <Fade bottom key={vaccine.ResearcherID}>
              {/* <Link to={`/developer/${vaccine.slug}`} state={{vaccine}} > */}
              <div className="mainOrganisationBox">
                <div className="row">
                  <div className="col-md-1 col-xs-3 hidden-xs">
                    <div className={`icon ${vaccineStage.class}`}>
                      <img
                        src={vaccineStage.icon}
                        alt={`${vaccineStage.icon_alt}`}
                      />
                    </div>
                  </div>
                  <div className="col-md-7 col-xs-12 companyInfoLabel">
                    <div className="companyLabel c5Para">Company Name</div>
                    <h4 className="companyName">{vaccine.DevelopersName}</h4>
                  </div>
                  <div className="col-md-4 col-xs-12">
                    <div className="currentStageGraph">
                      <div
                        className={`stage s1 ${
                          vaccine.stage >= 1 ? 'highlight' : ''
                        }`}
                      />
                      <div
                        className={`stage s2 ${
                          vaccine.stage >= 2 ? 'highlight' : ''
                        }`}
                      />
                      <div
                        className={`stage s3 ${
                          vaccine.stage >= 3 ? 'highlight' : ''
                        }`}
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
                        className={`stage s4 ${
                          vaccine.stage >= 4 ? 'highlight' : ''
                        }`}
                      />
                      <div
                        className={`stage s5 ${
                          vaccine.stage >= 5 ? 'highlight' : ''
                        }`}
                      />
                    </div>
                    <div className="currentStageText">
                      <p className="gs0Para">Current Stage</p>
                      <p className="stageNumber c5Para">{vaccineStage.text}</p>
                    </div>
                  </div>
                  {/* <div className="col-md-2 col-xs-12">
                      <button type="button" className="whiteCTA-outline">More Details</button>
                    </div> */}
                </div>
              </div>
              {/* </Link> */}
            </Fade>
          )
        })
        .slice(0, 10)
      //.slice(0, 10)
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
