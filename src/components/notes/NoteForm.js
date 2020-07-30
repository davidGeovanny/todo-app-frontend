import React from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { startAddNote } from "../../actions/activityActions";
import { useForm } from "../../hooks/useForm";

export const NoteForm = () => {

    const dispatch = useDispatch();
    
    const [formValues, handleInputChange] = useForm({
        textNote: 'Nueva nota'
    });
    const { textNote } = formValues;

    const handleAddNoteSubmit = (e) => {
        e.preventDefault();

        dispatch( startAddNote( textNote ) );
    }

	return (
		<Form onSubmit={ handleAddNoteSubmit }>
			<Form.Group>
                <Form.Control 
                    type="text" 
                    placeholder="Ingrese una nota" 
                    name='textNote'
                    value={ textNote }
                    onChange={ handleInputChange }
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
};
