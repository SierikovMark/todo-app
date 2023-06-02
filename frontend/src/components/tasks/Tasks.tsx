import React from "react";
import { Outlet } from "react-router-dom";
import TasksFooter from "./TasksFooter";
import TasksNavbar from "./TasksNavbar";

const Tasks = () => {
    return (
        <React.Fragment>
            <TasksNavbar />
            <Outlet />
            <TasksFooter />
        </React.Fragment>
    );
}

export default Tasks;
