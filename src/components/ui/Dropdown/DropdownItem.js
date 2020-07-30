import React from 'react';
import { Dropdown } from "react-bootstrap";

export const DropdownItem = ( {
    text,
    index,
} ) => {
    return (
        <Dropdown.Item href={ `#/action-${ index }` }>{ text }</Dropdown.Item>
    )
}
