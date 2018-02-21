const debug = require('debug')('offers-controller');
module.exports = (options) => {

    const start = ({ postgres, config, logger }, cb) => {
        const getFamilies = () => {
            debug('Getting all families...');
            return Promise.resolve([{ id: 0 }, { id: 1 }]);
        };

        const getFamily = (family) => {
            debug(`Getting data for family ${family}`);
            return Promise.resolve({ id: 0 });
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
            return Promise.resolve({ id: 2 });
        };

        const getBundle = (bundle) => {
            debug(`Getting data for bundle ${bundle}`);
            return Promise.resolve({ id: 3 });
        };

        cb(null, {
            getFamilies, getFamily,
            getOffersPerFamily, getOffer,
            getBundlesByOffer, getBundle
        });
    };

    return { start };
  };
