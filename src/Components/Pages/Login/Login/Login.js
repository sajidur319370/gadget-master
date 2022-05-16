import axios from "axios";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post("http://localhost:5000/login", {
      email,
    });
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  if (user) {
    emailRef.current.value = "";
    passwordRef.current.value = "";
    // navigate(from, { replace: true });
    console.log(user);
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (!email) {
      alert("Enter Your Email");
      return;
    } else {
      await sendPasswordResetEmail(email);
      alert("Password Reset link Sent To Your Email");
    }
  };

  return (
    <div className="bg-dark">
      <h2 className="text-warning bg-dark pt-5">Please Log In</h2>
      <div className="w-50 mx-auto text-start pt-5">
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Enter Password"
              required
            />
            <p className="text-danger">{error && error.message}</p>
          </Form.Group>
          <div className="text-white d-flex align-items-center">
            Forget Password?
            <Button onClick={resetPassword} variant="link">
              Reset Password
            </Button>
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
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
