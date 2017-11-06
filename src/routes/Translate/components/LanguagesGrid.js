import React from 'react';
import config from '../../../../project.config';
import { Button } from 'react-bootstrap';
import * as localisation from '../../../translation';
import '../styles/LanguageGrid.scss';

export const LanguagesGrid = ({recent}) => {
	let languages = config.globals.translateLanguages;
	let languageKeyComponent = [];
		Object.keys(languages)
		.map((key) => languages[key])
		.forEach((language, index) => {
			let key = localisation.translate(language);
			if (recent.indexOf(language) !== -1) {
				languageKeyComponent[key] =
					<Button bsSize='xsmall' className='recent' key={language}>
							{localisation.translate(language)}
						</Button>;
			} else {
				languageKeyComponent[key] =
					<Button bsSize='xsmall' key={language}>
						{localisation.translate(language)}
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
