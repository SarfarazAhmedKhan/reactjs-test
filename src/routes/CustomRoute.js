import React from "react";
import { Route } from "react-router-dom";

import useDocumentTitle from "../custom-hooks/useDocumentTitle";

const CustomRoute = (props) => {
    useDocumentTitle(`${props.title}`);
    return <Route {...props} />;
};

export default CustomRoute;
