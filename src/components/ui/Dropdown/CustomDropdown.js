import React from "react";
import PropTypes from 'prop-types';
import { Dropdown } from "react-bootstrap";
import { DropdownItems } from "./DropdownItems";

export const CustomDropdown = ( {
    variant,
    textLabel = 'Seleccione una opción',
    items,
    onSelect,
    textBeforeDropdown = '',
} ) => {
    let dropdownVariant;

    switch ( variant ) {
        case 'primary':
            dropdownVariant = 'primary';
            break;
        case 'success':
            dropdownVariant = 'success';
            break;
        case 'warning':
            dropdownVariant = 'warning';
            break;
        case 'danger':
            dropdownVariant = 'danger';
            break;
        case 'info':
            dropdownVariant = 'info';
            break;
        case 'secondary':
            dropdownVariant = 'secondary';
            break;
        case 'dark':
            dropdownVariant = 'dark';
            break;
        default:
            dropdownVariant = 'primary';
            break;
    }

	return (
		<Dropdown onSelect={ onSelect } style={{zIndex: '999'}}>
            {
                ( !!textBeforeDropdown ) &&
                    <span className="text-black-50">
                        <em>{ textBeforeDropdown }</em> |{" "}
                    </span>
            }
            
			<Dropdown.Toggle variant={ dropdownVariant }>
				{ textLabel }
			</Dropdown.Toggle>

            <DropdownItems
                items={ items }
                variant={ dropdownVariant }
            />
		</Dropdown>
	);
};

CustomDropdown.propTypes = {
    items: PropTypes.array.isRequired,
    variant: PropTypes.string,
    textLabel: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    textBeforeDropdown: PropTypes.string,
}