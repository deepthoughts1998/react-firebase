import React, { useRef, useState } from "react";
import { Card, Button, Form, Alert,Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const { passwordReset } = useAuth();
  const emailRef = useRef();
  const [registerError, setRegisterError] = useState();
  const [successMessage, setSuccessMessage] = useState();
  const [buttonDisabled, setButtonDisabled] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setRegisterError("");
      setButtonDisabled(true);
      await passwordReset(emailRef.current.value);
      console.log("email sent");
      setSuccessMessage(
        "Mail sent successful, check your inbox for the password reset link"
      );
    } catch (error) {
      setRegisterError("Failed to send password reset mail.");
      setButtonDisabled(false);
    }
  }
  return (
    <>
      <Container className="h-50 w-50 mt-4">
        <Card className="w-50">
          <Card.Body>
            <h2 className="text-center mb-4">Reset Password</h2>
            {registerError && <Alert variant="danger">{registerError}</Alert>}
            {successMessage && (
              <Alert variant="success">{successMessage}</Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>

              <Button disabled={buttonDisabled} className="w-100" type="submit">
                Reset Password
              </Button>
              <Link to="/signin">Back to Login</Link>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default ForgotPassword;
