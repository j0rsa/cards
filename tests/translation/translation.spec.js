/*
 * Unit tests for translation/index.js
 */

import React from 'react';
import Translate from '../../src/translation';
import { shallow } from 'enzyme';
import ReactAddons from 'react/addons'
const TestUtils = ReactAddons.addons.TestUtils;

/* global describe */
/* global it */
describe('Translation', () => {
	it('renders as a <span>', () => {
		const component = TestUtils.renderIntoDocument(
			<Translate/>
		);
		shallow(component).should.have.tagName('span');
	});

	it('getTranslation', function () {
		const component = TestUtils.renderIntoDocument(
			<Translate language='en' text='english' />
		);
		shallow(component).find('span').should.have.text('English');
	});
});
