import { types } from "../types/types";

const initialState = {
    openModal: false,
    openSideModal: false,
    confirmModal: false,
    isForm: false,
}

export const uiReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.uiShowModal:
            return {
                ...state,
                openModal: true,
            };

        case types.uiHideModal:
            return {
                ...state,
                openModal: false,
            };

        case types.uiShowSideModal:
            return {
                ...state,
                openSideModal: true,
            };

        case types.uiHideSideModal:
            return {
                ...state,
                openSideModal: false,
            };
        
        case types.uiShowConfirmModal:
            return {
                ...state,
                openConfirmModal: true,
            };

        case types.uiHideConfirmModal:
            return {
                ...state,
                openConfirmModal: false,
            };

        case types.uiIsFormModal:
            return {
                ...state,
                isForm: true,
            };

        case types.uiIsInfoModal:
            return {
                ...state,
                isForm: false,
            };

        default:
            return state;
    }
};