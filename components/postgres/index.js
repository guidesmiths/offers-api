const System = require('systemic');
const migrator = require('./migrator');
const postgres = require('systemic-pg');
const createController = require('./controller');

module.exports = new System({ name: 'postgres' })
    .add('postgres-migrator', migrator()).dependsOn({ component: 'config', source: 'postgres', destination: 'config.postgres' })
    .add('postgres', postgres()).dependsOn('config', 'logger', 'postgres-migrator')
    .add('controller', createController()).dependsOn('config', 'logger', 'postgres');
