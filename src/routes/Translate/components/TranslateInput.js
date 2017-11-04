import React from 'react';
import { connect } from 'react-redux';

export const TranslateInput = ({ cardShape }) => (
	<div>
		<textarea rows={7} cols={40} readOnly={!cardShape} />
	</div>
);

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({});

function mapStateToProps (state, ownProps) {
	return (Object.assign({}, ...state, ...ownProps));
}

export default connect(mapStateToProps, mapDispatchToProps)(TranslateInput);
