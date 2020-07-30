import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { NavBar } from "../components/ui/Navbar/NavBar";
import { ProjectScreen } from '../components/projects/ProjectScreen';
import { ProjectForm } from '../components/projects/ProjectForm';
import { ActivityScreen } from '../components/activities/ActivityScreen';

import '../assets/css/bootstrap.min.css';
import '../assets/css/custom-styles.css';

export const DashboardRoutes = () => {
    return (
        <Fragment>
            <NavBar />
                <Switch>
                    <Route 
                        exact
                        path="/projects"
                        component={ ProjectScreen }
                    />
                    <Route 
                        exact
                        path="/projects/form/:id?"
                        component={ ProjectForm }
                    />
                    <Route 
                        exact
                        path="/projects/:id/activities"
                        component={ ActivityScreen }
                    />
                    <Redirect
                        to="/projects"
                    />
                </Switch>
        </Fragment>
    )
}