import React from 'react';
import { ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Message } from './Message';

export const Messages = () => {

    const { activeActivity } = useSelector(state => state.activities);
    const { messages } = activeActivity;

    return (
        <ListGroup variant="flush" className="list-unstyled">
            {
                messages.map( ( message, index ) => (
                    <Message 
                        key={ index }
                        id={ message.id }
                        text={ message.text }
                        user={ message.user }
                        date={ message.created_at }
                    />
                ))
            }
        </ListGroup>
    )
}
