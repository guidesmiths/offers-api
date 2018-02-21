module.exports = () => {

    const start = ({ controller, app }, cb) => {

        const process = (res) => (promise) =>
            promise
                .then((payload) => res.json(payload))
                .catch((err) => res.status(401).json(err));

        app.get([ '/api/v1/families', '/api/v1/families/:family' ], (req, res) => {
            const respond = process(res);
            const { family } = req.params;
            respond(controller.getFamilies(family));
        });

        app.get([ '/api/v1/families/:family/offers', '/api/v1/offers/:offer' ], (req, res) => {
            const respond = process(res);
            const { family, offer } = req.params;
            if (family) return respond(controller.getOffersPerFamily(family));
            respond(controller.getOffer(offer));
        });

        cb();
    };

    return { start };
  };
