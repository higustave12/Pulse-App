import React, { Component } from "react";
import "../css/sign-up.css";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section>
          <p id="desc">
            The framework <br /> for evaluating a person’s <br /> performance
            based on the <br />
            competency expectations for <br /> their current level
          </p>
          <form action="#">
            <label>Email address</label>
            <input type="text" />
            <label>Password</label>
            <input type="passowrd" />
            <label>Confirm password</label>
            <input type="passowrd" />
            <input type="submit" value="Sign up" />
            <p>
              Have an account? <a href="#">Sign in</a>
            </p>
          </form>
        </section>
      </React.Fragment>
    );
  }
}

export default SignUp;
