exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
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

  const { data: vaccineStageData } = await graphql(`
    query {
      allGoogleSheetVaccineCountsRow {
        nodes {
          s3Phase1
          s3Phase2
          s3Phase3
          stage1
          stage2
          stage4
          stage5
        }
        totalCount
      }
    }
  `)

  const vaccineStages = vaccineStageData.allGoogleSheetVaccineCountsRow.nodes
  const totalCount = vaccineStageData.allGoogleSheetVaccineCountsRow.totalCount
  let allVaccines = []
  data.allGoogleSheetVaccineDataRow.edges.forEach(edge => {
    let vaccine = edge.node
    vaccine = {
      ...vaccine,
      stage: parseInt(vaccine.currentstage.charAt(1)),
      phase: parseInt(vaccine.currentstage.split('Phase')[1]) || null
    }
    if (!allVaccines[vaccine.stage]) allVaccines[vaccine.stage] = []
    else {
      allVaccines[vaccine.stage] = [
        ...allVaccines[vaccine.stage],
        { ...vaccine }
      ]
    }
    actions.createPage({
      path: `/all-vaccine-developers/${vaccine.slug}`,
      component: require.resolve(`./src/templates/vaccine-developers-page.js`),
      context: { vaccine }
    })
  })

  const stages = ['stage-1', 'stage-2', 'stage-3', 'stage-4', 'stage-5']
  stages.forEach(stage => {
    let stageNo = stage.split('-')[1]
    actions.createPage({
      path: `/${stage}`,
      component: require.resolve(`./src/templates/vaccine-stages.js`),
      context: {
        vaccines: allVaccines[stageNo] || [],
        vaccineStages,
        totalCount,
        totalVaccineCount: data.allGoogleSheetVaccineDataRow.edges.length
      }
    })
  })
}
