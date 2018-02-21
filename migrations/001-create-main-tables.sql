DROP TABLE IF EXISTS families;
CREATE TABLE IF NOT EXISTS families (
    id  integer NOT NULL,
    name    varchar(40),
    title   varchar(40),
    icon    varchar(40),
    titleTariff varchar(40),
    PRIMARY KEY(id)
);
CREATE INDEX families_idx ON families(id);

DROP TABLE IF EXISTS family_to_offer;
CREATE TABLE IF NOT EXISTS family_to_offer (
    family_id  integer NOT NULL,
    offer_id  integer NOT NULL,
    PRIMARY KEY(family_id, offer_id)
);
CREATE INDEX family_to_offer_idx ON family_to_offer(family_id);

DROP TABLE IF EXISTS offers;
CREATE TABLE IF NOT EXISTS offers (
    id  integer NOT NULL,
    name    varchar(40),
    title   varchar(40),
    multichoice    boolean,
    PRIMARY KEY(id)
);
CREATE INDEX offers_idx ON offers(id);

DROP TABLE IF EXISTS offer_to_bundle;
CREATE TABLE IF NOT EXISTS offer_to_bundle (
    offer_id  integer NOT NULL,
    bundle_id  integer NOT NULL,
    PRIMARY KEY(offer_id, bundle_id)
);
CREATE INDEX offer_to_bundle_idx ON offer_to_bundle(offer_id);

DROP TABLE IF EXISTS bundles;
CREATE TABLE IF NOT EXISTS bundles (
    id  integer NOT NULL,
    name    varchar(40),
    price   varchar(40),
    PRIMARY KEY(id)
);
CREATE INDEX bundles_idx ON bundles(id);

DROP TABLE IF EXISTS bundle_to_feature;
CREATE TABLE IF NOT EXISTS bundle_to_feature (
    bundle_id  integer NOT NULL,
    feature_id  integer NOT NULL,
    PRIMARY KEY(bundle_id, feature_id)
);
CREATE INDEX bundle_to_feature_idx ON bundle_to_feature(bundle_id);

DROP TABLE IF EXISTS features;
CREATE TABLE IF NOT EXISTS features (
    id  integer NOT NULL,
    category    varchar(40),
    value   varchar(40),
    units   varchar(40),
    PRIMARY KEY(id)
);
CREATE INDEX features_idx ON features(id);