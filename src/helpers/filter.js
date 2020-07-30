import { arrayObjectsSort } from "./sort";

/**
 * Regresa el objeto del arreglo si es encontrado
 * o un null si no lo encuentra
 * @param elements: array
 * @param id: string
 */
export const findElementById = ( elements, id ) => {
    let auxTempElement = elements.find(
        element => element.id === id
    );

    return auxTempElement ? auxTempElement : null;
};

export const filterProjects = ( projects, doneCondition, sortCondition ) => {
    let auxTempProjects = doneCondition 
        ? projects
        : projects.filter( project => project.done === doneCondition );

    auxTempProjects = sortCondition === 0
                ? auxTempProjects.sort( arrayObjectsSort('id') )
                : auxTempProjects.sort( arrayObjectsSort('area') );

    return auxTempProjects;
};

/**
 * 
 * Regresa un objeto con las actividades separadas
 * dependiendo si están terminadas o no
 * @param activities: array
 */
export const filterActivities = ( activities ) => {
    const activitiesCompleted = activities.filter( activity => activity.done === true );
    const activitiesNotCompleted = activities.filter( activity => activity.done === false );

    return { activitiesCompleted, activitiesNotCompleted };
};