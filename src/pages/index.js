import React, {Component} from "react"
import "../assets/styles/style.scss"

class IndexPage extends Component {

  state = {
    name : 'ujjwal',
  }

  render() {
    const {name} = this.state;
    return (
      <div className="container-fluid">
        <h1>
          Hello From {name} <span className="glyphicon glyphicon-heart"></span>
        </h1>
      </div>
    );
  }
}

export default IndexPage
