const path = require('path')

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  const categories = [
    {
      name: 'university-of-oxford-astrazeneca',
      sub: []
    },
    {
      name: 'cansino-biological-inc-beijing-institute-of-biotechnology',
      sub: []
    }
  ]

  categories.forEach(categories => {
    createPage({
      path: `/all-vaccine-developers/${categories.name}`,
      component: require.resolve(`./src/templates/vaccine-developers-page.js`),
      context: { categories }
    })
  })
}
