import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/sign-up-in.css";
import { users } from "../assets/DB/database";

const SignIn = () => {
  const [state, setState] = useState({
    error: ""
  });
  const inputValidator = e => {
    e.preventDefault();
    setState({ error: "" });
    const isUserExist = users.find(
      user => user.email === e.target.children[1].value
    );
    if (!isUserExist || isUserExist.password !== e.target.children[3].value) {
      setState({ error: "Invalid email or password." });
    } else {
      localStorage.setItem("userEmail", `${e.target.children[1].value}`);
      if (isUserExist.title === "Developer") {
        window.location.href = "/lf-dashboard";
      }
      if (isUserExist.title === "LF") {
        window.location.href = "/developer-dashboard";
      }
    }
  };
  return (
    <form onSubmit={inputValidator} action="/contact" method="POST">
      <label>Email address</label>
      <input type="text" />
      <label>Password</label>
      <input type="password" />
      <input type="submit" value="Sign in" />
      <p className="errors">{state.error}</p>
      <p>
        <Link to="/resetpassword">
          <span>Forgot password?</span>
        </Link>
      </p>
      <p>
        Don't have an account?
        <Link to="/">
          <span> Sign up</span>
        </Link>
      </p>
    </form>
  );
};
export default SignIn;
