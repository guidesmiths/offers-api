const R = require('ramda');
const { readdirSync, readFileSync, existsSync } = require('fs');
const { join } = require('path');
const graphqlHTTP = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');

module.exports = () => {

    const start = ({ controller, app }, cb) => {

        const modelsPath = join(process.cwd(), 'lib', 'graphql', 'models');
        const toFilePath = (file) => (model) => join(modelsPath, model, file);
        const models = readdirSync(modelsPath);

        const buildDefinitions = R.pipe(
            R.map(toFilePath('definition.graphql')),
            R.filter(existsSync),
            R.map(R.flip(R.curry(readFileSync))('utf-8')),
            R.reduce(R.concat, '')
        );

        const mergeResolvers = (resolverFile) =>
            R.pipe(
                R.map(toFilePath(resolverFile)),
                R.filter(existsSync),
                R.map(require),
                R.reduce(R.merge, {})
            );

        const mergeQueries = mergeResolvers('query.js');
        const mergeCustomResolvers = mergeResolvers('resolver.js');

        const typeDefs = buildDefinitions(models);
        const queries = mergeQueries(models);
        const customResolvers = mergeCustomResolvers(models);

        const resolvers = R.merge({ Query: queries }, customResolvers);

        app.use(
            '/graphql',
            graphqlHTTP({
                schema: makeExecutableSchema({ typeDefs, resolvers }),
                graphiql: true,
                context: { controller }
            })
        );
        cb();
    };

    return { start };
};
