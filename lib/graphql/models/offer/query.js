module.exports = {
    offersByFamily: (root, { familyId }, context) => context.controller.getOffersPerFamily(familyId),
    offer: (root, { offerId }, context) => context.controller.getOffer(offerId),
};
