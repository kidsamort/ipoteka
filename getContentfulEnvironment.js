const contentfulManagement = require("contentful-management")

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: 'CFPAT-MbdrO9VxyFIVyTILxO4FdrgFxF4DRXkoK8NhaACldK4',
  })

  return contentfulClient
    .getSpace('yg61iih4r5cb')
    .then(space => space.getEnvironment('master'))
}