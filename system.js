const System = require('systemic');
const { join } = require('path');

module.exports = () => new System({ name: 'offers-api' }).bootstrap(join(__dirname, 'components'));
