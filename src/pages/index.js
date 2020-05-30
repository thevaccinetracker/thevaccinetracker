import React, {Component} from "react"
import "../assets/styles/style.scss"
import logo from '../images/logo.svg';

class IndexPage extends Component {

  state = {
    name : 'ujjwal',
  }

  render() {
    const {name} = this.state;
    return (
      <div className="container homePage">
        <div className="row">
          <div className="col-md-12">
            <img src={logo} alt="The Vaccine Tracker Logo"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage
