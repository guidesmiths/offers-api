const R = require('ramda');

const translateFamilies = R.reduce((total, { id, name, title, icon, titleTariff }) => {
    const statement = `INSERT INTO families VALUES(${id}, "${name}", "${title}", "${icon}", "${titleTariff}");`
    return total.concat(statement).concat('\n');
}, '');

const translateOffers = R.reduce((total, { id, name, title, multichoice }) => {
    const statement = `INSERT INTO offers VALUES(${id}, "${name}", "${title}", ${multichoice});`
    return total.concat(statement).concat('\n');
}, '');

const translateBundles = R.reduce((total, { id, name, price }) => {
    const statement = `INSERT INTO bundles VALUES(${id}, "${name}", "${price}"});`
    return total.concat(statement).concat('\n');
}, '');

const translateFeatures = R.reduce((total, { id, category, value, units }) => {
    const statement = `INSERT INTO features VALUES(${id}, "${category}", "${value}", ${units});`
    return total.concat(statement).concat('\n');
}, '');

const generateRelatedStatements = (table, id, relatedItems) => {
    const toInsert = (relatedId) => `INSERT INTO ${table} VALUES(${id}, ${relatedId});\n`;
    return R.pipe(
        R.pluck('id'),
        R.map(toInsert),
        R.join('\n')
    )(relatedItems);
};

const translateFamilyToOffers = R.reduce((total, { id, offers }) => R.concat(generateRelatedStatements('family_to_offer', id, offers), total), '');
const translateOfferToBundles = R.reduce((total, { id, bundles }) => R.concat(generateRelatedStatements('offer_to_bundle', id, bundles), total), '');
const translateBundleToFeatures = R.reduce((total, { id, features }) => R.concat(generateRelatedStatements('bundle_to_features', id, features), total), '');

const families = require('../fixtures/all-families.json');
const offers = R.flatten(R.pluck('offers', families));
const bundles = R.flatten(R.pluck('bundles', offers));
const features = R.flatten(R.pluck('features', bundles));

console.log(`/******** TRANSLATING FAMILIES: ********/: \n${translateFamilies(families)} \n`);
console.log(`/******** TRANSLATING OFFERS: ********/: \n${translateOffers(offers)} \n`);
console.log(`/******** TRANSLATING BUNDLES: ********/: \n${translateBundles(bundles)} \n`);
console.log(`/******** TRANSLATING FEATURES: ********/: \n${translateFeatures(features)} \n`);
console.log(`/******** TRANSLATING FAMILY TO OFFERS: ********/: \n${translateFamilyToOffers(families)} \n`);
console.log(`/******** TRANSLATING OFFER TO BUNDLES: ********/: \n${translateOfferToBundles(offers)} \n`);
console.log(`/******** TRANSLATING BUNDLE TO FEATURES: ********/: \n${translateBundleToFeatures(bundles)} \n`);
