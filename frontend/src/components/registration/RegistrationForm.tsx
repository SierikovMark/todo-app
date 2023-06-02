import React, { useState } from "react";
import { Button, Col, Container, Form, FormGroup, FormLabel, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { register, login } from "../../serives/api";

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function auth(userData: { password: string; username: string }) {
        login(userData).then((response) => {
            const token = response.access_token;
            if (!token) {
                alert('Failed to login');
                navigate('/')
            }
            localStorage.clear();
            localStorage.setItem('user-token', token);
            setTimeout(() => {
                navigate('/');
            }, 500);
        }).catch((error) => {
            alert(error.message);
            navigate('/')
        });
    }

    const submitRegistrationForm = (event: any) => {
        event.preventDefault();
        const btnPointer: Element = document.querySelector('#registration-btn') || {} as Element;
        btnPointer.innerHTML = 'Please wait..';
        const userData = {
            username,
            password,
        };
        register(userData).then((response) => {
            btnPointer.innerHTML = 'Registration';
            btnPointer.removeAttribute('disabled');
            const status = response.status;
            if (status === 201) {
                auth(userData);
            } else {
                alert('Unable to register new user');
            }
        }).catch((error) => {
            btnPointer.innerHTML = 'Sign Up';
            btnPointer.removeAttribute('disabled');
            alert(error.message);
        });
    }
    return (
        <React.Fragment>
            <Container className="my-5">
                <h2 className="fw-normal mb-5">User registration</h2>
                <Row>
                    <Col md={{span: 6}}>
                        <Form id="registrationForm" onSubmit={submitRegistrationForm}>
                            <FormGroup className="mb-3">
                                <FormLabel htmlFor={'registration-username'}>Username</FormLabel>
                                <input
                                    type={'text'}
                                    className="form-control"
                                    id={'registration-username'}
                                    placeholder='Please enter desired Login'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    name="username" required/>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel htmlFor={'registration-password'}>Password</FormLabel>
                                <input
                                    type={'password'}
                                    className="form-control"
                                    id={'registration-password'}
                                    placeholder='Please create new Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    name="password" required/>
                            </FormGroup>
                            <Button type="submit" className="btn-success mt-2" id="registration-btn">Sign Up</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default RegistrationForm;
