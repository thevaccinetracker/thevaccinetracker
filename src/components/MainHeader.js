import React, { Component } from "react";
import logo from "../assets/images/logo.svg";

class MainHeader extends Component {
  render() {
    return (
      <div className="container mainHeader">
        <div className="row">
          <div className="col-md-6">
            <img src={logo} alt="The Vaccine Tracker Logo"/>
          </div>
          <div className="col-md-6">
            <div className="virusMainStatus">
              <ul>
                <li className="virusType">COVID - 19</li>
                <li className="overallStatus vaccineStatus"></li>
                <li className="overallStatus treatmentStatus"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainHeader;
