import React, { Component } from 'react';
import MainHeader from "../MainHeader";
import MainFooter from "../MainFooter";

class DeveloperInfo extends Component {

  componentDidMount() {
    console.log(this.props.slug)
  }

  render() {
    return (
      <div>
        <MainHeader/>
          
        <MainFooter/>
      </div>
    );
  }
}

export default DeveloperInfo;
