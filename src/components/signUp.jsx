import React from "react";
import { Link } from "react-router-dom";
import "../css/sign-up-in.css";

const SignUp = () => {
  return (
    <form action="#">
      <label>Email address</label>
      <input type="text" />
      <label>Password</label>
      <input type="password" />
      <label>Confirm password</label>
      <input type="password" />
      <input type="submit" value="Sign up" />
      <p>
        Have an account?
        <Link to="/signin">
          <span>Sign in</span>
        </Link>
      </p>
    </form>
  );
};
export default SignUp;
