import React, { useState } from "react";
import { Button, Col, Container, Form, FormGroup, FormLabel, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { login } from "../../serives/api";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const submitLoginForm = (event: any) => {
        event.preventDefault();

        const btnPointer: Element = document.querySelector('#login-btn') || {} as Element;
        btnPointer.innerHTML = 'Please wait..';

        const userData = {
            username,
            password,
        };

        login(userData).then((response) => {
            btnPointer.innerHTML = 'Login';
            btnPointer.removeAttribute('disabled');
            const token = response.access_token;
            if (!token) {
                alert('Failed to login');
                return;
            }
            localStorage.clear();
            localStorage.setItem('user-token', token);
            localStorage.setItem('user-name', username);

            setTimeout(() => {
                navigate('/');
            }, 500);
        }).catch((error) => {
            btnPointer.innerHTML = 'Login';
            btnPointer.removeAttribute('disabled');
            alert(error.message);
        });

    }
    return (
        <React.Fragment>
            <Container className="my-5">
                <h2 className="fw-normal mb-5">Login</h2>
                <Row>
                    <Col md={{span: 6}}>
                        <Form id="loginForm" onSubmit={submitLoginForm}>
                            <FormGroup className="mb-3">
                                <FormLabel htmlFor={'login-username'}>Username</FormLabel>
                                <input
                                    type={'text'}
                                    className="form-control"
                                    id={'login-username'}
                                    placeholder='Login'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    name="username" required />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel htmlFor={'login-password'}>Password</FormLabel>
                                <input
                                    type={'password'}
                                    className="form-control"
                                    id={'login-password'}
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    name="password" required />
                            </FormGroup>
                            <Button type="submit" className="btn-success mt-2" id="login-btn">Login</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Login;