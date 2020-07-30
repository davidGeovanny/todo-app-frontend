import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ProjectCard } from "./ProjectCard";
import { filterProjects } from "../../helpers/filter";

export const Projects = () => {
    
    const { 
        projects, 
        conditionShowProjects, 
        showFinishedProjects,
    } = useSelector(state => state.projects);

    const [shownProjects, setShownProjects] = useState([]);

    useEffect(() => {
        setShownProjects( 
            filterProjects( projects, showFinishedProjects, conditionShowProjects ) 
        );
    }, [ projects, showFinishedProjects, conditionShowProjects ]);

	return (
		<div className="row justify-content-md-center blue-grey lighten-5 z-depth-1 m-1 animate__animated animate__fadeInUp">
            <div className="col-12">
                <div className="row m-3">
                    {
                        shownProjects.map( ( project, index ) => (
                            <div 
                                className="col-lg-4 col-md-6 col-12 mt-2" 
                                key={ project.id }
                            >
                                <ProjectCard
                                    id={ project.id }
                                    area={ project.area }
                                    title={ project.title }
                                    description={ project.description }
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            
		</div>
	);
};
