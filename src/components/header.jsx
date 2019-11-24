import React from "react";
import "../css/header.css";
import NavBar from "../components/NavBar";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <h1>Pulse-Andela</h1>
        {window.location.pathname !== "/signup" &&
        window.location.pathname !== "/signin" &&
        window.location.pathname !== "/" ? (
          <NavBar />
        ) : null}
      </header>
    </React.Fragment>
  );
};

export default Header;
