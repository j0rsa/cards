import React from 'react';
import conf from '../../project.config';

export const Translate = ({language, text}) => (
	<span>
		{getTranslation(language, text)}
	</span>
);

function getTranslation (language, text) {
	if (language === 'undefined') {
		return getDefaultTranslation(text);
	}
	let supportedLanguages = conf.globals.localisation.supportedLanguages;
	if (supportedLanguages.indexOf(language) !== -1) {
		//there is translation
		let strings = require('./' + language + '/strings.json');
		let translatedValue = strings[text];
		if (!translatedValue) {
			return getDefaultTranslation(text);
		}
		return translatedValue;
	} else {
		//there is no translations
		return getDefaultTranslation(text);
	}
}

function getDefaultTranslation (text) {
	const defaultLanguage = conf.globals.localisation.defaultLanguage;
	let defaultStrings = require('./' + defaultLanguage + '/strings.json');
	return defaultStrings[text];
}

export default Translate;
