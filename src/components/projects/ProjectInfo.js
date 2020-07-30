import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

export const ProjectInfo = () => {
    
    const { activeProject } = useSelector(state => state.projects);
    const { id, area, title, description } = activeProject || {};

    return (
        <div className="row">
            <div className="col">
                <div className="row justify-content-end">
                    <OverlayTrigger
                        placement="left"
                        overlay={ <Tooltip>Editar el proyecto</Tooltip> }
                    >
                        <Link
                            className="btn btn-success"
                            to={`/projects/form/${ id }`}
                        >
                            <i className="fas fa-edit"></i>
                        </Link>
                    </OverlayTrigger>
                </div>
            </div>
            <div className="container-body-modal justify-content-start">
                <div className="child-div mh-65-vh square scrollbar-dusty-grass square thin">
                    <div className="col-12">

                        <div className="row d-inline">
                            <h3>Área designada</h3>
                            <span>{ area }</span>
                        </div>
                        <hr/>
                        <div className="row d-inline">
                            <h3>Nombre del proyecto</h3>
                            <span>{ title }</span>
                        </div>
                        <hr/>
                        <div className="row d-inline">
                            <h3>Descripción</h3>
                            <span>{ description }</span>
                        </div>
                        
                    </div>
                </div>
            </div>
		</div>
    )
}
