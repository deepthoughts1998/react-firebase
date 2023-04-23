import React, { useRef, useState } from "react";
import { Card, Button, Form, Alert, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function SignIn() {
  const { signin } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [registerError, setRegisterError] = useState();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setRegisterError("");
      setButtonDisabled(true);
      await signin(emailRef.current.value, passwordRef.current.value);
      console.log("success login");
      navigate("/");
    } catch (error) {
      setRegisterError("Failed to login.");
      setButtonDisabled(false);
    }
  }
  return (
    <>
      <Container className="h-50 w-50 mt-4">
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4"> Sign in</h2>
            {registerError && <Alert variant="danger">{registerError}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>

              <Button disabled={buttonDisabled} className="w-100" type="submit">
                login
              </Button>
              <Link to="/forgotPassword">Forgot your Password?</Link>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default SignIn;
