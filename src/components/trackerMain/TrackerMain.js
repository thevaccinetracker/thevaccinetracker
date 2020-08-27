import { Line } from 'rc-progress'
import Loader from 'react-loader-spinner'
import React, { Component } from 'react'
import Tabletop from 'tabletop'
import stage4Icon from '../../assets/images/approval.svg'
import stage1Icon from '../../assets/images/exploratory.svg'
import stage3Icon from '../../assets/images/humanTrials.svg'
import stage2Icon from '../../assets/images/preClinical.svg'
import stage5Icon from '../../assets/images/production.svg'
import { Link } from 'gatsby'

class TrackerMain extends Component {
  constructor() {
    super()
    this.state = {
      stageOngoing: [],
      stageSuccess: [],
      totalVaccines: [],
      stage3Success: [],
      stage3Ongoing: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1ImpYv9-_qKmF8JkdV8YW1tN8IAycPszPpG6VCn-rH4Q',
      callback: virusInfo => {
        let ongoingStage = virusInfo.VaccineCounts.elements[0]
        let successStage = virusInfo.VaccineCounts.elements[1]

        this.setState({
          stageOngoing: {
            stage1: ongoingStage.stage1,
            stage2: ongoingStage.stage2,
            s3Phase1: ongoingStage.s3Phase1,
            s3Phase2: ongoingStage.s3Phase2,
            s3Phase3: ongoingStage.s3Phase3,
            stage4: ongoingStage.stage4,
            stage5: ongoingStage.stage5
          },
          stageSuccess: {
            stage1: successStage.stage1,
            stage2: successStage.stage2,
            s3Phase1: successStage.s3Phase1,
            s3Phase2: successStage.s3Phase2,
            s3Phase3: successStage.s3Phase3,
            stage4: successStage.stage4,
            stage5: successStage.stage5
          },
          totalVaccines: virusInfo.vaccineData.elements.length,
          stage3Ongoing:
            parseInt(ongoingStage.s3Phase1) +
            parseInt(ongoingStage.s3Phase2) +
            parseInt(ongoingStage.s3Phase3),
          stage3Success:
            parseInt(ongoingStage.stage4) + parseInt(ongoingStage.stage5)
        })
        // console.log('->', this.state.stage3Success + " " + this.state.stage3Ongoing);
        // console.log(virusInfo);
      }
    })
  }

  render() {
    const Loading = () => {
      return (
        <Loader
          type="ThreeDots"
          color="#FEB9D3"
          height={26}
          width={26}
          style={{
            textAlign: 'left'
          }}
        />
      )
    }

    return (
      <div className="covidVaccineStagesAndPhases">
        <div className="stages stage1">
          <Link to="/stage-1">
            <div>
              <div className="icon">
                <img src={stage1Icon} alt="Stage 1 icon, Microscope Icon" />
              </div>
              <div className="stageTitle paragraph">
                <h3>
                  Exploratory
                  <br />
                  Stage
                </h3>
              </div>
              <div className="stageNumber">
                <p className="c5Para">Stage 1</p>
              </div>
              <div className="totalStageCount">
                <h2>
                  {this.state.stageOngoing.stage1 >= 0 ? (
                    this.state.stageOngoing.stage1
                  ) : (
                    <Loading />
                  )}
                </h2>
              </div>
              <div className="progressBar">
                <Line
                  percent={[
                    (this.state.stageSuccess.stage1 * 100) /
                      this.state.totalVaccines,
                    (this.state.stageOngoing.stage1 * 100) /
                      this.state.totalVaccines
                  ]}
                  strokeWidth="3"
                  strokeColor={['#16a716', '#ffa502']}
                  strokeLinecap="butt"
                />
              </div>
              <div className="progressCount">
                <div className="ongoingIndicator" />
                <div className="gs0Para indicatorPara">Ongoing</div>
                <div className="count gs0Para">
                  {this.state.stageOngoing.stage1}{' '}
                  <span className="">{'/ ' + this.state.totalVaccines}</span>
                </div>
              </div>
              <div className="progressCount">
                <div className="successIndicator" />
                <div className="gs0Para indicatorPara">Success</div>
                <div className="count gs0Para">
                  {this.state.stageSuccess.stage1}{' '}
                  <span className="totalVaccinesCount">
                    {'/ ' + this.state.totalVaccines}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="stages stage2">
          <Link to="/stage-1">
            <div>
              <div className="icon">
                <img src={stage2Icon} alt="Stage 1 icon, Microscope Icon" />
              </div>
              <div className="stageTitle paragraph">
                <h3>
                  Pre Clinical
                  <br />
                  Stage
                </h3>
              </div>
              <div className="stageNumber">
                <p className="c5Para">Stage 2</p>
              </div>
              <div className="totalStageCount">
                <h2>
                  {this.state.stageOngoing.stage2 >= 0 ? (
                    this.state.stageOngoing.stage2
                  ) : (
                    <Loading />
                  )}
                </h2>
              </div>
              <div className="progressBar">
                <Line
                  percent={[
                    (this.state.stageOngoing.stage2 * 100) /
                      this.state.totalVaccines,
                    (this.state.stageSuccess.stage2 * 100) /
                      this.state.totalVaccines
                  ]}
                  strokeWidth="3"
                  strokeColor={['#ffa502', '#16a716']}
                  strokeLinecap="butt"
                />
              </div>
              <div className="progressCount">
                <div className="ongoingIndicator" />
                <div className="gs0Para indicatorPara">Ongoing</div>
                <div className="count gs0Para">
                  {this.state.stageOngoing.stage2}{' '}
                  <span className="">{'/ ' + this.state.totalVaccines}</span>
                </div>
              </div>
              <div className="progressCount">
                <div className="successIndicator" />
                <div className="gs0Para indicatorPara">Success</div>
                <div className="count gs0Para">
                  {this.state.stageSuccess.stage2}{' '}
                  <span className="">{'/ ' + this.state.totalVaccines}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="stages stage3">
          <Link to="stage-3">
            <div>
              <div className="icon">
                <img src={stage3Icon} alt="Stage 1 icon, Microscope Icon" />
              </div>
              <div className="stageTitle paragraph">
                <h3>
                  Human Trials
                  <br />
                  Stage
                </h3>
              </div>
              <div className="stageNumber">
                <p className="c5Para">Stage 3</p>
              </div>
              <div className="totalStageCount">
                <div className="phases phase1">
                  <h2>
                    {this.state.stageOngoing.s3Phase1 >= 0 ? (
                      this.state.stageOngoing.s3Phase1
                    ) : (
                      <Loading />
                    )}
                  </h2>
                  <p className="c5Para">S3 : Phase 1</p>
                </div>
                <div className="phases phase2">
                  <h2>
                    {this.state.stageOngoing.s3Phase2 >= 0 ? (
                      this.state.stageOngoing.s3Phase2
                    ) : (
                      <Loading />
                    )}
                  </h2>
                  <p className="c5Para">S3 : Phase 2</p>
                </div>
                <div className="phases phase3">
                  <h2>
                    {this.state.stageOngoing.s3Phase3 >= 0 ? (
                      this.state.stageOngoing.s3Phase3
                    ) : (
                      <Loading />
                    )}
                  </h2>
                  <p className="c5Para">S3 : Phase 3</p>
                </div>
              </div>
              <div className="progressBar">
                <Line
                  percent={[
                    (this.state.stage3Ongoing * 100) / this.state.totalVaccines,
                    (this.state.stage3Success * 100) / this.state.totalVaccines
                  ]}
                  strokeWidth="1.8"
                  trailWidth="0.6"
                  strokeColor={['#ffa502', '#16a716']}
                  strokeLinecap="butt"
                />
              </div>

              <div className="progressCount">
                <div className="ongoingIndicator" />
                <div className="gs0Para indicatorPara">Ongoing</div>
                <div className="count gs0Para">
                  {this.state.stage3Ongoing}{' '}
                  <span className="">{'/ ' + this.state.totalVaccines}</span>
                </div>
              </div>
              <div className="progressCount">
                <div className="successIndicator" />
                <div className="gs0Para indicatorPara">Success</div>
                <div className="count gs0Para">
                  {this.state.stage3Success}{' '}
                  <span className="">{'/ ' + this.state.totalVaccines}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="stages stage4">
          <Link to="/stage-4">
            <div>
              <div className="icon">
                <img src={stage4Icon} alt="Stage 1 icon, Microscope Icon" />
              </div>
              <div className="stageTitle paragraph">
                <h3>
                  Approval
                  <br />
                  Stage
                </h3>
              </div>
              <div className="stageNumber">
                <p className="c5Para">Stage 4</p>
              </div>
              <div className="totalStageCount">
                <h2>
                  {this.state.stageOngoing.stage4 >= 0 ? (
                    this.state.stageOngoing.stage4
                  ) : (
                    <Loading />
                  )}
                </h2>
              </div>
              <div className="progressBar">
                <Line
                  percent={[
                    (this.state.stageOngoing.stage4 * 100) /
                      this.state.totalVaccines,
                    (this.state.stageSuccess.stage4 * 100) /
                      this.state.totalVaccines
                  ]}
                  strokeWidth="3"
                  strokeColor={['#ffa502', '#16a716']}
                  strokeLinecap="butt"
                />
              </div>

              <div className="progressCount">
                <div className="ongoingIndicator" />
                <div className="gs0Para indicatorPara">Ongoing</div>
                <div className="count gs0Para">
                  {this.state.stageOngoing.stage4}{' '}
                  <span className="">{'/ ' + this.state.totalVaccines}</span>
                </div>
              </div>
              <div className="progressCount">
                <div className="successIndicator" />
                <div className="gs0Para indicatorPara">Success</div>
                <div className="count gs0Para">
                  {this.state.stageSuccess.stage4}{' '}
                  <span className="">{'/ ' + this.state.totalVaccines}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="stages stage5">
          <Link to="/stage-5">
            <div>
              <div className="icon">
                <img src={stage5Icon} alt="Stage 1 icon, Microscope Icon" />
              </div>
              <div className="stageTitle paragraph">
                <h3>
                  Production
                  <br />
                  Stage
                </h3>
              </div>
              <div className="stageNumber">
                <p className="c5Para">Stage 5</p>
              </div>
              <div className="totalStageCount">
                <h2>
                  {this.state.stageOngoing.stage5 >= 0 ? (
                    this.state.stageOngoing.stage5
                  ) : (
                    <Loading />
                  )}
                </h2>
              </div>
              <div className="progressBar">
                <Line
                  percent={[
                    (this.state.stageOngoing.stage5 * 100) /
                      this.state.totalVaccines,
                    (this.state.stageSuccess.stage5 * 100) /
                      this.state.totalVaccines
                  ]}
                  strokeWidth="3"
                  strokeColor={['#ffa502', '#16a716']}
                  strokeLinecap="butt"
                />
              </div>

              <div className="progressCount">
                <div className="ongoingIndicator" />
                <div className="gs0Para indicatorPara">Ongoing</div>
                <div className="count gs0Para">
                  {this.state.stageOngoing.stage5}{' '}
                  <span className="">{'/ ' + this.state.totalVaccines}</span>
                </div>
              </div>
              <div className="progressCount">
                <div className="successIndicator" />
                <div className="gs0Para indicatorPara">Success</div>
                <div className="count gs0Para">
                  {this.state.stageSuccess.stage4}{' '}
                  <span className="">{'/ ' + this.state.totalVaccines}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default TrackerMain
