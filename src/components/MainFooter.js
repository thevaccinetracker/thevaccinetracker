import React, { Component } from 'react'
import facebookIcon from '../assets/images/facebook.svg'
import producthuntIcon from '../assets/images/producthunt.svg'
import twitterIcon from '../assets/images/twitter.svg'
import youtubeIcon from '../assets/images/youtube.svg'
import { Link } from 'gatsby'

class MainHeader extends Component {
  render() {
    return (
      <div className="container mainFooter">
        <div className="row">
          <div className="col-md-2">
            <div className="socialMediaIconsSection">
              {/* <div className="followUS">
                <p className="paragraph">Follow us on</p>
              </div> */}
              <div className="socialMediaIcons facebookIcon">
                <a
                  href="https://www.facebook.com/thevaccinetracker/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={facebookIcon}
                    alt="Open Facebook Page"
                    className="img img-responsive"
                  />
                </a>
              </div>
              <div className="socialMediaIcons twitterIcon">
                <a
                  href="https://twitter.com/TheVaccineTrakr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={twitterIcon}
                    alt="Open Twitter"
                    className="img img-responsive"
                  />
                </a>
              </div>
              <div className="socialMediaIcons youtubeIcon">
                <a
                  href="https://www.youtube.com/channel/UCtMJ_bX7VPUWoLXI_2mAUtQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={youtubeIcon}
                    alt="Open Youtube"
                    className="img img-responsive"
                  />
                </a>
              </div>
              <div className="socialMediaIcons producthuntIcon">
                <a
                  href="https://www.producthunt.com/posts/covid-19-vaccine-tracker"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={producthuntIcon}
                    alt="Open Producthunt"
                    className="img img-responsive"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-10 text-right">
            <div className="allthelinks">
              <ul>
                <li>
                  <a
                    href="https://thevaccinetracker.com/blogs/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blogs
                  </a>
                  {/* <Link to="/blogs/">Blog</Link> */}
                </li>
                <li>
                  <Link to="/contributers">Our Superheros</Link>
                </li>
                <li>
                  <Link to="/all-vaccine-developers">
                    All Vaccine Developers
                  </Link>
                </li>
                <li>
                  <Link to="/top-10-corona-vaccines-getting-developed">
                    Top 10 Vaccine Developers
                  </Link>
                </li>
                <li>
                  <a
                    href="https://rohitbind.typeform.com/to/Kso14D"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Collaborate with us
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/thevaccinetracker/thevaccinetracker"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.figma.com/file/8rXo6Cu59WpdOkXdQdi1Ce/The-Vaccine-Tracker-(-thevaccinetracker.com-)?node-id=0%3A1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Figma
                  </a>
                </li>
                <li>
                  <a
                    href="https://forms.gle/6DDNX4b74NMRw6GH8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Feedback
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.google.com/spreadsheets/d/1ImpYv9-_qKmF8JkdV8YW1tN8IAycPszPpG6VCn-rH4Q/edit?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resources &amp; Data
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainHeader
