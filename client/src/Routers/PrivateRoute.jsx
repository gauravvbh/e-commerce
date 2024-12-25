import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ ...rest }) => {
    const token = useSelector((state) => state.auth.jwt); //This is pointing to the jwt state property of your reducer

    const location = useLocation();

    if (token) {
        return <Outlet {...rest} />;
    }

    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
