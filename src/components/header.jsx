import React, { Component } from "react";
import "../css/header.css";
import NavBar from '../components/NavBar';

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>Pulse</h1>
          <NavBar/>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
