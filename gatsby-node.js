exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allGoogleSheetVaccineDataRow {
        edges {
          node {
            id
            slug
          }
        }
        totalCount
      }
    }
  `)
  data.allGoogleSheetVaccineDataRow.edges.forEach(edge => {
    const slug = edge.node.slug
    actions.createPage({
      path: `/all-vaccine-developers/${slug}`,
      component: require.resolve(`./src/templates/vaccine-developers-page.js`),
      context: { slug: slug }
    })
  })
}
