import React, { useEffect, useState } from "react";
import { getAllTasks } from "../../serives/api";
import Task from "./Task";
import { TaskDto } from "../../dto/task.dto";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const TasksList = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllTasks();
                if (response.status === 200) {
                    setTasks(response.data);
                } else {
                    alert("Error fetching data")
                }
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };
        fetchData();
    }, []);

    const completeTask = (id: string) => {
        // const updatedTodos = tasks.map(task =>
        //     task.id === id ? { ...task, completed: true } : task
        // );
        // setTasks(updatedTodos);
    };

    const deleteTask = (id: string) => {
        // const updatedTodos = tasks.filter(task => task.id !== id);
        // setTasks(updatedTodos);
    };

    return (
        <div className="container">
            <Link to={'/tasks/add'}>
                <Button className={'btn-success mt-2'}>Add new Task</Button>
            </Link>
            <div>
                {
                    tasks.map((task: TaskDto) => (
                        <Task task={task} completeTask={completeTask} deleteTask={deleteTask} />
                    ))}
            </div>

        </div>
    )
}

export default TasksList;
