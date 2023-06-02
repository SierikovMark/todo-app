import React from 'react';
import { useNavigate } from "react-router-dom";

const Task = ({ task, completeTask, deleteTask }: any) => {
    const navigate = useNavigate();

    const editTask = () => {
        navigate('/tasks/edit', {state: { taskDto: task }})
    };

    return (
        <div
            className="task"
            style={{textDecoration: task.completed ? 'line-through' : ''}}
        >
            {task.title}
            {task.description}
            <div>
                <button onClick={() => completeTask(task.id)}>Complete</button>
                <button onClick={() => editTask()}>Edit</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
        </div>
    );
}

export default Task;
