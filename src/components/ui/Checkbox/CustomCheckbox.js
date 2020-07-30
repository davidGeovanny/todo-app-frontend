import React from "react";
import PropTypes from 'prop-types';

export const CustomCheckbox = ( {
    id,
    text,
    checked = false,
    onChange,
} ) => {
	return (
		<div className="form-check">
			<input
				type="checkbox"
				className="form-check-input"
                id={`customCheck-${ id }`}
                checked={ checked }
                onChange={ onChange }
			/>
			<label className="form-check-label" htmlFor={`customCheck-${ id }`}>
				{ text }
			</label>
		</div>
	);
};

CustomCheckbox.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};