import React from 'react';
import { useNavigate } from "react-router-dom";
import './Task.css';

const Task = ({task, completeTask: handleCompleteTask, deleteTask}: any) => {
    const navigate = useNavigate();

    const editTask = () => {
        navigate('/tasks/edit', {state: {taskDto: task}})
    };

    return (
        <li className="task-item" style={{textDecoration: task.completed ? 'line-through' : ''}}>
            <label>
                {task.title}
            </label>
            <div>
                {task.description}
            </div>
            <button className={'delete-btn btn btn-primary'} onClick={() => handleCompleteTask(task.id)}>{task.completed ? 'Undone': 'Complete'}</button>
            <button className={'edit-btn btn btn-warning'} onClick={() => editTask()}>Edit</button>
            <button className={'delete-btn btn btn-danger'} onClick={() => deleteTask(task.id)}>Delete</button>
        </li>

    );
}

export default Task;
