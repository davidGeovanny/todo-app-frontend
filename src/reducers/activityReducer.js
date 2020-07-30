import { types } from "../types/types";
import { findElementById } from "../helpers/filter";

const initialState = {
    activities: [],
    activeActivity: null,
    activeNote: null,
    activeMessage: null,
    loading: true,
};

export const activityReducer = ( state = initialState, action ) => {
    let tempActivity;

    switch ( action.type ) {
        case types.activityLoadingFinish:
            return {
                ...state,
                loading: false,
            };

        case types.activityLoadedActivities:
            return {
                ...state,
                loading: false,
                activities: action.payload.activities
            };

        case types.activitySetActiveActivity:
            return {
                ...state,
                activeActivity: findElementById( state.activities, action.payload.id ),
            };

        case types.activityClearActiveActivity:
            return {
                ...state,
                activeActivity: null,
            };

        case types.activityAddedNote:
            tempActivity = {
                ...state.activeActivity,
                notes: [
                    ...state.activeActivity.notes,
                    action.payload.note
                ]
            };

            return {
                ...state,
                activeActivity: tempActivity,
                activities: state.activities.map(
                    activity => activity.id.toString() === state.activeActivity.id.toString()
                        ? tempActivity
                        : activity
                )
            };

        case types.activityCheckedNote:
            tempActivity = {
                ...state.activeActivity,
                notes: state.activeActivity.notes.map(
                    note => note.id.toString() === action.payload.id.toString()
                        ? { ...note, done: action.payload.done }
                        : note
                )
            };

            return {
                ...state,
                activeActivity: tempActivity,
                activities: state.activities.map(
                    activity => activity.id.toString() === state.activeActivity.id.toString()
                        ? tempActivity
                        : activity
                )
            };

        case types.activityAddedMessage:
            tempActivity = {
                ...state.activeActivity,
                messages: [
                    ...state.activeActivity.messages,
                    action.payload.message
                ]
            };

            return {
                ...state,
                activeActivity: tempActivity,
                activities: state.activities.map(
                    activity => activity.id.toString() === state.activeActivity.id.toString()
                        ? tempActivity
                        : activity
                )
            };

        case types.activityAddedActivity:
            return {
                ...state,
                activities: [ ...state.activities, action.payload.activity ]
            };

        case types.activityUpdatedActivity:
            return {
                ...state,
                activities: state.activities.map(
                    activity => activity.id.toString() === state.activeActivity.id.toString()
                        ? action.payload.activity
                        : activity
                ),
                activeActivity: null,
            };

        case types.activityDoneActivity:
            return {
                ...state,
                activities: state.activities.map(
                    activity => activity.id.toString() === action.payload.id.toString()
                        ? { ...activity, done: action.payload.done }
                        : activity
                ),
            };

        case types.activityDeletedActivity:
            return {
                ...state,
                activeActivity: null,
                activities: state.activities.filter(
                    activity => activity.id.toString() !== state.activeActivity.id.toString()
                        && activity
                )
            };
    
        default:
            return state;
    }
};