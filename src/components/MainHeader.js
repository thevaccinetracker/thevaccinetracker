import React, { Component } from 'react'
import logo from '../assets/images/logo.svg'
import whatsappIcon from '../assets/images/whatsappIcon.svg'
import { Dropdown } from 'semantic-ui-react'
import twitterIcon from '../assets/images/twitter.svg'
import facebookIcon from '../assets/images/facebook.svg'
import copyIcon from '../assets/images/copyIcon.svg'

class MainHeader extends Component {
  render() {
    return (
      <div className="container mainHeader">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="/">
              <img
                src={logo}
                alt="The Vaccine Tracker Logo"
                className="img img-responsive"
              />
            </a>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="virusMainStatus">
              <ul>
                <li className="virusType">
                  <div className="blinking liveUpdates"></div>
                  COVID-19
                </li>
                <li className="overallStatus vaccineStatus">VACCINE TRACKER</li>
              </ul>
              <Dropdown
                text="Share"
                pointing
                className="link item shareButton"
                icon="share"
              >
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <img
                      src={whatsappIcon}
                      alt="whatsapp share"
                      className="img img-responsive"
                      width="10"
                    />
                    WhatsApp
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <img
                      src={facebookIcon}
                      alt="facebook share"
                      className="img img-responsive"
                      width="10"
                    />
                    Facebook
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <img
                      src={twitterIcon}
                      alt="twitter share"
                      className="img img-responsive"
                      width="10"
                    />
                    Twitter
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <img
                      src={copyIcon}
                      alt="copy link share"
                      className="img img-responsive"
                      width="10"
                    />
                    Copy Link
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainHeader
