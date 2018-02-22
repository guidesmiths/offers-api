module.exports = {
    families: (root, args, context) => context.controller.getFamilies(),
    family: (root, { familyId }, context) => context.controller.getFamily(familyId),
};
