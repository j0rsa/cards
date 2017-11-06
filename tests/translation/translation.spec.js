/*
 * Unit tests for translation/index.js
 */

import * as localisation from '../../src/translation';

/* global describe */
/* global it */
/* global expect */
describe('localisation', () => {
	it('getEnTranslation', function () {
		expect(localisation.translate('english', 'en')).to.equal('English');
	});

	it('getDefaultTranslation', function () {
		expect(localisation.translate('english')).to.equal('English');
	});

	it('getDefaultTranslationIfWrongProvided', function () {
		expect(localisation.translate('english','123')).to.equal('English');
	});
});
