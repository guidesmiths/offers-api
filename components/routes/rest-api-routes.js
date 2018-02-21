const R = require('ramda');
const sequential = R.reduce((chain, promise) => chain.then(promise), Promise.resolve());

module.exports = () => {

    const start = ({ controller, app }, cb) => {

        const getData = (res, sequence) =>
            sequential(sequence)
                .then((response) => res.json(response))
                .catch((err) => res.status(401).json(err));

        app.get([ '/api/v1/families', '/api/v1/families/:family' ], (req, res) => {
            const { family } = req.params;
            getData(res, [
                () => controller.getFamilies(family)
            ]);
        });

        app.get([ '/api/v1/families/:family/offers', '/api/v1/offers/:offer' ], (req, res) => {
            const { family, offer } = req.params;
            if (family) return getData(res, [
                () => controller.getOffersPerFamily(family)
            ]);
            getData(res, [
                () => controller.getOffer(offer)
            ]);
        });

        cb();
    };

    return { start };
  };
