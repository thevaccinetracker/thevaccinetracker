import React, { Component } from "react";
// import logo from "../assets/images/logo.svg";

class MainHeader extends Component {
  render() {
    return (
      <div className="container mainFooter">
        <div className="row">
          <div className="col-md-7">
            <p className="paragraph">
              It took us 4 weekend to bulid this. But for you it will take only 5 sec to share. We have interesting features in the pipeline.
            </p>
          </div>
          <div className="col-md-5 text-right">
            <ul>
              <li><a href="https://rohitbind.typeform.com/to/Kso14D" target="_blank" rel="noreferrer">Collaborate with us</a></li>
              <li><a href="https://github.com/thevaccinetracker/thevaccinetracker" target="_blank" rel="noreferrer">Github</a></li>
              <li><a href="https://www.figma.com/file/8rXo6Cu59WpdOkXdQdi1Ce/The-Vaccine-Tracker-(-thevaccinetracker.com-)?node-id=0%3A1" target="_blank" rel="noreferrer">Figma</a></li>
              <li><a href="https://forms.gle/6DDNX4b74NMRw6GH8" target="_blank" rel="noreferrer">Feedback</a></li>
              <li><a href="https://docs.google.com/spreadsheets/d/1ImpYv9-_qKmF8JkdV8YW1tN8IAycPszPpG6VCn-rH4Q/edit?usp=sharing" target="_blank" rel="noreferrer">Resources &amp; Data</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MainHeader;
