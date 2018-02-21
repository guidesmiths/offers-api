const R = require('ramda');
const sequential = R.reduce((chain, promise) => chain.then(promise), Promise.resolve());

module.exports = () => {

    const start = ({ controller, app }, cb) => {

        const getData = (sequence) => (res) =>
            sequential(sequence)
                .then((response) => res.json(response))
                .catch((err) => res.status(401).json(err));

        app.get([ '/api/v1/families', '/api/v1/families/:family' ], (req, res) => {
            const { family } = req.params;
            getData([
                () => controller.getFamilies(family)
            ])(res);
        });
        cb();
    };

    return { start };
  };
