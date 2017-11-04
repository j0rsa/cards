import config from '../../project.config';
import * as React from 'react';

export const Translate = () => (
	<span>
		{getTranslation(null, this.props.text)}
	</span>
);

function getTranslation (language, text) {
	if (language === 'undefined') {
		return getDefaultTranslation(text);
	}
	let supportedLanguages = config.globals.supportedLanguages;
	if (supportedLanguages.indexOf(language) !== -1) {
		//there is translation
		let strings = require('./' + language + '/strings.json');
		let translatedValue = strings[text];
		if (!translatedValue) {
			return getDefaultTranslation(text);
		}
	} else {
		//there is no translations
		return getDefaultTranslation(text);
	}
}

function getDefaultTranslation (text) {
	let defaultStrings = require('./' + config.globals.defaultLanguage + '/strings.json');
	return defaultStrings[text];
}

export default Translate;
