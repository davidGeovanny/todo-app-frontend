import React from "react";
import { Modal } from "react-bootstrap";
import PropTypes from 'prop-types';

export const ModalHeader = ( { 
    title,
    textColor,
} ) => {
    let classColor;

    switch ( textColor ) {
        case 'black':
            classColor = 'text-black';
            break;
        case 'white':
            classColor = 'text-white';
            break;
    
        default:
            classColor = 'text-white';
            break;
    }

	return (
		<Modal.Header closeButton>
			<Modal.Title
				className={ classColor }
			>
				{ title }
			</Modal.Title>
		</Modal.Header>
	);
};

ModalHeader.propTypes = {
    title: PropTypes.string.isRequired,
    textColor: PropTypes.string,
}