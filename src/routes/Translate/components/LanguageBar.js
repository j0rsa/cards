import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Translate from '../../../translation';

export const LanguageBar = ({ firstLanguage, secondLanguage, thirdLanguage }) => (
	<div>
		<Button>{firstLanguage || <Translate text='english' />}</Button>
		<Button>{secondLanguage || <Translate text='french' />}</Button>
		<Button>{thirdLanguage || <Translate text='german' />}</Button>
	</div>
);

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({});

function mapStateToProps (state, ownProps) {
	return (Object.assign({}, ...state, ...ownProps));
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageBar);
