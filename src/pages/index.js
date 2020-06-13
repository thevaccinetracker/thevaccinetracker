import React, {Component} from "react";
import "../assets/styles/style.scss";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import HomePage from "../components/homepage/HomePage";
import SEO from "../components/seo";

class IndexPage extends Component {
  render() {
    return (
      <div className="homePage">
        <SEO />
        <MainHeader/>
        <HomePage />
        <MainFooter />
      </div>
    );
  }
}

export default IndexPage
