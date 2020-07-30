import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import { useSelector, useDispatch } from "react-redux";
import { startAddActivity, startUpdateActivity } from "../../actions/activityActions";

export const ActivityForm = () => {

    const dispatch = useDispatch();

    const { activeActivity } = useSelector(state => state.activities)
    const { title = '', description = '' } = activeActivity || {};

    const initialState = {
        formTitle: title,
        formDescription: description,
    };

    const [ formValues, handleInputChange ] = useForm( initialState );

    const { formTitle, formDescription } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        if( !!activeActivity ) {
            dispatch( startUpdateActivity( formTitle, formDescription ) );
        } else {
            dispatch( startAddActivity( formTitle, formDescription ) );
        }
    }

	return (
		<div className="row">
            <div className="container-body-modal justify-content-start">
                <div className="child-div mh-65-vh square scrollbar-dusty-grass square thin">
                    <div className="col-12">
                        <Form>
                            <Form.Group>
                                <Form.Label htmlFor='formTitle'>Título de la actividad</Form.Label>
                                <Form.Control 
                                    id='formTitle'
                                    type="text" 
                                    name='formTitle'
                                    value={ formTitle }
                                    autoComplete='off'
                                    onChange={ handleInputChange }
                                    placeholder="Ingrese el nombre de la actividad"
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor='formDescription'>Descripción de la actividad</Form.Label>
                                <Form.Control 
                                    id='formDescription'
                                    as="textarea"
                                    rows="3" 
                                    name='formDescription'
                                    value={ formDescription }
                                    onChange={ handleInputChange }
                                    placeholder="Ingrese la descripción de la actividad" 
                                    className={
                                        `no-resizable square square thin 
                                        ${ !!activeActivity 
                                            ? 'scrollbar-light-green' 
                                            : 'scrollbar-dusty-grass' 
                                        }
                                    `}
                                />
                            </Form.Group>

                            <Button 
                                variant={ ( !!activeActivity ) ? 'success' : 'primary' } 
                                type="submit"
                                block={ true }
                                onClick={ handleSubmit }
                            >
                                Guardar
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
		</div>
	);
};
