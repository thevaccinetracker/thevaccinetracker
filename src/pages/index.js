import React, {Component} from "react";
import "../assets/styles/style.scss";
import MainHeader from "../components/MainHeader";
import HomePage from "../components/homepage/HomePage";
import SEO from "../components/seo";

class IndexPage extends Component {
  render() {
    return (
      <div className="homePage">
        <SEO />
        <MainHeader/>
        <HomePage />
      </div>
    );
  }
}

export default IndexPage
