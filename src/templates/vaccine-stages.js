import React from 'react'
import '../assets/styles/style.scss'
import MainFooter from '../components/MainFooter'
import MainHeader from '../components/MainHeader'
import SEO from '../components/seo'
import { Line } from 'rc-progress'
import Loader from 'react-loader-spinner'
import VaccineStageImage from '../assets/images/vaccine-stages.svg'
import stage1Icon from '../assets/images/exploratory.svg'
import VaccineCard from '../components/vaccineCard/vaccineCard'
import stage2Icon from '../assets/images/preClinical.svg'
import stage3Icon from '../assets/images/humanTrials.svg'
import stage4Icon from '../assets/images/approval.svg'
import stage5Icon from '../assets/images/production.svg'
import { Link } from 'gatsby'

class VaccineStages extends React.Component {
  stageMessage = {
    1: `This is the first step in developing a new vaccine for any disease or virus. This stage involves laboratory research done by different scientists. Researchers try to identify the structure of proteins that build up the virus and focus on building an antigen, natural or synthetic that might help boosts up our immune system by helping our immune system to identify virus and helps our body to fight the virus in a better way.`,
    2: `This stage involves the initial phase of testing usually done on animals in order to assess the safety of the vaccine and its ability to develop an immune response. These tests further give an idea to researchers of the cellular responses they might expect in humans. Researchers may adapt the candidate vaccine during the preclinical state to try to make it more effective. They may further do challenge studies with the animals, meaning that they vaccinate the animals and then attempt to infect them with the target pathogen. Animal subjects may include mice and monkeys.These are also used to see how effective the vaccine is at preventing the disease, and allows researchers to adopt the vaccine.
    Many candidate vaccines never progress beyond this stage because they fail to produce the required immune response.`,
    3: `This stage further includes three phases. The first Phase includes testing a small group of individuals usually between 20-80 people but yes depends on the permission and the organisation. These tests intend to assess the safety of the vaccine and the type and extent of the immune response that the vaccine invokes.  In the second phase, the clinical study is expanded and vaccines are given to people who have characteristics (such as age and physical health) similar to those for whom the new vaccine is intended. This stage targets populations who are ideally those most at risk of the disease. In third stage candidate vaccines move on to larger trials, involving thousands to tens of thousands of individuals. Here the vaccine is given to thousands of individuals and tested for efficacy and safety.`,
    4: `After the successful third stage clinical trials, the candidate vaccine goes through a set of regulatory review and approval procedures from the concerned authorities. In the USA,  the FDA takes care of the regulatory review and approval procedure. After a successful third stage of clinical trial, the vaccine developer will submit a Biologics License Application to the FDA. Then the FDA will inspect the factory where the vaccine will be made and approve the labeling of the vaccine.In India, The Central Drugs Standard Control Organisation (CDSCO) is responsible for the same.`,
    5: `Once a vaccine has been created at a small scale and passed safety tests, it can be used in clinical trials. However, important manufacturing capacity, like infrastructure, personnel, and equipment, will be required to produce large quantities of a vaccine to be used. The regulatory organizations continue to monitor the production of the vaccine, including inspecting facilities and reviewing the manufacturer’s tests of lots of vaccines for potency, safety, and purity.`
  }

