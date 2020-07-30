import React from 'react';
import { Dropdown } from "react-bootstrap";
import PropTypes from 'prop-types';
import { DropdownItem } from './DropdownItem';

export const DropdownItems = ( {
    variant,
    items,
} ) => {
    let dropdownVariant;

    switch ( variant ) {
        case 'primary':
            dropdownVariant = 'dropdown-primary';
            break;
        case 'success':
            dropdownVariant = 'dropdown-success';
            break;
        case 'warning':
            dropdownVariant = 'dropdown-warning';
            break;
        case 'danger':
            dropdownVariant = 'dropdown-danger';
            break;
        case 'info':
            dropdownVariant = 'dropdown-info';
            break;
        case 'secondary':
            dropdownVariant = 'dropdown-secondary';
            break;
        case 'dark':
            dropdownVariant = 'dropdown-dark';
            break;
        default:
            dropdownVariant = 'dropdown-primary';
            break;
    }

    return (
        <Dropdown.Menu className={ `${ dropdownVariant }` }>
            {
                items.map( ( item, index ) => (
                    <DropdownItem
                        key={ index }
                        index={ index }
                        text={ item }
                    />
                ))
            }
        </Dropdown.Menu>
    )
}

DropdownItems.propTypes = {
    items: PropTypes.array.isRequired,
}