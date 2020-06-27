import React, { Component } from 'react'
import '../assets/styles/style.scss'
import MainFooter from '../components/MainFooter'
import MainHeader from '../components/MainHeader'
import SEO from '../components/seo'
import 'semantic-ui-css/semantic.min.css'
import DevelopersDetail from '../components/developersDetail/DevelopersDetail'

class topVaccineDevelopers extends Component {
  render() {
    return (
      <div className="homePage">
        <SEO
          title="Top 10 COVID-19 or Coronavirus Vaccine Contenders"
          description="See all the top 10 list of vaccine developers working on the development of the COVID-19 vaccine and their current latest status"
        />
        <MainHeader />
        <div className="firstFold top10Vaccines">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Top 10 COVID-19 / Coronavirus Vaccine Contenders</h1>
                <p className="gs0Para">
                  See the list of all the Corona Vaccine Contenders who are
                  dedicatedly working on the vaccine development to save lives
                  in millions. This list is dynamic and it gets updated based on
                  the current status of each vaccine.
                </p>
                <p className="gs0Para">
                  As you can see all of them are in Stage 3. Stage 3 is one of
                  the stage in vaccine development process where the vaccines
                  are tested on the Humans and this stage is divided into 3
                  phases, Phase 1, Phase 2, Phase 3. In Phase 1 vaccine is
                  tested on small group of people. In Phase 2 the vaccine is
                  tested on medium size group. Phase 3 is final phase of of
                  human testing where the vaccine is tested on large group of
                  people.
                </p>
                <DevelopersDetail
                  title={`Top 10 List`}
                  showDataFor={10}
                  showSearch={false}
                />
              </div>
            </div>
          </div>
        </div>
        <MainFooter />
      </div>
    )
  }
}

export default topVaccineDevelopers
