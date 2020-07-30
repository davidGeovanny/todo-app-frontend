import React from 'react'

export const Navtabs = ( { 
    tabNotesOpen, 
    setTabNotesOpen,
    variant
} ) => {

    let colorNavtab;

    switch ( variant ) {
        case 'primary':
            colorNavtab = 'primary-color';
            break;
        case 'success':
            colorNavtab = 'success-color';
            break;
        case 'warning':
            colorNavtab = 'warning-color';
            break;
        case 'info':
            colorNavtab = 'info-color';
            break;
        case 'danger':
            colorNavtab = 'danger-color';
            break;
    
        default:
            colorNavtab = 'primary-color';
            break;
    }

    return (
        <ul className={`nav nav-tabs md-tabs nav-justified sticky-top ${ colorNavtab }`}>
            <li
                className={`nav-item nav-link cursor-pointer ${ tabNotesOpen && "active" }`}
                onClick={() => setTabNotesOpen( true )}
            >
                <span>
                    <i className=" fas fa-list pr-2"></i>Notas
                </span>
            </li>

            <li
                className={`nav-item nav-link cursor-pointer ${ !tabNotesOpen && "active" }`}
                onClick={() => setTabNotesOpen( false )}
            >
                <span>
                    <i className=" fas fa-comment-alt pr-2"></i>Mensajes
                </span>
            </li>
        </ul>
    )
}
