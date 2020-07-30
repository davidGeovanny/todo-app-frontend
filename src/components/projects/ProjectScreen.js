import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { NoProject } from "./NoProject";
import { Projects } from "./Projects";

import { FloatingButton } from "../ui/FloatingButton/FloatingButton";
import { CustomCheckbox } from "../ui/Checkbox/CustomCheckbox";
import { CustomDropdown } from "../ui/Dropdown/CustomDropdown";
// import { CustomModal } from "../ui/Modal/CustomModal";

import { optionProjects } from "../../data/optionProjects";

import { setShowFinishedProjects, setConditionShowProjects } from "../../actions/projectActions";

export const ProjectScreen = ({ history }) => {

    const dispatch = useDispatch();

    const { 
        projects,
        showFinishedProjects,
        conditionShowProjects
    } = useSelector( state => state.projects );

    const handleShowProjects = () => {
        dispatch( setShowFinishedProjects() );
    };

    const handleDropdownProjects = (e) => {
        const optionSelected = parseInt( e.split('-')[1] ) || 0;
        dispatch( setConditionShowProjects( optionSelected ) );
    };

    const onClickAddProject = () => {
        history.push('projects/form');
    };
    
	return (
		<div className="container-fluid pb-3 pt-3 pl-3 pr-3 animate__animated animate__fadeIn animate__faster">
            {
                ( projects.length > 0 ) 
                    ?
                        <Fragment>
                            <div className='d-flex pb-3 justify-content-between'>
                                <CustomCheckbox 
                                    id='ended-projects'
                                    checked={ showFinishedProjects }
                                    text='Mostrar proyectos terminados'
                                    onChange={ handleShowProjects }
                                />

                                <CustomDropdown
                                    textLabel='Mostrar proyectos...'
                                    items={ optionProjects }
                                    onSelect={ handleDropdownProjects }
                                    textBeforeDropdown={ optionProjects[ conditionShowProjects ] }
                                    variant='primary'
                                />
                            </div>

                            <Projects />
                        </Fragment>
                    :
                        <NoProject />
            }

            <FloatingButton
                variant='primary'
                icon='fas fa-plus'
                onClick={ onClickAddProject }
            />
		</div>
	);
};
