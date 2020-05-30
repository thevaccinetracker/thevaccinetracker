import React, { Component } from "react";
import logo from "../assets/images/logo.svg";

class HomepageComponent extends Component {
  render() {
    return (
      <div className="container homePage">
        <div className="row">
          <div className="col-md-12">
            <img src={logo} alt="The Vaccine Tracker Logo"/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomepageComponent;
