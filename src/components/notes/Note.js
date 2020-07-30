import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { startCheckNote } from '../../actions/activityActions';

export const Note = ({ id, text, done }) => {

	const dispatch = useDispatch();

    const handleCheked = () => {
		dispatch( startCheckNote( id, !done ) );
    };

    return (
		<ListGroup.Item>
			<div className="form-check">
				<input
					type="checkbox"
					className="form-check-input"
                    id={`checkboxNote-${ id }`}
                    checked={ done }
                    onChange={ handleCheked }
				/>
				<label className="form-check-label" htmlFor={`checkboxNote-${ id }`}>
					{ text }
				</label>
			</div>
		</ListGroup.Item>
	);
}
