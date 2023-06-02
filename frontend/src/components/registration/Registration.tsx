import React from "react";
import { Outlet } from "react-router-dom";
import RegistrationFooter from "./RegistrationFooter";
import RegistrationNavbar from "./RegistrationNavbar";

const Auth = () => {
    return (
        <React.Fragment>
            <RegistrationNavbar />
            <Outlet />
            <RegistrationFooter />
        </React.Fragment>
    );
}

export default Auth;
