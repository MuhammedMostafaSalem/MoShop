import React from 'react'
import '../style/LogIn.css'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LogIn = () => {
    return (
        <div className='loginContainer'>
            <div className='box'>
                <h3>Sign In</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className='btn'>Log In</div>
                    <br/>
                    <Form.Text className="text-muted">
                        <Link>Forgot password?</Link>
                    </Form.Text>
                    <br/>
                    <Form.Text className="text-muted">
                        <Link>Create a new account</Link>
                    </Form.Text>
                </Form>
            </div>
        </div>
    )
}

export default LogIn