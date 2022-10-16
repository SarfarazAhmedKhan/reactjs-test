import React from "react";
import CustomRoute from "./CustomRoute";
import {AUTHENTICATED_ROUTES} from "./constant";
import {Redirect, Route, Switch} from "react-router-dom";
const UserList = React.lazy(() => import("../containers/DashboardPages/User"));

export default function AuthenticatedApp() {
    return (
        <div>
            <Switch>
                <CustomRoute exact path={AUTHENTICATED_ROUTES.USER_LIST} component={UserList} title={"UserList"} />
                <Route exact>
                    <Redirect to={AUTHENTICATED_ROUTES.USER_LIST} />
                </Route>
            </Switch>
        </div>
    );
}

