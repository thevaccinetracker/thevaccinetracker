import React, {Component} from "react"
import "../assets/styles/style.scss"
import MainHeader from "../components/MainHeader";

class IndexPage extends Component {
  render() {
    return (
      <div className="homePage">
        <MainHeader/>
      </div>
      
    );
  }
}

export default IndexPage
