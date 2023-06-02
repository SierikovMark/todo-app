import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTask } from "../../serives/api";
import { Button, Col, Container, Form, FormGroup, FormLabel, Row } from "react-bootstrap";
import { TaskDto } from "../../dto/task.dto";

const TaskAdd = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();

    const submitAddTask = (event: any) => {
        event.preventDefault();


        const taskData = {
            title,
            description,
        } as TaskDto;

        createTask(taskData).then((response) => {

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
    return (
        <React.Fragment>
            <Container className="my-5">
                <h2 className="fw-normal mb-5">Add new Task</h2>
                <Row>
                    <Col md={{span: 6}}>
                        <Form id="addTaskForm" onSubmit={submitAddTask}>
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
                                <FormLabel htmlFor={'title-description'}>Description</FormLabel>
                                <input
                                    type={'text'}
                                    className="form-control"
                                    id={'task-description'}
                                    placeholder='Description'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    name="description" required />
                            </FormGroup>
                            <Button type="submit" className="btn-success mt-2" id="add-task-btn">Add Task</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default TaskAdd;
