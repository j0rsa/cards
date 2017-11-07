import React from 'react';
import config from '../../../../project.config';
import { Button } from 'react-bootstrap';
import * as localisation from '../../../translation';
import '../styles/LanguageGrid.scss';

export const LanguagesGrid = ({recent}) => {
	let languages = config.globals.translateLanguages;
	let languageKeyComponent = [];
		Object.keys(languages)
		.forEach((key, index) => {
			let language = languages[key];
			let languageLocalized = localisation.translate(language);
			if (recent.indexOf(language) !== -1) {
				languageKeyComponent[languageLocalized] =
					<Button bsSize='xsmall' className='recent' key={key}>
							{languageLocalized}
						</Button>;
			} else {
				languageKeyComponent[languageLocalized] =
					<Button bsSize='xsmall' key={key}>
						{languageLocalized}
					</Button>;
			}
		});
	console.log(Object.keys(languageKeyComponent));
	let gridElements = Object.keys(languageKeyComponent)
		.sort()
		.map((key) => languageKeyComponent[key]);
	return (
		<div>
		{gridElements}
		</div>
	);
};
