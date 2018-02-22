module.exports = {
    Bundle: {
        features: (root, args, context) => context.controller.getFeaturesByBundle(root.id)
    }
};
