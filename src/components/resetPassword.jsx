import React from "react";
import { Link } from "react-router-dom";
import "../css/sign-up-in.css";

const ResetPassword = () => {
  return (
    <form action="#">
      <label>Email address</label>
      <input type="text" />
      <input type="submit" value="Reset password" />
      <p>
        <Link to="/signin">
          <span>Sign in</span>
        </Link>
      </p>
    </form>
  );
};
export default ResetPassword;
