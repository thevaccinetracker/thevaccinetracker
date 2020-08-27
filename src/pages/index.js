import React, { Component } from 'react'
import '../assets/styles/style.scss'
import HomePage from '../components/homepage/HomePage'
import MainFooter from '../components/MainFooter'
import MainHeader from '../components/MainHeader'
import SEO from '../components/seo'
import 'semantic-ui-css/semantic.min.css'

class IndexPage extends Component {
  render() {
    return (
      <div className="homePage">
        <SEO />
        <MainHeader />
        <HomePage />
        <MainFooter />
      </div>
    )
  }
}
//Vaccine Date Updated
export default IndexPage
