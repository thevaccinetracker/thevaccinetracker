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
  data.allGoogleSheetVaccineDataRow.edges.forEach(edge => {
    let vaccine = edge.node
    vaccine = {
      ...vaccine,
      stage: parseInt(vaccine.currentstage.charAt(1)),
      phase: parseInt(vaccine.currentstage.split('Phase')[1]) || null
    }
    actions.createPage({
      path: `/all-vaccine-developers/${vaccine.slug}`,
      component: require.resolve(`./src/templates/vaccine-developers-page.js`),
      context: { vaccine }
    })
  })
}
