import React, { Component } from "react";
import logo from "../assets/images/logo.svg";

class MainHeader extends Component {
  render() {
    return (
      <div className="container mainHeader">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <a href="/">
              <img src={logo} alt="The Vaccine Tracker Logo" className="img img-responsive"  />
            </a>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="virusMainStatus">
              <ul>
                <li className="virusType">
                  <div className="blinking liveUpdates"></div>
                  COVID-19
                </li>
                <li className="overallStatus vaccineStatus">VACCINE TRACKER</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainHeader;
