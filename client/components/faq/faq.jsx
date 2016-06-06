/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import i18n from 'lib/mixins/i18n';

export default ( { heading = i18n.translate( 'Frequently Asked Questions' ), children } ) => {
	return (
		<div className="faq">
			<h1 className="faq__heading">{ heading }</h1>
			<ul className="faq__list">
				{ children }
			</ul>
		</div>
	);
};
