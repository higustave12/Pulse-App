import React from "react";
import { Link } from "react-router-dom";
import "../css/sign-up-in.css";

const SignIn = () => {
  return (
    <form action="#">
      <label>Email address</label>
      <input type="text" />
      <label>Password</label>
      <input type="password" />
      <input type="submit" value="Sign in" />
      <p>
        <Link to="/resetpassword">
          <span>Forgot password?</span>
        </Link>
      </p>
      <p>
        Don't have an account?
        <Link to="/">
          <span>Sign up</span>
        </Link>
      </p>
    </form>
  );
};
export default SignIn;
