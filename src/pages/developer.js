import {Router} from '@reach/router';
import IndexPage from './index';
import DeveloperInfo from '../components/developersDetail/DeveloperInfo'
import React from 'react';

const Developer = () => {
  return (
    <div>
      <Router>
        <IndexPage path='/'/>
        <DeveloperInfo path='/developer/:slug'/>
      </Router>
    </div>
  )
}
export default Developer;
