import React from 'react';
import { Modal } from 'react-bootstrap';
// import { ModalHeader } from './ModalHeader';
// import { ModalBody } from './ModalBody';

export const CustomModal = ( { 
    variant,
    styleModal,
    position,
    header,
    children,


    openModal, 
    onHide 
} ) => {

    let modalVariant;
    let modalStyle = '';
    let modalPosition = '';
    let fadePosition;

    switch ( variant ) {
        case 'primary':
            modalVariant = 'modal-primary';
            break;
            
        case 'success':
            modalVariant = 'modal-success';
            break;
            
        case 'info':
            modalVariant = 'modal-info';
            break;
            
        case 'warning':
            modalVariant = 'modal-warning';
            break;
            
        case 'danger':
            modalVariant = 'modal-danger';
            break;
    
        default:
            modalVariant = 'modal-primary';
            break;
    }

    switch ( styleModal ) {
        case 'side':
            modalStyle = 'modal-side';
            switch ( position ) {
                case 'top-right':
                    modalPosition = 'modal-top-right';
                    fadePosition = 'right';
                    break;
                case 'top-left':
                    modalPosition = 'modal-top-left';
                    fadePosition = 'left';
                    break;
                case 'bottom-right':
                    modalPosition = 'modal-bottom-right';
                    fadePosition = 'right';
                    break;
                case 'bottom-left':
                    modalPosition = 'modal-bottom-left';
                    fadePosition = 'left';
                    break;
                default:
                    modalPosition = 'modal-bottom-right';
                    fadePosition = 'right';
                    break;
            }
            break;
        
        case 'fluid':
            modalStyle = 'modal-full-height modal-top modal-almost-full-screen';
            fadePosition = 'top';
            break;
    
        default:
            fadePosition = 'top';
            break;
    }

    return (


        <>
            <Modal
                // size="xl"
                show={ openModal }
                onHide={ onHide }
                aria-labelledby="example-modal-sizes-title-lg"
                className={`fade ${ fadePosition }`}
                dialogClassName={`${ modalStyle } ${ modalPosition } modal-notify ${ modalVariant }`}
            >
                { header }
                { children }
            </Modal>

            {/* <Modal
                // size="xl"
                show={ prueba }
                onHide={ () => {setPrueba(false)} }
                aria-labelledby="example-modal-sizes-title-lg"
                className="fade right"
                dialogClassName="modal-side modal-bottom-left modal-notify modal-primary"
                >
                <Modal.Header closeButton>
                    <Modal.Title 
                        id="example-modal-sizes-title-lg"
                        className="white-text"
                    >
                        Actividad: <em>Name activity</em>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Contenido
                    <button
                        className="btn btn-success"
                    >
                        Guardar
                    </button>
                </Modal.Body>
            </Modal> */}
        </>
    )
}
