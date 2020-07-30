import Swal from "sweetalert2";
import { types } from "../types/types";

import { setActiveProject, doneProject } from "./projectActions";
import { hideSideModal, hideConfirmModal, hideModal } from "./uiActions";
import { fetchWithToken } from "../helpers/fetch";

export const startLoadActivities = ( idProject ) => {
    return async ( dispatch, getState ) => {
        /** set active project */
        dispatch( setActiveProject( idProject ) );
        const activeProject = getState().projects.activeProject;

        try {
            if( !activeProject ) {
                dispatch( loadingFinish() );
                return Swal.fire({
                    title: 'Error',
                    text: 'No se ha encontrado el proyecto especificado',
                    icon: 'error',
                });
            }
            
            Swal.fire({
                title: 'Cargando actividades',
                text: 'Por favor espere...',
                allowOutsideClick: false,
                onBeforeOpen: () => {
                    Swal.showLoading();
                },
            });

            const resp = await fetchWithToken(`activities/${ idProject }`);
            const body = await resp.json();

            if( !body.ok ) {
                dispatch( loadedActitivities( [] ) );
                return Swal.fire({
                    title: 'Error',
                    text: body.msg || 'Ha ocurrido un error inesperado',
                    icon: 'error',
                });
            }
            
            Swal.close();
            dispatch( loadedActitivities( body.activities ) );
        } catch (error) {
            console.log(error);
        }
    };
};

const loadedActitivities = ( activities ) => {
    return {
        type: types.activityLoadedActivities,
        payload: {
            activities,
        },
    };
};

const loadingFinish = () => {
    return {
        type: types.activityLoadingFinish,
    };
};

export const setActiveActivity = ( idActivity ) => {
    return {
        type: types.activitySetActiveActivity,
        payload: {
            id: idActivity
        }
    };
};

export const startAddNote = ( textNote ) => {
    return async ( dispatch, getState ) => {        
        try {

            const { id } = getState().activities.activeActivity;

            Swal.fire({
                title: 'Agregando nota',
                text: 'Por favor espere...',
                allowOutsideClick: false,
                onBeforeOpen: () => {
                    Swal.showLoading();
                },
            });

            const noteObject = { text: textNote, activity: id };

            const resp = await fetchWithToken('notes', noteObject, 'POST');
            const body = await resp.json();

            if( !body.ok ) {
                const { errors } = body;
                let msg = '';
                for (const key in errors) {
                    if (errors.hasOwnProperty(key)) {
                        const error = errors[key];
                        msg += `<li>${ error.msg }</li>`;
                    }
                }

                return Swal.fire({
                    title: 'Error',
                    html: `<ul>${ msg }</ul>`,
                    icon: 'error',
                });
            }

            Swal.close();
            dispatch( hideSideModal() );
            dispatch( addedNote( body.note ) );
        } catch (error) {
            console.log(error);
        }
    };
};

const addedNote = ( note ) => {
    return {
        type: types.activityAddedNote,
        payload: {
            note
        }
    }
};

export const startCheckNote = ( id, done ) => {
    return async ( dispatch, getState ) => {        
        try {

            const { activeActivity } = getState().activities;
            const { activeProject } = getState().projects;

            Swal.fire({
                title: 'Actualizando nota',
                text: 'Por favor espere...',
                allowOutsideClick: false,
                onBeforeOpen: () => {
                    Swal.showLoading();
                },
            });

            const noteObject = { done };

            const resp = await fetchWithToken(`notes/${ id }`, noteObject, 'PUT');
            const body = await resp.json();

            if( !body.ok ) {
                const { errors } = body;
                let msg = '';
                for (const key in errors) {
                    if (errors.hasOwnProperty(key)) {
                        const error = errors[key];
                        msg += `<li>${ error.msg }</li>`;
                    }
                }

                return Swal.fire({
                    title: 'Error',
                    html: `<ul>${ msg }</ul>`,
                    icon: 'error',
                });
            }

            Swal.close();

            dispatch( checkedNote( body.note.id, body.note.done ) );
            dispatch( doneActivity( activeActivity.id, body.activityDone ) );
            dispatch( doneProject( activeProject.id, body.projectDone ) );

        } catch (error) {
            console.log(error);
        }
    };
}

const checkedNote = ( id, done ) => {
    return {
        type: types.activityCheckedNote,
        payload: {
            id,
            done
        }
    }
};

const doneActivity = ( id, done ) => {
    console.log(done);
    return {
        type: types.activityDoneActivity,
        payload: {
            id,
            done
        }
    }
};

