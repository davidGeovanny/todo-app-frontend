import React from 'react';
import PropTypes from 'prop-types';

export const FloatingButton = ( { 
    variant,
    icon,
    onClick,
    aditionalClass = '',
} ) => {

    let btnVariant;

    switch ( variant ) {
        case 'primary':
            btnVariant = 'btn-primary';
            break;
        case 'success':
            btnVariant = 'btn-success';
            break;
        case 'warning':
            btnVariant = 'btn-warning';
            break;
        case 'danger':
            btnVariant = 'btn-danger';
            break;
        case 'info':
            btnVariant = 'btn-info';
            break;
        case 'secondary':
            btnVariant = 'btn-secondary';
            break;
        case 'dark':
            btnVariant = 'btn-dark';
            break;
        default:
            btnVariant = 'btn-primary';
            break;
    }

    return (
        <div className="fixed-action-btn">
            <button 
                className={`btn btn-floating ${ btnVariant } ${ aditionalClass }`}
                onClick={ onClick }
            >
                <i className={ icon }></i>
            </button>
        </div>
    )
}

FloatingButton.propTypes = {
    variant: PropTypes.string,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    aditionalClass: PropTypes.string,
}