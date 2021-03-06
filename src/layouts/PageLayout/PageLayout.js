import React from 'react';
import PropTypes from 'prop-types';
import './PageLayout.scss';

export const PageLayout = ({ children }) => (
	<div className='container text-center'>
		<h3>Translation page</h3>
		<div className='page-layout__viewport'>
			{children}
		</div>
	</div>
);
PageLayout.propTypes = {
	children: PropTypes.node,
};

export default PageLayout;