export const startAddMessage = ( textMessage ) => {
    return async ( dispatch, getState ) => {        
        try {

            const { name } = getState().auth;
            const { id } = getState().activities.activeActivity;

            Swal.fire({
                title: 'Agregando comentario',
                text: 'Por favor espere...',
                allowOutsideClick: false,
                onBeforeOpen: () => {
                    Swal.showLoading();
                },
            });

            const messageObject = { text: textMessage, activity: id };

            const resp = await fetchWithToken('messages', messageObject, 'POST');
            const body = await resp.json();

            if( !body.ok ) {
                const { errors } = body;
                let msg = '';
                for (const key in errors) {
                    if (errors.hasOwnProperty(key)) {
                        const error = errors[key];
                        msg += `<li>${ error.msg }</li>`;
                    }
                }

                return Swal.fire({
                    title: 'Error',
                    html: `<ul>${ msg }</ul>`,
                    icon: 'error',
                });
            }

            body.message.user = {
                ...body.message.user,
                name
            }

            Swal.close();
            dispatch( hideSideModal() );
            dispatch( addedMessage( body.message ) );
        } catch (error) {
            console.log(error);
        }
    };
};

const addedMessage = ( message ) => {
    return {
        type: types.activityAddedMessage,
        payload: {
            message
        }
    }
};

export const startAddActivity = ( title, description ) => {
    return async ( dispatch, getState ) => {        
        try {

            const { id } = getState().projects.activeProject;

            Swal.fire({
                title: 'Agregando actividad',
                text: 'Por favor espere...',
                allowOutsideClick: false,
                onBeforeOpen: () => {
                    Swal.showLoading();
                },
            });

            const activityObject = { title, description, project: id };

            const resp = await fetchWithToken('activities', activityObject, 'POST');
            const body = await resp.json();

            if( !body.ok ) {
                const { errors } = body;
                let msg = '';
                for (const key in errors) {
                    if (errors.hasOwnProperty(key)) {
                        const error = errors[key];
                        msg += `<li>${ error.msg }</li>`;
                    }
                }

                return Swal.fire({
                    title: 'Error',
                    html: `<ul>${ msg }</ul>`,
                    icon: 'error',
                });
            }

            Swal.close();
            dispatch( hideModal() );
            dispatch( addedActivity( body.activity ) );
        } catch (error) {
            console.log(error);
        }
    };
};

const addedActivity = ( activity ) => {
    return {
        type: types.activityAddedActivity,
        payload: {
            activity
        }
    }
};

export const startUpdateActivity = ( title, description ) => {
    return async ( dispatch, getState ) => {        
        try {

            const { id } = getState().activities.activeActivity;

            Swal.fire({
                title: 'Actualizando actividad',
                text: 'Por favor espere...',
                allowOutsideClick: false,
                onBeforeOpen: () => {
                    Swal.showLoading();
                },
            });

            const activityObject = { title, description };

            const resp = await fetchWithToken(`activities/${ id }`, activityObject, 'PUT');
            const body = await resp.json();

            if( !body.ok ) {
                const { errors } = body;
                let msg = '';
                for (const key in errors) {
                    if (errors.hasOwnProperty(key)) {
                        const error = errors[key];
                        msg += `<li>${ error.msg }</li>`;
                    }
                }

                return Swal.fire({
                    title: 'Error',
                    html: `<ul>${ msg }</ul>`,
                    icon: 'error',
                });
            }

            Swal.close();
            dispatch( hideModal() );
            dispatch( updatedActivity( body.activity ) );
        } catch (error) {
            console.log(error);
        }
    };
};

const updatedActivity = ( activity ) => {
    return {
        type: types.activityUpdatedActivity,
        payload: {
            activity
        }
    }
};

export const startDeleteActivity = () => {
    return async ( dispatch, getState ) => {        
        try {

            const { id } = getState().activities.activeActivity;

            Swal.fire({
                title: 'Eliminando actividad',
                text: 'Por favor espere...',
                allowOutsideClick: false,
                onBeforeOpen: () => {
                    Swal.showLoading();
                },
            });

            const resp = await fetchWithToken(`activities/${ id }`, {}, 'DELETE');
            const body = await resp.json();

            if( !body.ok ) {
                const { errors } = body;
                let msg = '';
                for (const key in errors) {
                    if (errors.hasOwnProperty(key)) {
                        const error = errors[key];
                        msg += `<li>${ error.msg }</li>`;
                    }
                }

                return Swal.fire({
                    title: 'Error',
                    html: `<ul>${ msg }</ul>`,
                    icon: 'error',
                });
            }

            Swal.close();
            dispatch( hideConfirmModal() );
            dispatch( hideModal() );
            dispatch( deletedActivity( body.activity ) );
        } catch (error) {
            console.log(error);
        }
    };
};

const deletedActivity = ( ) => {
    return {
        type: types.activityDeletedActivity,
    }
};

export const clearActiveActivity = () => {
    return {
        type: types.activityClearActiveActivity,
    }
};