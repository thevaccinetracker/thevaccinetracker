import React, { Component } from 'react'
import logo from '../assets/images/tvt_logo.svg'
import whatsappIcon from '../assets/images/whatsappIcon.svg'
import { Dropdown } from 'semantic-ui-react'
import twitterIcon from '../assets/images/twitter.svg'
import facebookIcon from '../assets/images/facebook.svg'
import copyIcon from '../assets/images/copyIcon.svg'
import Toast from 'react-bootstrap/Toast'
import { Link } from 'gatsby'

class MainHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  setShow = () => {
    this.setState({
      show: false
    })
  }

  copyToClipBoard = () => {
    this.setState({
      show: true
    })
    navigator.clipboard.writeText('https://www.thevaccinetracker.com')
  }

  render() {
    const { show } = this.state
    const url = 'www.thevaccinetracker.com'
    return (
      <div className="container mainHeader">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link to="/">
              <img
                src={logo}
                alt="The Vaccine Tracker Logo"
                className="img img-responsive"
                width="160"
              />
            </Link>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="virusMainStatus">
              <ul>
                <li className="virusType">
                  <div className="blinking liveUpdates" />
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
                  <Dropdown.Item
                    onClick={() =>
                      window.open(`https://wa.me/?text=${url}`, '_self')
                    }
                  >
                    <img
                      src={whatsappIcon}
                      alt="whatsapp share"
                      className="img img-responsive"
                      width="10"
                    />
                    WhatsApp
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      window.open(
                        'https://www.facebook.com/sharer/sharer.php?u=' +
                          encodeURIComponent(url),
                        'facebook-share-dialog',
                        'width=626,height=436'
                      )
                      return false
                    }}
                  >
                    <img
                      src={facebookIcon}
                      alt="facebook share"
                      className="img img-responsive"
                      width="10"
                    />
                    Facebook
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() =>
                      window.open(
                        `https://twitter.com/intent/tweet?url=${url}`,
                        '_target'
                      )
                    }
                  >
                    <img
                      src={twitterIcon}
                      alt="twitter share"
                      className="img img-responsive"
                      width="10"
                    />
                    Twitter
                  </Dropdown.Item>
                  <Dropdown.Item onClick={this.copyToClipBoard}>
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
        <Toast
          onClose={() => this.setShow(false)}
          show={show}
          delay={1000}
          autohide
        >
          <Toast.Body style={{ textAlign: 'center' }}>
            Copied To ClipBoard !
          </Toast.Body>
        </Toast>
        <br />
        <div className="discontinue">
          <h2>We are discontinuing</h2>
          <p>
            We took the pledge of helping atleast 1,000 people, but we are happy
            to announce that our platform helped more than 21,000 people. We are
            group of people from Bangalore who has daily office, with which it
            becomes bit difficult to continue maintaining this. Hence please
            consider this as an official announcement that we are going to
            discontinue updating the information from now ie. from 4th Jan 2021.
            If you or anyone you know is interested then please contact Rohit
            Bind the details for reaching out to him is given below.
          </p>
          <p>
            Reason for discontinuing.
            <ol>
              <li>
                The goal which we had set it achieved - we took pledge of
                helping 1000 people but we helped more than 21k people with the
                NPS score of 4.1.
              </li>
              <li>
                The vaccine information is now dependent on the country level
                which is bit difficult to manage.
              </li>
            </ol>
          </p>
          <br />
          <p>
            With the NPS of 4.1 out of 5 we truly understand that the platform
            is helpful to many of the people. Hence we decided to handover this
            project to someone who can take care of it from here.
            <br />
            <br />
            If you are interested in taking over the project from here then
            please contact Rohit Bind{' '}
            <a
              href="https://www.linkedin.com/in/rohitbind/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.linkedin.com/in/rohitbind
            </a>
          </p>
        </div>
      </div>
    )
  }
}

export default MainHeader
