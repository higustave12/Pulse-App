
import React, { Component, Fragment } from "react";
import "../css/LFADashboard.css";
import EngineersList from "./EngineersListCards";
import { users } from "../assets/DB/database";

class LFADashboard extends Component {
  state = {
    users: [],
    suggestions: [],
    inputValue: ""
  };
  updateSearchInput = event => {
    const newSuggestion = this.dataSearcher(event);
    this.setState({
      inputValue: event.target.innerHTML,
      suggestions: [...newSuggestion]
    });
    this.searchHandler(event);
  };
  resetSuggestions = event => {
    this.setState({ suggestions: [] });
  };
  suggestionsHandler = event => {
    this.setState({ inputValue: event.target.value });
    const searchResult = this.dataSearcher(event);
    this.setState({ suggestions: [...searchResult] });
    if (event.target.value === "") {
      this.resetSuggestions(event);
    }
  }
  cohortHandler = event => {
    let cohortNumber;
    if(event.target.tagName === 'SPAN'){
      cohortNumber = Number(event.target.innerHTML);
    }else{
      cohortNumber = Number(event.target.children[0].innerHTML);
    }
    
    const cohortMembers = users.filter(user => user.cohort === cohortNumber);
    this.setState({users:[...cohortMembers]})
    
  }
  searchHandler = event => {
    const searchResult = this.dataSearcher(event);
    this.setState({ users: [...searchResult] });
  };
  dataSearcher = event => {
    event.preventDefault();
    let searchInput;
    event.type === "submit"
      ? ([searchInput] = event.target.children[0].children)
      : (searchInput = event.target);

    const searchResult = users.filter(user => {
      let searchedData;
      const fullName = `${user.firstName} ${user.lastName}`;
      if (event.type === "click") {
        searchedData = searchInput.innerHTML.toLowerCase();
      } else {
        searchedData = searchInput.value.toLowerCase();
      }
      if (
        user.firstName.toLowerCase().startsWith(searchedData) ||
        user.lastName.toLowerCase().startsWith(searchedData) ||
        fullName.toLowerCase().startsWith(searchedData)
      ) {
        return true;
      }
      return false;
    });
    return searchResult;
  };
  render() {
    return (
      <Fragment>
        <div>
          <EngineersList
            suggest={this.suggestionsHandler}
            search={this.searchHandler}
            users={this.state.users}
            suggestions={this.state.suggestions}
            reset={this.resetSuggestions}
            updateSearch={this.updateSearchInput}
            value={this.state.inputValue}
            cohortHandler={this.cohortHandler}
          />
        </div>
      </Fragment>
    );
  }
}

export default LFADashboard;
