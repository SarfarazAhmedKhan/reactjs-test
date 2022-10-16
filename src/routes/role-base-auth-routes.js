import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ROLE_DEFAULT_ROUTE } from "../../src/constants/Roles";
import AuthService from "../util/auth.service";
import utilService from "../util/utils.service";
import LocalStorageService from "../util/local-storage.service";
import { STORAGE_CONST } from "../constants/constant";
import { UNAUTHENTICATED_ROUTES } from "./constant";

export default function RoleBaseRoute({ RenderComponent, path, exact = false, requiredRoles }) {
    const role = AuthService.getRole();
    const userHasRequiredRole = requiredRoles.includes(role);
    if (!role) {
        LocalStorageService.remove(STORAGE_CONST.USER_INFO);
        return utilService.redirectTo(UNAUTHENTICATED_ROUTES.LOGIN);
    } else if (!userHasRequiredRole) {
        return <Redirect to={{ pathname: ROLE_DEFAULT_ROUTE[role] }} />;
    } else {
        return <Route exact={exact} path={path} render={(props) => <RenderComponent {...props} />} />;
    }
}
