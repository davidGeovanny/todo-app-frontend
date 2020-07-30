import { types } from "../types/types";

export const hideModal = () => {
    return {
        type: types.uiHideModal,
    };
};

export const showModal = () => {
    return {
        type: types.uiShowModal,
    };
};

export const hideSideModal = () => {
    return {
        type: types.uiHideSideModal,
    };
};

export const showSideModal = () => {
    return {
        type: types.uiShowSideModal,
    };
};

export const hideConfirmModal = () => {
    return {
        type: types.uiHideConfirmModal,
    };
};

export const showConfirmModal = () => {
    return {
        type: types.uiShowConfirmModal,
    };
};

export const setModalIsForm = () => {
    return {
        type: types.uiIsFormModal,
    };
};

export const setModalIsInfo = () => {
    return {
        type: types.uiIsInfoModal,
    };
};