import React, { useEffect, useState } from "react";
import { finishTask, getAllTasks, removeTask } from "../../serives/api";
import Task from "./Task";
import { TaskDto } from "../../dto/task.dto";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const TasksList = () => {

    const navigate = useNavigate();

    const [tasks, setTasks] = useState([] as TaskDto[]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllTasks();
                if (response.status === 200) {
                    setTasks(response.data.sort((task1: TaskDto) => task1.completed ? 1 : -1));
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
        finishTask(id).then((response) => {
            const status = response.status;
            if (status === 200) {
                const updatedTasks: TaskDto[] = tasks.map((task: TaskDto) =>
                    task.id === id ? { ...task, completed: true } : task
                ).sort((task1: TaskDto) => task1.completed ? 1 : -1);

                setTasks(updatedTasks);
            } else {
                alert("Error");
                navigate('/');
            }
        }).catch((error) => {
            alert(error.message);
        });
    };

    const deleteTask = (id: string) => {
        removeTask(id).then((response) => {
            const status = response.status;
            if (status === 200) {
                const updatedTasks = tasks.filter((task: TaskDto) => task.id !== id);
                setTasks(updatedTasks);
            } else {
                alert("Error");
                navigate('/');
            }
        }).catch((error) => {
            alert(error.message);
        });
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
