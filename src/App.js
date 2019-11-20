import React, { Component } from "react";
import { Route } from "react-router-dom";
import Landing from "./components/landingPage";
import Header from "./components/header";
import Footer from "./components/footer";
import Devdashbard from "./components/developer/devdashbard";
import LFADashboard from './components/LFADashboard';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/developer-dashboard" component={Devdashbard} />
        <Route exact path="/signin" component={Landing} />
        <Route exact path="/resetpassword" component={Landing} />
        <Route exact path="/add-score" component={LFWeekly} />
        <Route exact path="/lf-dashboard" component={LFADashboard} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
