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

        cb(null, {
            getFamilies, getFamily,
            getOffersPerFamily, getOffer
        });
    };

    return { start };
  };
