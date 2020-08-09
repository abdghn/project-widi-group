import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Input } from 'reactstrap';

export default function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [errorUsername, setErrorUsername] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')


    const changeUsername = (e) => setUsername(e.target.value)
    const changeEmail = (e) => setEmail(e.target.value)
    const changePassword = (e) => setPassword(e.target.value)
    const changeConfirmPass = (e) => setConfirmPassword(e.target.value)

    const handleFormSubmit = async () => {
        let formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        if (username === '') {
            setErrorUsername('Username harus diisi')
        }
        if (email === '') {
            setErrorEmail('Email harus diisi')
        }
        if (password === '') {
            setErrorPassword('Password harus diisi')
        }
        if (confirmPassword === '') {
            setErrorConfirmPassword('Confirm Password harus diisi')
        }

        if (password != confirmPassword) {
            setErrorConfirmPassword('Password anda tidak sesuai')
        }
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="wrap-login">
                    <div className="d-flex justify-content-center mb-3">
                        <h2>Register</h2>
                    </div>
                    <Form>
                        <FormGroup row>
                            <Col sm={10}>
                                <Input className="input" type="text" name="username" id="username" placeholder="Username.." onChange={changeUsername} />
                                <div className="ml-5">
                                    <p style={{ color: "red" }}>{errorUsername}</p>
                                </div>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={10}>
                                <Input className="input" type="email" name="email" id="exampleEmail" placeholder="Email.." onChange={changeEmail} />
                                <div className="ml-5">
                                    <p style={{ color: "red" }}>{errorEmail}</p>
                                </div>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={10}>
                                <Input className="input" type="password" name="password" id="examplePassword" placeholder="Password" onChange={changePassword} />
                                <div className="ml-5">
                                    <p style={{ color: "red" }}>{errorPassword}</p>
                                </div>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={10}>
                                <Input className="input" type="password" name="password" id="examplePassword" placeholder="Confirm Password" onChange={changeConfirmPass} />
                                <div className="ml-5">
                                    <p style={{ color: "red" }}>{errorConfirmPassword}</p>
                                </div>
                            </Col>
                        </FormGroup>
                        <Button className="btn-login" onClick={handleFormSubmit}>
                            {isLoading ? <div>Loading....</div> : <span>Login</span>}
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}
