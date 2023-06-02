import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateTask } from "../../serives/api";
import { Button, Col, Container, Form, FormGroup, FormLabel, Row } from "react-bootstrap";
import { TaskDto } from "../../dto/task.dto";

const TaskEdit = () => {
    const taskDto: TaskDto = useLocation().state.taskDto;
    const [title, setTitle] = useState(taskDto.title);
    const [description, setDescription] = useState(taskDto.description);
    const [completed, setCompleted] = useState(taskDto.completed);

    const navigate = useNavigate();

    const submitUpdateTask = (event: any) => {
        event.preventDefault();

        const taskData = {
            id: taskDto.id,
            title,
            description,
            completed
        };

        updateTask(taskData).then((response) => {
            const status = response.status;

            if (status === 201) {
                navigate('/')
            }

            setTimeout(() => {
                navigate('/');
            }, 500);
        }).catch((error) => {
            alert(error.message);
        });

    }

    const navigateToTasksList = () => {
        navigate('/tasks')
    }

    return (
        <React.Fragment>
            <Container className="my-5">
                <h2 className="fw-normal mb-5">Edit task: {title}</h2>
                <Row>
                    <Col md={{span: 6}}>
                        <Form id="addTaskForm" onSubmit={submitUpdateTask}>
                            <FormGroup className="mb-3">
                                <FormLabel htmlFor={'task-title'}>Title</FormLabel>
                                <input
                                    type={'text'}
                                    className="form-control"
                                    id={'task-title'}
                                    placeholder='Title'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    name="title" required />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel htmlFor={'task-description'}>Description</FormLabel>
                                <input
                                    type={'text'}
                                    className="form-control"
                                    id={'task-description'}
                                    placeholder='Description'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    name="description" required />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel htmlFor={'task-completed'}>Description</FormLabel>
                                <input
                                    type={'checkbox'}
                                    className="form-control"
                                    id={'task-completed'}
                                    checked={completed}
                                    onChange={(e) => setCompleted(e.target.value === 'true')}
                                    name="completed" />
                            </FormGroup>
                            <Button type="submit" className="btn-success mt-2" id="add-task-btn">Update</Button>
                            <Button className="btn-cancel mt-2" id="cancel-add-task-btn" onClick={navigateToTasksList}>Cancel</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default TaskEdit;
