import React, { Fragment, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
// import { NavBar } from "../components/ui/Navbar/NavBar";
import { Login } from "../components/auth/Login";
import { Loading } from "../components/ui/Loading/Loading";
import { DashboardRoutes } from "./DashboardRoutes";
import { startChecking } from "../actions/authActions";
import { startProjectLoad } from "../actions/projectActions";

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch( startChecking() );
    }, [ dispatch ]);

    if( checking ) {
        return (
            <div className="container-fluid pb-3 pt-3 pl-3 pr-3">
                <div className="col-12 text-center mt-5">
                    <Loading />
                </div>
            </div>
        )
    } else {
        if( !!uid ) {
            dispatch( startProjectLoad() );
        }
    }

	return (
        <Fragment>
            <Router>
                <div>
                    <Switch>
                        <PublicRoutes
                            exact
                            path="/login"
                            component={ Login }
                            isAuthenticated={ !!uid }
                        />

                        <PrivateRoutes
                            path="/"
                            component={ DashboardRoutes }
                            isAuthenticated={ !!uid }
					    />
                    </Switch>
                </div>
            </Router>
        </Fragment>
	);
};
