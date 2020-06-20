import Loader from 'react-loader-spinner'
import React, { Component } from '../../../node_modules/react'
import injectionIcon from '../../assets/images/injection.svg'

class SimpleTracker extends Component {
  render() {
    const { vaccineTreatmentInfo } = this.props

    const Loading = () => {
      return (
        <Loader
          type="ThreeDots"
          color="#FEB9D3"
          height={26}
          width={26}
          style={{
            textAlign: 'left'
          }}
        />
      )
    }

    const treatment = vaccineTreatmentInfo.vaccineTreatmentType
    let successCount = (
      <div className="count success">
        <div className="number">
          {vaccineTreatmentInfo.success >= 0 ? (
            vaccineTreatmentInfo.success
          ) : (
            <Loading />
          )}
        </div>
        <div className="countlabel">Developed</div>
      </div>
    )
    if (treatment == 'Vaccine') {
      successCount = (
        <div className="count success">
          <div className="number">
            {vaccineTreatmentInfo.success >= 0 ? (
              vaccineTreatmentInfo.success
            ) : (
              <Loading />
            )}
          </div>
          <div className="countlabel">Developed</div>
        </div>
      )
    } else {
      successCount = <div className="count success"></div>
    }

    return (
      <div className="simpleVaccineTreatmentTracker">
        <div className="icon">
          <img src={injectionIcon} alt="Injection Icon" />
        </div>
        <div className="infoSection">
          <div className="type">
            {vaccineTreatmentInfo.vaccineTreatmentType}
          </div>
          <div className="infoNumber">
            <div className="count producers">
              <div className="number">
                {vaccineTreatmentInfo.totalProducers >= 0 ? (
                  vaccineTreatmentInfo.totalProducers
                ) : (
                  <Loading />
                )}
              </div>
              <div className="countlabel">Developer / Researcher</div>
            </div>
            {successCount}
            <div className="count trials">
              <div className="number">
                {vaccineTreatmentInfo.humanTrail >= 0 ? (
                  vaccineTreatmentInfo.humanTrail
                ) : (
                  <Loading />
                )}
              </div>
              <div className="countlabel">Human Trial</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SimpleTracker
