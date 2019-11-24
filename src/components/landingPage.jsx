import React from "react";
import "../css/sign-up-in.css";
import SignUp from "./signUp";
import SignIn from "./signIn";
import ResetPassword from "./resetPassword";

const Landing = props => {
  let Path;
  if (props.match.path === "/signup") {
    Path = SignUp;
  }
  if (props.match.path === "/signin") {
    Path = SignIn;
  }
  if (props.match.path === "/resetpassword") {
    Path = ResetPassword;
  }
  return (
    <React.Fragment>
      <div className="cntnr">
        <section className="signUp">
          <p id="desc">
            The framework <br /> for evaluating a person’s <br /> performance
            based on the <br />
            competency expectations for <br /> their current level
          </p>
          <Path />
        </section>
      </div>
    </React.Fragment>
  );
};

export default Landing;
