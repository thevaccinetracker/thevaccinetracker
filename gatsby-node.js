const path = require('path')
const tableTop = require('tabletop')
// const apiService = require('./src/service/apiService');

const createPages = async ({ page, actions }) => {
  return new Promise((res, rej) => {
    tableTop.init({
      key: '1ImpYv9-_qKmF8JkdV8YW1tN8IAycPszPpG6VCn-rH4Q',
      callback: async function (list) {
        const vaccines = list.vaccineData.elements
        const { createPage } = actions
        vaccines.forEach(vaccine => {
          createPage({
            path: `/developer/${vaccine.slug}`,
            component: path.resolve('src/pages/developer.js'),
            context: { vaccine }
          })
        })
        res(true)
      }
    })
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/developer/)) {
    createPage({
      path: '/developer/',
      matchPath: '/developer/*',
      component: path.resolve('src/pages/developer.js')
    })
  }
  await createPages({ page, actions })
}
