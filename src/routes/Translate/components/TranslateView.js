import React from 'react';
import { connect } from 'react-redux';
import TranslateBox from './TranslateBox';

export const TranslateView = () => (
	<div>
		<TranslateBox id='source' />
		<TranslateBox id='target' />
	</div>
);

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
});

const mapStateToProps = (state) => ({
	...state
});

export default connect(mapStateToProps, mapDispatchToProps)(TranslateView);
