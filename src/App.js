import React, { Component } from "react";
import { Route } from 'react-router-dom';
import SignUp from "./components/signUp";
import Header from "./components/header";
import Footer from "./components/footer";
import Weekdetails from './components/Engineer/weekdetails';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <Route exact path="/" component={SignUp} />
          <Route exact path="/weekdetails" component={Weekdetails} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
