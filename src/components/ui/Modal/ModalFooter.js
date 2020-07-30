import React from 'react'
import { Modal } from 'react-bootstrap'

export const ModalFooter = ({ aditionalClass = '', children }) => {
    return (
        <Modal.Footer className={ aditionalClass }>
            { children }
		</Modal.Footer>
    )
}
