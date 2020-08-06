import React from 'react'
import '../assets/styles/style.scss'
import DevelopersDetail from '../components/developersDetail/DevelopersDetail'
import MainFooter from '../components/MainFooter'
import MainHeader from '../components/MainHeader'
import SEO from '../components/seo'

const AllVaccineDevelopers = () => {
  return (
    <div className="homePage">
      <SEO
        title="All the COVID-19 vaccine developers or researchers"
        description="See all the list of vaccine developers working on the development of the COVID-19 vaccine and their current latest status"
      />
      <MainHeader />
      <div className="firstFold">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <DevelopersDetail
                title={`All COVID-19 or Coronavirus Vaccine developers and their latest status`}
                showSearch={true}
              />
            </div>
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  )
}
export default React.memo(AllVaccineDevelopers)
