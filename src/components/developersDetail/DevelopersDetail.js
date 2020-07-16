import Loader from 'react-loader-spinner'
import React from 'react'
// import { vaccineObj } from '../../contants/conts.js'
import { graphql, useStaticQuery } from 'gatsby'
import VaccineCard from '../vaccineCard/vaccineCard'

class DevelopersDetail extends React.Component {
  constructor() {
    super()
    this.state = {
      vaccineList: [],
      searchEntered: ''
    }
  }

  componentDidMount() {
    this.setState({
      vaccineList: this.props.vaccines.map(vaccine => ({
        ...vaccine,
        stage: parseInt(vaccine.currentstage.charAt(1)),
        phase: parseInt(vaccine.currentstage.split('Phase')[1]) || null
      }))
    })
  }

  updateSearch(event) {
    this.setState({
      searchEntered: event.target.value
    })
  }

  render() {
    const Loading = () => {
      return (
        <Loader
          type="Circles"
          color="#FEB9D3"
          height={40}
          width={40}
          style={{
            textAlign: 'center'
          }}
        />
      )
    }

    const MainOrganisationBox = () => {
      let filteredVaccineList = this.state.vaccineList.filter(
        vaccineDeveloper => {
          return (
            vaccineDeveloper.developersname
              .toLowerCase()
              .indexOf(this.state.searchEntered.toLowerCase()) !== -1
          )
        }
      )

      return filteredVaccineList
        .map((vaccine, index) => {
          // let vaccineStage = vaccineObj[vaccine.currentstage]
          return <VaccineCard key={index} vaccine={vaccine} />
        })
        .slice(0, this.props.showDataFor)
    }
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
                  onChange={this.updateSearch.bind(this)}
                />
                <i aria-hidden="true" className="search icon" />
              </div>
            </div>
          ) : (
            <div className="search" />
          )}
        </div>

        {this.state.vaccineList.length === 0 ? (
          <Loading />
        ) : (
          <MainOrganisationBox />
        )}
      </div>
    )
  }
}

export default props => {
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
  `)
  let vaccines = []
  data.allGoogleSheetVaccineDataRow.edges.forEach(edge => {
    const vaccine = edge.node
    vaccines = [...vaccines, { ...vaccine }]
  })
  return <DevelopersDetail {...props} vaccines={vaccines} />
}
