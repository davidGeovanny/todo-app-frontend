import Swal from "sweetalert2";
import { types } from "../types/types";
import { fetchWithToken } from "../helpers/fetch";

export const startProjectLoad = () => {
    return async( dispatch ) => {
        try {
            Swal.fire({
                title: 'Cargando proyectos',
                text: 'Por favor espere...',
                allowOutsideClick: false,
                onBeforeOpen: () => {
                    Swal.showLoading();
                },
            });

            const resp = await fetchWithToken('projects');
            const body = await resp.json();

            if( !body.ok ) {
                return Swal.fire({
                    title: 'Error',
                    text: body.msg || 'Ha ocurrido un error inesperado',
                    icon: 'error',
                });
            }
            
            Swal.close();
            dispatch( projectLoaded( body.projects ) );
        } catch (error) {
            console.log(error);
        }
    };
};

const projectLoaded = ( projects ) => {
    return {
        type: types.projectLoadedProjects,
        payload: {
            projects,
        }
    }
};

export const setActiveProject = ( idProject ) => {
    return {
        type: types.projectSetActiveProject,
        payload: {
            id: idProject
        }
    };
};

export const setShowFinishedProjects = () => {
    return {
        type: types.projectShowFinishedProjects,
    };
};

export const setConditionShowProjects = ( index ) => {
    return {
        type: types.projectConditionShowProjects,
        payload: {
            index
        }
    };
};

export const clearActiveProject = () => {
    return {
        type: types.projectClearActiveProject,
    };
};

export const startAddProject = ( title, area, description, history ) => {
    return async ( dispatch ) => {        
        try {
            Swal.fire({
                title: 'Agregando proyecto',
                text: 'Por favor espere...',
                allowOutsideClick: false,
                onBeforeOpen: () => {
                    Swal.showLoading();
                },
            });

            const projectObject = { title, area, description };

            const resp = await fetchWithToken('projects', projectObject, 'POST');
            const body = await resp.json();

            if( !body.ok ) {
                return Swal.fire({
                    title: 'Error',
                    text: body.msg || 'Ha ocurrido un error inesperado',
                    icon: 'error',
                });
            }

            Swal.close();
            dispatch( addedProject( body.project ) );
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    };
};

const addedProject = ( project ) => {
    return {
        type: types.projectAddedProject,
        payload: {
            project
        }
    }
};

export const startUpdateProject = ( title, area, description, history ) => {
    return async ( dispatch, getState ) => {        
        try {

            const activeProject = getState().projects.activeProject;

            Swal.fire({
                title: 'Agregando proyecto',
                text: 'Por favor espere...',
                allowOutsideClick: false,
                onBeforeOpen: () => {
                    Swal.showLoading();
                },
            });

            const projectObject = { title, area, description };

            const resp = await fetchWithToken(`projects/${ activeProject.id }`, projectObject, 'PUT');
            const body = await resp.json();

            if( !body.ok ) {
                return Swal.fire({
                    title: 'Error',
                    text: body.msg || 'Ha ocurrido un error inesperado',
                    icon: 'error',
                });
            }

            Swal.close();
            dispatch( updatedProject( body.project ) );
            history.push(`/projects/${ activeProject.id }/activities`);
        } catch (error) {
            console.log(error);
        }
    };
};

const updatedProject = ( project ) => {
    return {
        type: types.projectUpdatedProject,
        payload: {
            project
        }
    }
};

export const doneProject = ( id, done ) => {
    return {
        type: types.projectDoneProject,
        payload: {
            id,
            done
        }
    }
};