import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import CustomRoute from "./CustomRoute";

import {UNAUTHENTICATED_ROUTES} from "./constant";
import SuccessResult from "../containers/Result";

// const Login = React.lazy(() => import("../containers/AuthPages/Login"));
// const ForgetPassword = React.lazy(() => import("../containers/AuthPages/ForgetPassword"));
// const ResetPassword = React.lazy(() => import("../containers/AuthPages/ResetPassword"));
// const SetPassword = React.lazy(() => import("../containers/AuthPages/SetPassword/SetPassword"));
// const AddActivity = React.lazy(() => import("../containers/AddActivity"));

export default function UnAuthenticatedApp() {
    return (
        <Switch>
            {/* <CustomRoute exact path={UNAUTHENTICATED_ROUTES.LOGIN} component={Login} title="Login" />
            <CustomRoute
                exact
                path={UNAUTHENTICATED_ROUTES.FORGET_PASSWORD}
                component={ForgetPassword}
                title="Forgot Password"
            />
            <CustomRoute
                exact
                path={UNAUTHENTICATED_ROUTES.RESET_PASSWORD}
                component={ResetPassword}
                title="Reset Password"
            />
            <CustomRoute
                exact
                path={UNAUTHENTICATED_ROUTES.SET_PASSWORD}
                component={SetPassword}
                title="Set Password"
            />
            <CustomRoute
                exact
                path={UNAUTHENTICATED_ROUTES.ADD_ACTIVITY}
                component={AddActivity}
                title="Add Activity"
            />

            <CustomRoute
                exact
                path={UNAUTHENTICATED_ROUTES.EVENT_SUCCESS}
                component={SuccessResult}
                title="Event Success"
            />

            <Route exact path="*" component={Login}>
                <Redirect to={UNAUTHENTICATED_ROUTES.LOGIN} />
            </Route> */}
        </Switch>
    );
}
