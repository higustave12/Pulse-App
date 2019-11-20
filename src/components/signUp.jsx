import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/sign-up-in.css";
import { users } from "../assets/DB/database";

const SignUp = () => {
  const [state, setState] = useState({
    error: ""
  });
  const inputValidator = e => {
    e.preventDefault();
    setState({ error: "" });
    const isUserExist = users.find(
      user => user.email === e.target.children[2].value
    );
    if (
      // eslint-disable-next-line
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        e.target.children[2].value
      )
    ) {
      setState({ error: "Invalid email address." });
      return;
    }
    if (isUserExist) {
      setState({ error: "User already exist. instead, you can sign in." });
      return;
    }
    if (e.target.children[4].value.length < 8) {
      setState({ error: "Password must at least be 8 characheters." });
      return;
    }
    if (e.target.children[4].value !== e.target.children[6].value) {
      setState({ error: "Password don't match." });
      return;
    } else {
      const newUser = {
        userId: users.length + 1,
        firstName: "new",
        lastName: "user",
        email: e.target.children[2].value,
        password: e.target.children[6].value,
        title: "Developer",
        imgUrl: "assets/images/new-user.jpg"
      };
      users.push(newUser);
      localStorage.setItem("userEmail", `${e.target.children[2].value}`);
      if (newUser.title === "Developer") {
        window.location.href = "/lf-dashboard";
      }
      if (newUser.title === "LF") {
        window.location.href = "/developer-dashboard";
      }
    }
  };
  return (
    <form onSubmit={inputValidator} action="/contact" method="POST">
      <p className="errors">{state.error}</p>
      <label>Email address</label>
      <input type="text" />
      <label>Password</label>
      <input type="password" />
      <label>Confirm password</label>
      <input type="password" />
      <label>
        LF
        <input type="checkbox" value="LF" />
      </label>
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
