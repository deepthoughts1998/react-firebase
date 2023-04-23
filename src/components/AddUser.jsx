import React, { useRef, useState } from "react";
import { Card, Button, Form, Alert,Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function AddUser() {
  const { signup, currentUser } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confPasswordRef = useRef();
  const [registerError, setRegisterError] = useState();
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confPasswordRef.current.value) {
      return setRegisterError("Passwords mismatch");
    } else if (passwordRef.current.value.length < 8) {
      return setRegisterError("Passwords must be greater than 8");
    }
    try {
      setRegisterError("");
      setButtonDisabled(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      alert("successful");
      navigate("/");
    } catch (error) {
      setRegisterError("Failed to register masjid.Something went wrong");
    }
  }

  return (
    <>
      <Container className="h-50 w-50 mt-4">
        <Card className="w-50">
          <Card.Body>
            <Link to="/">Home</Link>

            <h2 className="text-center mb-4"> Add Masjid</h2>
            {registerError && <Alert variant="danger">{registerError}</Alert>}
            {currentUser && currentUser.email}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="confPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" ref={confPasswordRef} required />
              </Form.Group>
              <Button disabled={buttonDisabled} className="w-100" type="submit">
                Add
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
