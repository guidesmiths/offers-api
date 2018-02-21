/******** TRANSLATING FAMILIES: ********/
INSERT INTO families(id, name, title, icon, titletariff) VALUES(0, 'Mobil', 'Móvil', 'mobile', '¿Inimitable o personaliza?');
INSERT INTO families(id, name, title, icon, titletariff) VALUES(1, 'Fiber', 'Fibra 100Mb', 'fiber', '');
INSERT INTO families(id, name, title, icon, titletariff) VALUES(2, 'movil+fibra', 'Móvil + Fibra', 'fiber', '¿Qué tarifa móvil?');
INSERT INTO families(id, name, title, icon, titletariff) VALUES(3, 'Solo Hablar', 'Solo Hablar', 'mobile', '¿Inimitable o personaliza?');

/******** TRANSLATING OFFERS: ********/
INSERT INTO offers(id, name, title, multichoice) VALUES(0, 'inimitable', 'La Inimitable', false);
INSERT INTO offers(id, name, title, multichoice) VALUES(1, 'Personalizada', 'Personalizada', true);
INSERT INTO offers(id, name, title, multichoice) VALUES(2, 'Fibra en casa', 'Fibra en casa', false);
INSERT INTO offers(id, name, title, multichoice) VALUES(3, 'Fibra + La Inimitable', 'Fibra y La Inimitable', false);
INSERT INTO offers(id, name, title, multichoice) VALUES(4, 'Fibra + Personalizada', 'Fibra y Personalizada', false);
INSERT INTO offers(id, name, title, multichoice) VALUES(5, 'Solo voz', 'Solo voz', false);

/******** TRANSLATING BUNDLES: ********/
INSERT INTO bundles(id, name, price) VALUES(0, 'inimitable', '19,90');
INSERT INTO bundles(id, name, price) VALUES(1, 'twofivegb-oneone', '11,90');
INSERT INTO bundles(id, name, price) VALUES(2, 'fivegb-oneone', '14,90');
INSERT INTO bundles(id, name, price) VALUES(3, 'twofivegb-zero', '6,90');
INSERT INTO bundles(id, name, price) VALUES(4, 'fivegb-zero', '10,90');
INSERT INTO bundles(id, name, price) VALUES(5, 'Fibra en casa', '34,60');
INSERT INTO bundles(id, name, price) VALUES(6, 'Habla 1.001 min', '9,00');
INSERT INTO bundles(id, name, price) VALUES(7, 'Solo voz Sin cuotas', '0,00');
INSERT INTO bundles(id, name, price) VALUES(8, 'Fibra y La Inimitable', '48,90');
INSERT INTO bundles(id, name, price) VALUES(9, 'Fibra y Personalizada', '43,90');
INSERT INTO bundles(id, name, price) VALUES(10, 'Fibra y Personalizada', '39,90');
INSERT INTO bundles(id, name, price) VALUES(11, 'Fibra y Personalizada', '40,90');

/******** TRANSLATING FEATURES: ********/
INSERT INTO features(id, category, value, units) VALUES(0, 'navega', '19', 'GB');
INSERT INTO features(id, category, value, units) VALUES(1, 'navega', '100', 'MB');
INSERT INTO features(id, category, value, units) VALUES(2, 'navega', '5', 'GB');
INSERT INTO features(id, category, value, units) VALUES(3, 'navega', '2,5', 'GB');
INSERT INTO features(id, category, value, units) VALUES(4, 'habla', '101', 'min');
INSERT INTO features(id, category, value, units) VALUES(5, 'habla', '5001', 'min');
INSERT INTO features(id, category, value, units) VALUES(6, 'habla', '0', 'cént/min');
INSERT INTO features(id, category, value, units) VALUES(7, 'habla', '1001', 'min');
INSERT INTO features(id, category, value, units) VALUES(8, 'fibra', '100', 'MB');

/******** TRANSLATING FAMILY TO OFFERS: ********/
INSERT INTO family_to_offer(family_id, offer_id) VALUES(3, 5);

INSERT INTO family_to_offer(family_id, offer_id) VALUES(2, 3);
INSERT INTO family_to_offer(family_id, offer_id) VALUES(2, 4);

INSERT INTO family_to_offer(family_id, offer_id) VALUES(1, 2);

INSERT INTO family_to_offer(family_id, offer_id) VALUES(0, 0);
INSERT INTO family_to_offer(family_id, offer_id) VALUES(0, 1);

/******** TRANSLATING OFFER TO BUNDLES: ********/
INSERT INTO offer_to_bundle(offer_id, bundle_id) VALUES(5, 6);

INSERT INTO offer_to_bundle(offer_id, bundle_id) VALUES(4, 9);

INSERT INTO offer_to_bundle(offer_id, bundle_id) VALUES(3, 8);

INSERT INTO offer_to_bundle(offer_id, bundle_id) VALUES(2, 5);

INSERT INTO offer_to_bundle(offer_id, bundle_id) VALUES(1, 1);
INSERT INTO offer_to_bundle(offer_id, bundle_id) VALUES(1, 2);
INSERT INTO offer_to_bundle(offer_id, bundle_id) VALUES(1, 3);
INSERT INTO offer_to_bundle(offer_id, bundle_id) VALUES(1, 4);

INSERT INTO offer_to_bundle(offer_id, bundle_id) VALUES(0, 0);

/******** TRANSLATING BUNDLE TO FEATURES: ********/
INSERT INTO bundle_to_feature(bundle_id, feature_id) VALUES(11, 3);
INSERT INTO bundle_to_feature(bundle_id, feature_id) VALUES(11, 4);
INSERT INTO bundle_to_feature(bundle_id, feature_id) VALUES(11, 8);

INSERT INTO bundle_to_feature(bundle_id, feature_id) VALUES(10, 2);
INSERT INTO bundle_to_feature(bundle_id, feature_id) VALUES(10, 6);
INSERT INTO bundle_to_feature(bundle_id, feature_id) VALUES(10, 8);

INSERT INTO bundle_to_feature(bundle_id, feature_id) VALUES(9, 2);
INSERT INTO bundle_to_feature(bundle_id, feature_id) VALUES(9, 4);
INSERT INTO bundle_to_feature(bundle_id, feature_id) VALUES(9, 8);

INSERT INTO bundle_to_feature(bundle_id, feature_id) VALUES(8, 0);
INSERT INTO bundle_to_feature(bundle_id, feature_id) VALUES(8, 5);
INSERT INTO bundle_to_feature(bundle_id, feature_id) VALUES(8, 8);

INSERT INTO bundle_to_feature(bundle_id, feature_id) VALUES(6, 7);

INSERT INTO bundle_to_feature(bundle_id, feature_id) VALUES(5, 1);

INSERT INTO bundle_to_feature(bundle_id, feature_id) VALUES(4, 2);
INSERT INTO bundle_to_feature(bundle_id, feature_id) VALUES(4, 6);

INSERT INTO bundle_to_feature(bundle_id, feature_id) VALUES(3, 3);
INSERT INTO bundle_to_feature(bundle_id, feature_id) VALUES(3, 6);

INSERT INTO bundle_to_feature(bundle_id, feature_id) VALUES(2, 4);
INSERT INTO bundle_to_feature(bundle_id, feature_id) VALUES(2, 3);

INSERT INTO bundle_to_feature(bundle_id, feature_id) VALUES(1, 3);
INSERT INTO bundle_to_feature(bundle_id, feature_id) VALUES(1, 4);

INSERT INTO bundle_to_feature(bundle_id, feature_id) VALUES(0, 0);
INSERT INTO bundle_to_feature(bundle_id, feature_id) VALUES(0, 5);
