import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const Register = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (data.password !== data.confirmpassword) {
      setErrorMessage('Passwords do not match!');
      // return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(data.email)) {
      setErrorMessage('Invalid email address!');
      return;
    }

    axios.post('http://localhost:710/register', data)
      .then((res) => {
        alert(res.data);
        setData({
          username: '',
          email: '',
          password: '',
          confirmpassword: '',
        });
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage('Error occurred while registering');
      });
  };

  return (
    <div className='register'>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h3>Register</h3>
            {errorMessage && <Alert variant='danger'>{errorMessage}</Alert>}
            <Form onSubmit={submitHandler} autoComplete='off'>
              <Form.Group controlId='formBasicUsername'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type='text'
                  name='username'
                  placeholder='Enter username'
                  value={data.username}
                  onChange={changeHandler}
                  required
                />
              </Form.Group>

              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  name='email'
                  placeholder='Enter email'
                  value={data.email}
                  onChange={changeHandler}
                  required
                />
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={data.password}
                  onChange={changeHandler}
                  required
                />
              </Form.Group>

              <Form.Group controlId='formBasicConfirmPassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type='password'
                  name='confirmpassword'
                  placeholder='Confirm Password'
                  value={data.confirmpassword}
                  onChange={changeHandler}
                  required
                />
              </Form.Group>

              <Button variant='primary' type='submit'>
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
