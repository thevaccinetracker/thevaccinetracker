import { Router } from '@reach/router'
import React from 'react'
import DeveloperInfo from '../components/developersDetail/DeveloperInfo'
import IndexPage from './index'

const Developer = ({ pageContext: { vaccine } }) => {
  return (
    <div>
      <Router>
        <IndexPage path="/" />
        <DeveloperInfo vaccine={vaccine} path="/developer/:slug" />
      </Router>
    </div>
  )
}
export default Developer
