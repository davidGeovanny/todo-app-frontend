import React from "react";

export const Loading = ( {
	variant,
	type,
	size 
} ) => {

	let spinnerVariant;
	let spinnerType;

	switch ( variant ) {
		case 'primary':
			spinnerVariant = 'text-primary';
			break;
		case 'success':
			spinnerVariant = 'text-success';
			break;
		case 'warning':
			spinnerVariant = 'text-warning';
			break;
		case 'info':
			spinnerVariant = 'text-info';
			break;
		case 'danger':
			spinnerVariant = 'text-danger';
			break;

		default:
			spinnerVariant = 'text-primary';
			break;
	}

	switch ( type ) {
		case 'border':
			spinnerType = 'spinner-border';
			break;
		case 'grow':
			spinnerType = 'spinner-grow';
			break;
	
		default:
			spinnerType = 'spinner-border';
			break;
	}

	return (
		<div className={`${ spinnerType } ${ spinnerVariant } big`} role="status">
			<span className="sr-only">Loading...</span>
		</div>
	);
};
