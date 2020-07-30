import { types } from "../types/types";
import { findElementById } from "../helpers/filter";

const initialState = {
    projects: [],
    activeProject: null,
    conditionShowProjects: 0,
    showFinishedProjects: false,
    loading: true,
    error: false,
};

export const projectReducer = ( state = initialState, action ) => {
    let tempProject;
    switch ( action.type ) {
        case types.projectShowFinishedProjects:
            return {
                ...state,
                showFinishedProjects: !state.showFinishedProjects,
            };

        case types.projectConditionShowProjects:
            return {
                ...state,
                conditionShowProjects: action.payload.index,
            };

        case types.projectLoadedProjects:
            return {
                ...state,
                projects: action.payload.projects,
                loading: false,
            };

        case types.projectSetActiveProject:
            tempProject = findElementById( state.projects, action.payload.id );
            
            return {
                ...state,
                activeProject: tempProject,
                error: ( tempProject ) ? false : true,
            };

        case types.projectAddedProject:
            return {
                ...state,
                projects: [...state.projects, action.payload.project],
                activeProject: null,
                error: null,
            };

        case types.projectUpdatedProject:
            return {
                ...state,
                projects: state.projects.map( 
                    project => project.id.toString() === state.activeProject.id.toString()
                        ? action.payload.project
                        : project
                ),
                activeProject: null,
                error: null,
            };
        
        case types.projectDoneProject:
            return {
                ...state,
                projects: state.projects.map( 
                    project => project.id.toString() === action.payload.id.toString()
                        ? {...project, done: action.payload.done}
                        : project
                ),
            };

        case types.projectClearActiveProject:
            return {
                ...state,
                activeProject: null,
                error: false,
            };
    
        default:
            return state;
    }
}