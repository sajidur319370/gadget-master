import React from "react";
import auth from "../../../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import googleIcon from "../SocialLogin/SocialIcon/google.png";
import { Button } from "react-bootstrap";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
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
