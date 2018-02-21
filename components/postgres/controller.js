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
            return postgres.query(`SELECT off.id, off.name, off.title, off.multichoice
                FROM offers off
                JOIN family_to_offer fto ON off.id=fto.offer_id
                WHERE fto.family_id=${family};`)
                    .then((result) => result.rows);
        };

        const getOffer = (offer) => {
            debug(`Getting data for offer ${offer}`);
            return postgres.query(`SELECT * FROM offers WHERE id=${offer};`)
                .then((result) => result.rows.length && result.rows[0]);
        };

        const getBundlesByOffer = (offer) => {
            debug(`Getting bundles for offer ${offer}`);
            return postgres.query(`SELECT bund.id, bund.name, bund.price
                FROM bundles bund
                JOIN offer_to_bundle otb
                ON bund.id=otb.bundle_id
                WHERE otb.offer_id=${offer};`)
                    .then((result) => result.rows);
        };

        const getBundle = (bundle) => {
            debug(`Getting data for bundle ${bundle}`);
            return postgres.query(`SELECT * FROM bundles WHERE id=${bundle};`)
                .then((result) => result.rows.length && result.rows[0]);
        };

        const getFeaturesByBundle = (bundle) => {
            debug(`Getting features for bundle ${bundle}`);
            return postgres.query(`SELECT feat.id, feat.category, feat.value, feat.units
                FROM features feat
                JOIN bundle_to_feature btf
                ON feat.id=btf.feature_id
                WHERE btf.bundle_id=${bundle};`)
                    .then((result) => result.rows);
        };

        const getFeature = (feature) => {
            debug(`Getting data for feature ${feature}`);
            return postgres.query(`SELECT * FROM features WHERE id=${feature};`)
                .then((result) => result.rows.length && result.rows[0]);
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
