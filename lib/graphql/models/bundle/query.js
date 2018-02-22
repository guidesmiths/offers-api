module.exports = {
    bundlesByOffer: (root, { offerId }, context) => context.controller.getBundlesByOffer(offerId),
    bundle: (root, { bundleId }, context) => context.controller.getBundle(bundleId),
};
