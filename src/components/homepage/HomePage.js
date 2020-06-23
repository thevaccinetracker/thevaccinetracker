import React, { Component } from '../../../node_modules/react'
import DevelopersDetail from '../developersDetail/DevelopersDetail'
import TrackerMain from '../trackerMain/TrackerMain'

class HomePage extends Component {
  render() {
    return (
      <div className="firstFold">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="firstFold">
                <h1 className="text-left">
                  COVID-19 vaccine development stages &amp; status
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <TrackerMain />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <DevelopersDetail
                showDataFor={10}
                title={`Top 10 COVID-19 Vaccine developers and their latest status`}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
