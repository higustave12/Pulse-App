import React, { Component } from "react";
import { Route } from "react-router-dom";
import Landing from "./components/landingPage";
import Header from "./components/header";
import Footer from "./components/footer";
import Weekdetails from "./components/Engineer/weekdetails";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/weekdetails" component={Weekdetails} />
        <Route exact path="/signin" component={Landing} />
        <Route exact path="/resetpassword" component={Landing} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
