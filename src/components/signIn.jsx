import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../css/sign-up-in.css";
import { users } from "../assets/DB/database";
import * as actionTypes from "../store/actions";

const SignIn = props => {
  // const [state, setState] = useState({
  //   error: ""
  // });
  const inputValidator = e => {
    e.preventDefault();
    // setState({ error: "" });
    props.onInputValidator("");
    const isUserExist = users.find(
      user => user.email === e.target.children[2].value
    );
    if (!isUserExist || isUserExist.password !== e.target.children[4].value) {
      // setState({ error: "Invalid email or password." });
      props.onInputValidator("Invalid email or password.");
    } else {
      localStorage.setItem("userEmail", `${e.target.children[2].value}`);
      if (isUserExist.title === "Developer") {
        window.location.href = "/developer-dashboard";
      }
      if (isUserExist.title === "LF") {
        window.location.href = "/lf-dashboard";
      }
    }
  };
  return (
    <form onSubmit={inputValidator} method="POST">
      <p className="errors">{props.error}</p>
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
          <span> Sign up</span>
        </Link>
      </p>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInputValidator: errors =>
      dispatch({ type: actionTypes.VALIDATE, error: errors })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
