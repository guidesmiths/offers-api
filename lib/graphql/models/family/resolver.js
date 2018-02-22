module.exports = {
    Family: {
        offers: (root, args, context) => context.controller.getOffersPerFamily(root.id)
    }
};
