import React, { Component } from 'react'
import '../assets/styles/style.scss'
import HomePage from '../components/homepage/HomePage'
import MainFooter from '../components/MainFooter'
import MainHeader from '../components/MainHeader'
import SEO from '../components/seo'

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

export default IndexPage
