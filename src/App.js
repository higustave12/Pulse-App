import React, { Component } from "react";
import { Route } from "react-router-dom";
import Landing from "./components/landingPage";
import Header from "./components/header";
import Footer from "./components/footer";
import Devdashbard from "./components/developer/devdashbard";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route path="/developer-dashboard" component={Devdashbard} />
        <Route path="/signin" component={Landing} />
        <Route path="/resetpassword" component={Landing} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
