import React from 'react';
import config from '../../../../project.config';
import { Button, Col, Row } from 'react-bootstrap';
import Translate from '../../../translation';

export const LanguagesGrid = ({recent}) => {
	let languages = config.globals.translateLanguages;
	let gridElements = [];
	for (let languageKeys of Object.keys(languages)) {
		gridElements.push(<Button bsSize='xsmall' key={languageKeys}><Translate text={languages[languageKeys]}/></Button>);
	}
	return (
		<div>
		{gridElements}
		</div>
	);
};
