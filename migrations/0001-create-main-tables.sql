DROP TABLE IF EXISTS families;
CREATE TABLE IF NOT EXISTS families (
    id  integer,
    name    varchar(40),
    title   varchar(40),
    icon    varchar(40),
    titleTariff varchar(40),
    PRIMARY KEY(id)
);
CREATE INDEX families_idx ON families(id);

DROP TABLE IF EXISTS offers;
CREATE TABLE IF NOT EXISTS offers (
    id  integer,
    name    varchar(40),
    title   varchar(40),
    multichoice    boolean,
    PRIMARY KEY(id)
);
CREATE INDEX offers_idx ON offers(id);

DROP TABLE IF EXISTS bundles;
CREATE TABLE IF NOT EXISTS bundles (
    id  integer,
    name    varchar(40),
    price   varchar(40),
    PRIMARY KEY(id)
);
CREATE INDEX bundles_idx ON bundles(id);

DROP TABLE IF EXISTS features;
CREATE TABLE IF NOT EXISTS features (
    id  integer,
    category    varchar(40),
    value   varchar(40),
    units   varchar(40),
    PRIMARY KEY(id)
);
CREATE INDEX features_idx ON features(id);