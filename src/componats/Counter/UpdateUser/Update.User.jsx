import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateuserAsync } from '../../../servies/action/User.action';

function UpdateUser() {

  const { user } = useSelector(state => state.userReducer)
  const [initial, setInitial] = useState(user)

  const dispatch = useDispatch()

  const handleChange = (e) => {

    const name = e.target.name;
    const value = e.target.value;

    setInitial({...initial, [name] : value})
  }

  const handleSubmit = (e) => {

    e.preventDefault()
    
    dispatch(UpdateuserAsync(initial))
    
    // setInitial({
    //   email : "",
    //   password : ""
    // })
  }

  return (
    <Container>
      <h1>
        Update User :-
      </h1>
        <Form onSubmit={(e) => {handleSubmit(e)}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={initial.email} onChange={(e) => {handleChange(e)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' value={initial.password} onChange={(e) => {handleChange(e)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  )
}

export default UpdateUser;