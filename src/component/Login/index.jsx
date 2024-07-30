import React, { useState } from "react";
import { Col, Form, Row, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigateTo = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [show, setShow] = useState(true);
  const handleLogin = () => {
    const existingUsersLocal = localStorage.getItem("userInfo");
    setIsRegister(true);
    if (email.trim().length && password.trim().length) {
      const usersInfo = JSON.parse(existingUsersLocal);
      console.log(usersInfo);
      const isExist = usersInfo.some(
        (user) => user.email === email && user.password === password
      );
      console.log("----", isExist);
      setShow(isExist);
      if (isExist) {
        localStorage.setItem("isLoggedIn", "true");
        navigateTo("/home");
      }
    }
  };
  return (
    <Form className="login-container">
      <div>
        {!show && (
          <Alert
            key="danger"
            variant="danger"
            onClose={() => setShow(!show)}
            dismissible
          >
            Invalid credentials
          </Alert>
        )}
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <h3 className="mb-3 text-center">Login</h3>
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="email"
              placeholder="email@example.com"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            {!email.trim().length && isRegister && (
              <p className="error-message">Please enter valid email id</p>
            )}
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            {!password.trim().length && isRegister && (
              <p className="error-message">Please enter valid password</p>
            )}
          </Col>
        </Form.Group>
      </div>
      <div>
        <Button className="loginBtn" variant="primary" onClick={handleLogin}>
          Login
        </Button>

        <Button
          className="signupBtn"
          variant="primary"
          onClick={() => {
            console.log("rediect");

            navigateTo("/register");
          }}
        >
          Signup
        </Button>
      </div>
    </Form>
  );
};

export default Login;