  loading = () => {
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

  getStages = () => {
    const { vaccineStages, totalVaccineCount } = this.props.pageContext
    let ongoingStage = vaccineStages[0]
    let successStage = vaccineStages[1]
    return {
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
      totalVaccines: totalVaccineCount,
      stage3Ongoing:
        parseInt(ongoingStage.s3Phase1) +
        parseInt(ongoingStage.s3Phase2) +
        parseInt(ongoingStage.s3Phase3),
      stage3Success:
        parseInt(ongoingStage.stage4) + parseInt(ongoingStage.stage5)
    }
  }

  stage1Card = (
    stageOngoing,
    stageSuccess,
    totalVaccines,
    stage3Ongoing,
    stage3Success
  ) => {
    return (
      <div className="stages stage1">
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
            {stageOngoing.stage1 >= 0 ? stageOngoing.stage1 : this.loading()}
          </h2>
        </div>
        <div className="progressBar">
          <Line
            percent={[
              (stageSuccess.stage1 * 100) / totalVaccines,
              (stageOngoing.stage1 * 100) / totalVaccines
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
            {stageOngoing.stage1}{' '}
            <span className="">{'/ ' + totalVaccines}</span>
          </div>
        </div>
        <div className="progressCount">
          <div className="successIndicator" />
          <div className="gs0Para indicatorPara">Success</div>
          <div className="count gs0Para">
            {stageSuccess.stage1}{' '}
            <span className="totalVaccinesCount">{'/ ' + totalVaccines}</span>
          </div>
        </div>
      </div>
    )
  }

  stage2Card = (
    stageOngoing,
    stageSuccess,
    totalVaccines,
    stage3Ongoing,
    stage3Success
  ) => {
    return (
      <div className="stages stage2">
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
            {stageOngoing.stage2 >= 0 ? stageOngoing.stage2 : this.loading()}
          </h2>
        </div>
        <div className="progressBar">
          <Line
            percent={[
              (stageOngoing.stage2 * 100) / totalVaccines,
              (stageSuccess.stage2 * 100) / totalVaccines
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
            {stageOngoing.stage2}{' '}
            <span className="">{'/ ' + totalVaccines}</span>
          </div>
        </div>
        <div className="progressCount">
          <div className="successIndicator" />
          <div className="gs0Para indicatorPara">Success</div>
          <div className="count gs0Para">
            {stageSuccess.stage2}{' '}
            <span className="">{'/ ' + totalVaccines}</span>
          </div>
        </div>
      </div>
    )
  }

  stage3Card = (
    stageOngoing,
    stageSuccess,
    totalVaccines,
    stage3Ongoing,
    stage3Success
  ) => {
    return (
      <div className="stages stage3">
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
              {stageOngoing.s3Phase1 >= 0
                ? stageOngoing.s3Phase1
                : this.loading()}
            </h2>
            <p className="c5Para">S3 : Phase 1</p>
          </div>
          <div className="phases phase2">
            <h2>
              {stageOngoing.s3Phase2 >= 0
                ? stageOngoing.s3Phase2
                : this.loading()}
            </h2>
            <p className="c5Para">S3 : Phase 2</p>
          </div>
          <div className="phases phase3">
            <h2>
              {stageOngoing.s3Phase3 >= 0
                ? stageOngoing.s3Phase3
                : this.loading()}
            </h2>
            <p className="c5Para">S3 : Phase 3</p>
          </div>
        </div>
        <div className="progressBar">
          <Line
            percent={[
              (stage3Ongoing * 100) / totalVaccines,
              (stage3Success * 100) / totalVaccines
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
            {stage3Ongoing} <span className="">{'/ ' + totalVaccines}</span>
          </div>
        </div>
        <div className="progressCount">
          <div className="successIndicator" />
          <div className="gs0Para indicatorPara">Success</div>
          <div className="count gs0Para">
            {stage3Success} <span className="">{'/ ' + totalVaccines}</span>
          </div>
        </div>
      </div>
    )
  }

  stage4Card = (
    stageOngoing,
    stageSuccess,
    totalVaccines,
    stage3Ongoing,
    stage3Success
  ) => {
    return (
      <div className="stages stage4">
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
            {stageOngoing.stage4 >= 0 ? stageOngoing.stage4 : this.loading()}
          </h2>
        </div>
        <div className="progressBar">
          <Line
            percent={[
              (stageOngoing.stage4 * 100) / totalVaccines,
              (stageSuccess.stage4 * 100) / totalVaccines
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
            {stageOngoing.stage4}{' '}
            <span className="">{'/ ' + totalVaccines}</span>
          </div>
        </div>
        <div className="progressCount">
          <div className="successIndicator" />
          <div className="gs0Para indicatorPara">Success</div>
          <div className="count gs0Para">
            {stageSuccess.stage4}{' '}
            <span className="">{'/ ' + totalVaccines}</span>
          </div>
        </div>
      </div>
    )
  }

  stage5Card = (
    stageOngoing,
    stageSuccess,
    totalVaccines,
    stage3Ongoing,
    stage3Success
  ) => {
    return (
      <div className="stages stage5">
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
            {stageOngoing.stage5 >= 0 ? stageOngoing.stage5 : this.loading()}
          </h2>
        </div>
        <div className="progressBar">
          <Line
            percent={[
              (stageOngoing.stage5 * 100) / totalVaccines,
              (stageSuccess.stage5 * 100) / totalVaccines
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
            {stageOngoing.stage5}{' '}
            <span className="">{'/ ' + totalVaccines}</span>
          </div>
        </div>
        <div className="progressCount">
          <div className="successIndicator" />
          <div className="gs0Para indicatorPara">Success</div>
          <div className="count gs0Para">
            {stageSuccess.stage4}{' '}
            <span className="">{'/ ' + totalVaccines}</span>
          </div>
        </div>
      </div>
    )
  }

  stageCard = (
    stageOngoing,
    stageSuccess,
    totalVaccines,
    stage3Ongoing,
    stage3Success,
    stage
  ) => {
    switch (stage) {
      case 1:
        return this.stage1Card(
          stageOngoing,
          stageSuccess,
          totalVaccines,
          stage3Ongoing,
          stage3Success
        )
      case 2:
        return this.stage2Card(
          stageOngoing,
          stageSuccess,
          totalVaccines,
          stage3Ongoing,
          stage3Success
        )
      case 3:
        return this.stage3Card(
          stageOngoing,
          stageSuccess,
          totalVaccines,
          stage3Ongoing,
          stage3Success
        )
      case 4:
        return this.stage4Card(
          stageOngoing,
          stageSuccess,
          totalVaccines,
          stage3Ongoing,
          stage3Success
        )
      case 5:
        return this.stage5Card(
          stageOngoing,
          stageSuccess,
          totalVaccines,
          stage3Ongoing,
          stage3Success
        )
      default:
        return null
    }
  }

  render() {
    const { path } = this.props
    const stage = parseInt(this.props.path.split('-')[1])
    const {
      stageOngoing,
      stageSuccess,
      totalVaccines,
      stage3Ongoing,
      stage3Success
    } = this.getStages()
    return (
      <div className="homePage">
        <SEO title="Stages of vaccines" />
        <MainHeader />
        <div className="firstFold">
          <div className="container">
            <div className="vaccine-stages-row row">
              <div className="">
                <h1 className="vaccine-stages-heading">
                  Vaccine Development Stages
                </h1>
                <ul className="mainStageNumbers">
                  <li className={path === '/stage-1' ? 'active' : ''}>
                    <Link to="/stage-1">Stage 1</Link>
                  </li>
                  <li className={path === '/stage-2' ? 'active' : ''}>
                    <Link to="/stage-2">Stage 2</Link>
                  </li>
                  <li className={path === '/stage-3' ? 'active' : ''}>
                    <Link to="/stage-3">Stage 3</Link>
                  </li>
                  <li className={path === '/stage-4' ? 'active' : ''}>
                    <Link to="/stage-4">Stage 4</Link>
                  </li>
                  <li className={path === '/stage-5' ? 'active' : ''}>
                    <Link to="/stage-5">Stage 5</Link>
                  </li>
                </ul>
              </div>
              <div className="col vaccineIllustration">
                <img
                  alt="Vaccine development stages"
                  className="img img-responsive"
                  src={VaccineStageImage}
                />
              </div>
            </div>
            <div className="covidVaccineStagesAndPhases vaccine-stages">
              {this.stageCard(
                stageOngoing,
                stageSuccess,
                totalVaccines,
                stage3Ongoing,
                stage3Success,
                stage
              )}
              <div className="stages vaccine-container">
                <p>{this.stageMessage[stage]}</p>
                <div>
                  <h2 className="companies-stage-heading">
                    Companies currently in this stage
                  </h2>
                </div>
                <div className="developers-container">
                  {this.props.pageContext.vaccines.length ? (
                    this.props.pageContext.vaccines.map((vaccine, index) => (
                      <VaccineCard key={index} vaccine={vaccine} />
                    ))
                  ) : (
                    <div className="no-vaccines">No Vaccines</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <MainFooter />
      </div>
    )
  }
}

export default VaccineStages
