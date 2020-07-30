import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Col, Row } from "react-bootstrap";
import { NoProjectFound } from "./NoProjectFound";
import {
	setActiveProject,
	clearActiveProject,
    startAddProject,
    startUpdateProject,
} from "../../actions/projectActions";
import { useForm } from "../../hooks/useForm";

export const ProjectForm = ({ history }) => {

	const dispatch = useDispatch();
    
    const { error, activeProject, loading } = useSelector((state) => state.projects);
	const { title, area, description } = activeProject || {};

	const path = useLocation().pathname.split("/");
    const idProject = path[path.length - 1] !== "form" && path[path.length - 1];

    const initialState = {
        formTitle: '',
        formArea: '',
        formDescription: '',
    };
    
    const [ formValues, handleInputChange, reset ] = useForm( initialState );
	const { formTitle, formArea, formDescription } = formValues;

	useEffect(() => {
		if (idProject && !loading) {
			dispatch( setActiveProject( idProject ) );
		}
	}, [dispatch, idProject, loading]);
	
	useEffect(() => {
		if( !!activeProject ) {
			if( JSON.stringify(formValues) === JSON.stringify(initialState) ) {
				reset({ 
					formTitle: title, 
					formArea: area, 
					formDescription: description 
				});
			}
		}
	}, [activeProject, area, title, description, reset, formValues, initialState]);

    useEffect(() => {
        return () => {
			dispatch( clearActiveProject() );
		};
	}, [dispatch]);

	if (error) {
		return <NoProjectFound />;
	}
	
	const handleReturn = () => {
		if( history.length <= 2 || !activeProject ) {
			history.push('/');
		} else {
			history.goBack();
		}
	};
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if( !!activeProject ) {
            dispatch( startUpdateProject( formTitle, formArea, formDescription, history ) );
        } else {
            dispatch( startAddProject( formTitle, formArea, formDescription, history ) );
        }
    };

	return (
		<div className="container-fluid pb-3 pt-3 pl-3 pr-3 animate__animated animate__fadeIn animate__faster">
			<div className="row justify-content-end mr-1 mt-2 mb-2">
				<button 
					onClick={ handleReturn }
					className="btn btn-indigo" 
					style={{ zIndex: "999" }}
				>
					<i className="fas fa-arrow-left"></i> Regresar
				</button>
			</div>

			<div className="row blue-grey lighten-5 z-depth-1 m-1">
				<div className="col">
					<div className="row m-3">
						<div className="col-12">
							<Form onSubmit={ handleSubmit }>
								<Row>
									<Col>
										<Form.Label>Nombre del proyecto</Form.Label>
										<Form.Control
											type="text"
                                            placeholder="Ingrese el nombre del proyecto"
                                            name='formTitle'
                                            value={ formTitle }
                                            onChange={ handleInputChange }
                                            autoComplete='off'
										/>
										<Form.Text className="text-muted">
											<em>
												Recomendamos utilizar un nombre corto y fácil de
												recordar
											</em>
										</Form.Text>
									</Col>
									<Col>
										<Form.Label>Área designada para el proyecto</Form.Label>
										<Form.Control
											type="text"
                                            placeholder="Ingrese el área del proyecto"
                                            name='formArea'
                                            value={ formArea }
                                            onChange={ handleInputChange }
                                            autoComplete='off'
										/>
									</Col>
								</Row>

								<Form.Group controlId="formBasicPassword" className="mt-1">
									<Form.Label>Descripción del proyecto</Form.Label>
									<Form.Control
										as="textarea"
										rows="4"
										placeholder="El proyecto consiste en..."
										name="formDescription"
										value={ formDescription }
										onChange={ handleInputChange }
										className="no-resizable square scrollbar-dusty-grass square thin"
									/>
								</Form.Group>

                                <Button 
                                    variant={ !!activeProject ? 'outline-success' : 'outline-primary' } 
                                    type="submit"
                                    block={ true }
                                >
									{
                                        ( !!activeProject )
                                            ? 'Actualizar'
                                            : 'Agregar'
                                    }
								</Button>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
