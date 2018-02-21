module.exports = () => {

    const start = ({ controller, app }, cb) => {

        const process = (res) => (promise) =>
            promise
                .then((payload) => res.json(payload))
                .catch((err) => res.status(401).json(err));

        app.get([ '/api/v1/families', '/api/v1/families/:family' ], (req, res) => {
            const respond = process(res);
            const { family } = req.params;
            const operation = family ? controller.getFamily.bind(null, family) : controller.getFamilies.bind(null, null);
            respond(operation());
        });

        app.get('/api/v1/families/:family/offers', (req, res) => {
            const respond = process(res);
            const { family } = req.params;
            respond(controller.getOffersPerFamily(family));
        });

        app.get('/api/v1/offers/:offer', (req, res) => {
            const respond = process(res);
            const { offer } = req.params;
            respond(controller.getOffer(offer));
        });

        app.get('/api/v1/offers/:offer/bundles', (req, res) => {
            const respond = process(res);
            const { offer } = req.params;
            respond(controller.getBundlesByOffer(offer));
        });

        app.get('/api/v1/bundles/:bundle', (req, res) => {
            const respond = process(res);
            const { bundle } = req.params;
            respond(controller.getBundle(bundle));
        });

        cb();
    };

    return { start };
  };
