import * as React from "react";
import "../assets/styles/style.scss";
import HomePage from "../components/homepage/HomePage";
import MainFooter from "../components/MainFooter";
import MainHeader from "../components/MainHeader";
import SEO from "../components/seo";
import "semantic-ui-css/semantic.min.css";

class IndexPage extends React.PureComponent {
  render() {
    return (
      <div className="homePage">
        <SEO title={null} article={false} description={null} image={null}/>
        <MainHeader/>
        <HomePage/>
        <MainFooter/>
      </div>
    );
  }
}

export default IndexPage;
