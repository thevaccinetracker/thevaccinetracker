// import {Router} from '@reach/router';
import React from 'react'

import '../assets/styles/style.scss'

import MainHeader from '../components/MainHeader'
import MainFooter from '../components/MainFooter'
import DevelopersDetail from '../components/developersDetail/DevelopersDetail'

const AllVaccineDevelopers = () => {
  return (
    <div className="homePage">
      {/* <Router>
        <IndexPage path='/'/>
        <DeveloperInfo path='/developer/:slug'/>
      </Router> */}
      <MainHeader />
      <div className="firstFold">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <DevelopersDetail />
            </div>
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  )
}
export default AllVaccineDevelopers
