import React from 'react'
import '../style/Register.css'
import { Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='registerContainer'>
            <div className='box'>
                <h3>Create an account</h3>
                <Form>
                    <Row>
                        <Col md='6' sm='12'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Your name" />
                            </Form.Group>
                        </Col>
                        <Col md='6' sm='12'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Last name" />
                            </Form.Group>
                        </Col>
                        <Col md='6' sm='12'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Username" />
                            </Form.Group>
                        </Col>
                        <Col md='6' sm='12'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                        </Col>
                        <Col md='6' sm='12'>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Col>
                        <Col md='6' sm='12'>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Confirm password" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Text className="text-muted">
                    <Link><span>By creating an account, I consent to the processing of my personal
                    data in accordance with the</span> <span>PRIVACY POLICY</span></Link>
                    </Form.Text>
                    <br/>
                    <div className='btn'>Create</div>
                </Form>
            </div>
        </div>
    )
}

export default Register