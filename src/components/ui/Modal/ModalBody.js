import React from "react";
import { Modal } from "react-bootstrap";

export const ModalBody = ({ aditionalClass = '', children }) => {
	return (
		<Modal.Body className={ aditionalClass }>
            { children }
		</Modal.Body>
	);
};

