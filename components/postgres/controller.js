const debug = require('debug')('offers-controller');
module.exports = (options) => {

    const start = ({ postgres, config, logger }, cb) => {
        const getFamilies = () => {
            debug('Getting all families...');
            return postgres.query('SELECT * FROM families;')
                .then((result) => result.rows);
        };

        const getFamily = (family) => {
            debug(`Getting data for family ${family}`);
            return postgres.query(`SELECT * FROM families WHERE id=${family};`)
                .then((result) => result.rows.length && result.rows[0]);
        };

        const getOffersPerFamily = (family) => {
            debug(`Getting offers for family ${family}`);
            return Promise.resolve([{ id: 0 }, { id: 1 }]);
        };

        const getOffer = (offer) => {
            debug(`Getting data for offer ${offer}`);
            return Promise.resolve({ id: 1 });
        };

        const getBundlesByOffer = (offer) => {
            debug(`Getting bundles for offer ${offer}`);
            return Promise.resolve([{ id: 2 }]);
        };

        const getBundle = (bundle) => {
            debug(`Getting data for bundle ${bundle}`);
            return Promise.resolve({ id: 3 });
        };

        const getFeaturesByBundle = (bundle) => {
            debug(`Getting features for bundle ${bundle}`);
            return Promise.resolve([{ id: 4 }]);
        };

        const getFeature = (feature) => {
            debug(`Getting data for feature ${feature}`);
            return Promise.resolve({ id: 5 });
        };

        cb(null, {
            getFamilies, getFamily,
            getOffersPerFamily, getOffer,
            getBundlesByOffer, getBundle,
            getFeaturesByBundle, getFeature
        });
    };

    return { start };
  };
