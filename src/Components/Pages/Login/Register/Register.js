import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  return (
    <div className="bg-dark">
      <h2 className="text-warning bg-dark py-5">Please Sign Up</h2>
      <div className="w-50 mx-auto text-start pt-5">
        <Form>
          <Form.Group className="mb-3 text-white" controlId="formBasicName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" required />
          </Form.Group>

          <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
            <Form.Label>Enter a new Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter a new Password"
              required
            />
          </Form.Group>

          <Form.Group
            className="mb-3 text-white"
            controlId="formBasicConfirmPassword"
          >
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 text-white" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Accept Terms And Condition" />
          </Form.Group>
          <div className="text-center">
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </div>
        </Form>

        <p className="text-white mt-5 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-warning text-decoration-none mx-2">
            Please log In
          </Link>
        </p>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
