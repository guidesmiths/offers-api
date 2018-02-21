const System = require('systemic');
const adminRoutes = require('./admin-routes');
const restApiRoutes = require('./rest-api-routes');

module.exports = new System({ name: 'routes' })
  .add('routes.admin', adminRoutes()).dependsOn('config', 'logger', 'app', 'middleware.prepper', 'manifest')
  .add('routes.rest.api', restApiRoutes()).dependsOn('config', 'logger', 'app', 'controller', 'middleware.prepper')
  .add('routes').dependsOn('routes.admin', 'routes.rest.api');
