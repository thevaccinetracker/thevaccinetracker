import * as React from "react";
import Loader from "react-loader-spinner";
import { Link } from "gatsby";
import Fade from "react-reveal/Fade";
import { vaccineObj } from "../../contants/conts";
import { graphql, useStaticQuery } from "gatsby";

export interface DevelopersDetailProps {
  vaccines: any[];
  showDataFor?: number;
  title?: string;
  showSearch?: boolean;
}

export interface DevelopersDetailState {
  vaccineList: any[];
  searchEntered: string;
}

class DevelopersDetail extends React.PureComponent<DevelopersDetailProps, DevelopersDetailState> {
  constructor(props: DevelopersDetailProps) {
    super(props);
    this.state = {
      vaccineList: [],
      searchEntered: ""
    };
  }

  componentDidMount() {
    this.setState({
      vaccineList: this.props.vaccines.map(vaccine => ({
        ...vaccine,
        stage: parseInt(vaccine.currentstage.charAt(1)),
        phase: parseInt(vaccine.currentstage.split("Phase")[1]) || null
      }))
    });
  }

  updateSearch = (event) => {
    this.setState({
      searchEntered: event.target.value
    });
  };

  MainOrganisationBox = () => {
    let filteredVaccineList = this.state.vaccineList.filter(
      vaccineDeveloper => {
        return (
          vaccineDeveloper.developersname
            .toLowerCase()
            .indexOf(this.state.searchEntered.toLowerCase()) !== -1
        );
      }
    );

    return filteredVaccineList
      .map(vaccine => {
        let vaccineStage = vaccineObj[vaccine.currentstage];
        return (
          <Fade bottom key={vaccine.researcherid}>
            <Link to={`/all-vaccine-developers/${vaccine.slug}`}>
              <div className="mainOrganisationBox">
                <div className="row">
                  <div className="col-md-1 col-xs-3 hidden-xs">
                    <div className={`icon ${vaccineStage.class}`}>
                      <img
                        src={vaccineStage.icon}
                        alt={`${vaccineStage.icon_alt}`}
                      />
                    </div>
                  </div>
                  <div className="col-md-7 col-xs-12 companyInfoLabel">
                    <div className="companyLabel c5Para">Company Name</div>
                    <h4 className="companyName">{vaccine.developersname}</h4>
                  </div>
                  <div className="col-md-4 col-xs-12">
                    <div className="currentStageGraph">
                      <div
                        className={`stage s1 ${
                          vaccine.stage >= 1 ? "highlight" : ""
                        }`}
                      />
                      <div
                        className={`stage s2 ${
                          vaccine.stage >= 2 ? "highlight" : ""
                        }`}
                      />
                      <div
                        className={`stage s3 ${
                          vaccine.stage >= 3 ? "highlight" : ""
                        }`}
                      >
                        <div
                          className={`phase p1 ${
                            vaccine.stage >= 4 ||
                            (vaccine.stage === 3 && vaccine.phase >= 1)
                              ? "highlight"
                              : ""
                          }`}
                        />
                        <div
                          className={`phase p2 ${
                            vaccine.stage >= 4 ||
                            (vaccine.stage === 3 && vaccine.phase >= 2)
                              ? "highlight"
                              : ""
                          }`}
                        />
                        <div
                          className={`phase p3 ${
                            vaccine.stage >= 4 ||
                            (vaccine.stage === 3 && vaccine.phase >= 3)
                              ? "highlight"
                              : ""
                          }`}
                        />
                      </div>
                      <div
                        className={`stage s4 ${
                          vaccine.stage >= 4 ? "highlight" : ""
                        }`}
                      />
                      <div
                        className={`stage s5 ${
                          vaccine.stage >= 5 ? "highlight" : ""
                        }`}
                      />
                    </div>
                    <div className="currentStageText">
                      <p className="gs0Para">Current Stage</p>
                      <p className="stageNumber c5Para">
                        {vaccineStage.text}
                      </p>
                    </div>
                  </div>
                  {/* <div className="col-md-2 col-xs-12">
                        <button type="button" className="whiteCTA-outline">More Details</button>
                      </div> */}
                </div>
              </div>
            </Link>
          </Fade>
        );
      })
      .slice(0, this.props.showDataFor);
  };

  render() {
    const Loading = () => {
      return (
        <Loader
          type="Circles"
          color="#FEB9D3"
          height={40}
          width={40}
          // style={{
          //   textAlign: "center"
          // }}
        />
      );
    };


    return (
      <div className="developersDetailedStages">
        <div className="devlopersHeader">
          <div className="heading">
            <h1>{this.props.title}</h1>
          </div>
          {this.props.showSearch === true ? (
            <div className="search">
              <div className="ui icon input">
                <input
                  placeholder="Search for Vaccine Developer"
                  type="text"
                  value={this.state.searchEntered}
                  onChange={this.updateSearch}
                />
                <i aria-hidden="true" className="search icon"/>
              </div>
            </div>
          ) : (
            <div className="search"/>
          )}
        </div>

        {this.state.vaccineList.length === 0 ? (
          <Loading/>
        ) : (
          this.MainOrganisationBox()
        )}
      </div>
    );
  }
}

const DeveloperDetailsContainer = (props: Partial<DevelopersDetailProps>) => {
  const data = useStaticQuery(graphql`
    query {
      allGoogleSheetVaccineDataRow {
        edges {
          node {
            id
            no
            slug
            currentstage
            developersname
            rawphases
            researcherid
          }
        }
        totalCount
      }
    }
  `);
  let vaccines = [];
  data.allGoogleSheetVaccineDataRow.edges.forEach(edge => {
    const vaccine = edge.node;
    vaccines = [...vaccines, { ...vaccine }];
  });
  return <DevelopersDetail {...props} vaccines={vaccines}/>;
};

export default React.memo(DeveloperDetailsContainer);
