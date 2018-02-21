const R = require('ramda');
const sequential = R.reduce((chain, promise) => chain.then(promise), Promise.resolve());

module.exports = () => {

    const start = ({ controller, app }, cb) => {
        app.get('/api/v1/families', (req, res) => {
            sequential([
                () => controller.getFamilies()
            ])
            .then((families) => res.json(families))
            .catch((err) => res.json(err));
        });
        cb();
    };

    return { start };
  };
