import React from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup, ButtonToolbar, DropdownButton } from 'react-bootstrap';
import Translate from '../../../translation';
import { LanguagesGrid } from './LanguagesGrid';

export const LanguageBar = ({ firstLanguage, secondLanguage, thirdLanguage }) => (
	<div>
		<ButtonToolbar>
			<ButtonGroup bsSize='small'>
				<Button>{firstLanguage || <Translate text='english'/>}</Button>
				<Button>{secondLanguage || <Translate text='french'/>}</Button>
				<Button>{thirdLanguage || <Translate text='german'/>}</Button>
				<DropdownButton bsSize='small' title={<Translate text='other_language'/>}>
					<LanguagesGrid recent={[firstLanguage, secondLanguage, thirdLanguage]}/>
				</DropdownButton>
			</ButtonGroup>
		</ButtonToolbar>
	</div>
);

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({});

function mapStateToProps (state, ownProps) {
	return (Object.assign({}, ...state, ...ownProps));
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageBar);
