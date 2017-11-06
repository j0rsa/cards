import React from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup, ButtonToolbar, DropdownButton } from 'react-bootstrap';
import * as localisation from '../../../translation';
import { LanguagesGrid } from './LanguagesGrid';

export const LanguageBar = ({ firstLanguage, secondLanguage, thirdLanguage }) => (
	<div>
		<ButtonToolbar>
			<ButtonGroup bsSize='small'>
				<Button>{firstLanguage || localisation.translate('english')}</Button>
				<Button>{secondLanguage || localisation.translate('french')}</Button>
				<Button>{thirdLanguage || localisation.translate('german')}</Button>
				<DropdownButton id={localisation.translate('other_language')} bsSize='small'
								title={localisation.translate('other_language')}>
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
