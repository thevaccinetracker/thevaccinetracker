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
                <li><a href="https://www.producthunt.com/posts/covid-19-vaccine-tracker?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-covid-19-vaccine-tracker" target="_blank" rel="noreferrer"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=206313" alt="COVID-19 Vaccine Tracker - Get the latest updates on the vaccine development for Corona | Product Hunt Embed"  height="28px" /></a></li>
              </ul>
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
