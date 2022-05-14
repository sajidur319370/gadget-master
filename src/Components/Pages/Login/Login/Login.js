import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  return (
    <div>
      <div className="bg-dark">
        <h2 className="text-warning bg-dark pt-5">Please Log In</h2>
        <div className="w-50 mx-auto text-start pt-5">
          <Form>
            <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group
              className="mb-3 text-white"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                required
              />
            </Form.Group>
            <div className="text-white d-flex align-items-center">
              Forget Password?
              <Button variant="link">Reset Password</Button>
            </div>

            <div className="text-center">
              <Button variant="primary" type="submit">
                Log In
              </Button>
            </div>
          </Form>
          <p className="text-white mt-3 text-center">
            New to Gadget Master?{" "}
            <Link
              to="/register"
              className="text-warning text-decoration-none mx-2"
            >
              Please Rgister
            </Link>
          </p>
        </div>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
