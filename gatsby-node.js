const path = require('path');

exports.onCreatePage = async ({page, actions}) => {
  const {createPage} = actions;
  if (page.path.match(/^\/developer/)){
    createPage({
      path : '/developer',
      matchPath : '/developer/*',
      component : path.resolve('src/pages/developer.js')
    })
  }
}
