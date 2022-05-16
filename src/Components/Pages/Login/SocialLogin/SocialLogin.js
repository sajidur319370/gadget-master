import React from "react";
import auth from "../../../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import googleIcon from "../SocialLogin/SocialIcon/google.png";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import useToken from "../../../../hooks/useToken";

const SocialLogin = () => {
  const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
  const [token] = useToken(user);
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <p className="text-danger">{error && error.message}</p>
      <Button onClick={handleGoogleSignIn} className="my-2" variant="secondary">
        <img src={googleIcon} alt="" /> Google Sign In
      </Button>
    </div>
  );
};

export default SocialLogin;
