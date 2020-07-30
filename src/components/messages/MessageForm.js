import React from 'react';
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { startAddMessage } from "../../actions/activityActions";
import { useForm } from "../../hooks/useForm";

export const MessageForm = () => {
    const dispatch = useDispatch();
    
    const [formValues, handleInputChange] = useForm({
        textMessage: 'Un comentario cualquiera'
    });

    const { textMessage } = formValues;

    const handleAddNoteSubmit = (e) => {
        e.preventDefault();

        dispatch( startAddMessage( textMessage ) );
    }

	return (
		<Form onSubmit={ handleAddNoteSubmit }>
            <Form.Group>
                <Form.Control 
                    as="textarea"
                    rows="3" 
                    placeholder="Ingrese su comentario" 
                    name='textMessage'
                    value={ textMessage }
                    onChange={ handleInputChange }
                    className="no-resizable square scrollbar-dusty-grass square thin"
                />
            </Form.Group>
            <Button 
                variant="outline-primary" 
                type="submit"
                block={ true }
            >
                Agregar
			</Button>
		</Form>
	);
}
