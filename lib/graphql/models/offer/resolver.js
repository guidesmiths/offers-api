module.exports = {
    Offer: {
        bundles: (root, args, context) => context.controller.getBundlesByOffer(root.id)
    }
};
