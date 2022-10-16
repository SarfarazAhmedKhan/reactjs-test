import React from "react";

const AuthenticatedAppRoutes = React.lazy(() => import("../routes/authenticated-app-routes"));

const Routes = () => {
    return <AuthenticatedAppRoutes />;
};

export default Routes;
