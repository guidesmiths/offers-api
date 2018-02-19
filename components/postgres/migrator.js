const marv = require('marv');
const pgDriver = require('marv-pg-driver');
const { join } = require('path');

module.exports = (options) => {

	const start = ({ config }, cb) => {
		const directory = join(process.cwd(), 'migrations' )
		const driver = pgDriver({ connection: config.postgres })
		marv.scan(directory, (err, migrations) => {
				if (err) return cb(err)
				marv.migrate(migrations, driver, cb);
		});
	};

	return { start };
};
