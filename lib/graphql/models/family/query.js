module.exports = {
    families: (root, args, context) => context.controller.getFamilies(),
    family: (root, { offerId }, context) => context.controller.getFamily(offerId),
};
