import React, { Component } from "react";
import MainHeader from "../components/MainHeader";
import pageNotFoundImage from "../assets/images/404.svg";
import "../assets/styles/style.scss";

class PageNotFoundComponent extends Component {
  render() {
    return (
      <div className="pagenotfound">
        <MainHeader/>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="largeHeading">404 Page not found</h1>
              <img src={pageNotFoundImage} alt="404 Page not found" className="pagenotfoundImage img img-responsive" />
              <div className="pagenotfoundButton">
                <button className="btn primaryCTA" onClick={()=>window.open('/','_self')}>Go to home</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageNotFoundComponent;
