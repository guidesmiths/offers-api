module.exports = {
    featuresByBundle: (root, { bundleId }, context) => context.controller.getFeaturesByBundle(bundleId),
    bundle: (root, { bundleId }, context) => context.controller.getBundle(bundleId),
};
