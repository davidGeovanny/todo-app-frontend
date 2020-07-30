import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ActivityCard } from './ActivityCard';
import { filterActivities } from '../../helpers/filter';

export const Activities = () => {

    const { activities } = useSelector(state => state.activities);
    
    const initState = {
        activitiesCompleted: [],
        activitiesNotCompleted: [],
    };
    
    const [projectActivities, setProjectActivities] = useState( initState );

    useEffect(() => {
        setProjectActivities(
            filterActivities( activities )
        );
    }, [ activities ]);

    return (
        <div className="row justify-content-around blue-grey lighten-5 z-depth-1 m-1">
            <div className="col-12 mt-3">
                <h3 className="text-center">Actividades</h3>
            </div>

            <div className="col-lg-6 col-md-6 col-12 border-right">
                <h4 className="text-center mt-3">Pendiente</h4>
                {
                    projectActivities.activitiesNotCompleted.map( ( activity, index ) => (
                        <div className="container-fluid" key={ index }>
                            <ActivityCard
                                id={ activity.id }
                                title={ activity.title }
                                description={ activity.description }
                                notes={ activity.notes }
                                done={ activity.done }
                                date={ activity.created_at }
                            />
                        </div>
                    ))
                }
            </div>

            <div className="col-lg-6 col-md-6 col-12 border-left">
                <h4 className="text-center mt-3">Terminado</h4>
                {
                    projectActivities.activitiesCompleted.map( ( activity, index ) => (
                        <div className="container-fluid" key={ index }>
                            <ActivityCard
                                id={ activity.id }
                                title={ activity.title }
                                description={ activity.description }
                                notes={ activity.notes }
                                done={ activity.done }
                                date={ activity.created_at }
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
