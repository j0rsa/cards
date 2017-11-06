import React from 'react';
import { connect } from 'react-redux';
import LanguageBar from './LanguageBar';
import TranslateInput from './TranslateInput';
import styled from 'styled-components';

const TranslateBox = ({ id }) => (
	<TranslateBoxContainer>
		<LanguageBar detectLanguage={id === 'source'} />
		<TranslateInput cardShape={id === 'source'} />
	</TranslateBoxContainer>
);

const TranslateBoxContainer = styled.div`
	display: inline-block;
	`;

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({});

function mapStateToProps (state, ownProps) {
	return (Object.assign({}, ...state, ...ownProps));
}

export default connect(mapStateToProps, mapDispatchToProps)(TranslateBox);
