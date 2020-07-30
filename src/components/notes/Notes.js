import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Note } from './Note';

export const Notes = () => {

    const { activeActivity } = useSelector(state => state.activities);
    const { notes } = activeActivity;

    return (
        <ListGroup variant="flush">
            {
                notes.map( ( note, index ) => (
                    <Note 
                        key={ index }
                        id={ note.id }
                        text={ note.text }
                        done={ note.done }
                    />
                ))
            }
        </ListGroup>
    )
}
