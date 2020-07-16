import React from 'react'
import { vaccineObj } from '../../contants/conts'
import Fade from 'react-reveal/Fade'
import { Link } from 'gatsby'

const VaccineCard = props => {
  const vaccine = props.vaccine
  const vaccineStage = vaccineObj[vaccine.currentstage]
  return (
    <Fade bottom key={vaccine.researcherid}>
      <Link to={`/all-vaccine-developers/${vaccine.slug}`}>
        <div className="mainOrganisationBox">
          <div className="row">
            <div className="col-md-1 col-xs-3 hidden-xs">
              <div className={`icon ${vaccineStage.class}`}>
                <img src={vaccineStage.icon} alt={`${vaccineStage.icon_alt}`} />
              </div>
            </div>
            <div className="col-md-7 col-xs-12 companyInfoLabel">
              <div className="companyLabel c5Para">Company Name</div>
              <h4 className="companyName">{vaccine.developersname}</h4>
            </div>
            <div className="col-md-4 col-xs-12 no-padding">
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
          </div>
        </div>
      </Link>
    </Fade>
  )
}

export default React.memo(VaccineCard)
