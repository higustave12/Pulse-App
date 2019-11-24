import React, { Fragment, Component } from "react";
import "../css/LFADashboard.css";
import { Link } from "react-router-dom";
import { users, weeks } from "../assets/DB/database";
import Suggestions from "./suggestions";

const EngineerCard = props => {
  return (
    <div className="column">
      <div className="w3-card">
        <header
          className="w3-container w3-light-grey"
          style={{ textAlign: "left", padding: "5px 15px" }}
        >
          <h3>{props.userName}</h3>
        </header>
        <div className="w3-container eng_img_and_role">
          <img
            src={props.imgSrc}
            alt="avatar"
            className="w3-left w3-circle w3-margin-right"
            style={{ width: "52px", height: "55px" }}
          />
          <p>{props.userRole}</p>
          <p>&#9658; Cohort: {props.devCohort}</p>
        </div>
        <span className="average_main_span">
          <span className="allmonths_average">Average:</span>
          <span className="average_value">{props.engineerAverage}</span>
        </span>
        <div className="progress">
          <div
            className="progress-bar bg-success "
            role="progressbar"
            aria-valuenow={props.engineerAverage * 10}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: `${props.engineerAverage * 10}%` }}
          >
            {props.engineerAverage * 10}%
          </div>
        </div>
        <hr />
        <Link to="/developer-dashboard">
          <button className="w3-button w3-block w3-dark-grey">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

const CohortsList = () => {
  const handleCohortClicked = () => {};

  let allCohorts = [];
  for (let i = 0; i < users.length; i++) {
    allCohorts.push(users[i].cohort);
  }
  //Use a Set data type to remove redundancy
  let uniqueCohortsValues = [...new Set(allCohorts)];
  //console.log(uniqueCohortsValues);
  const numberOfCohorts = [];
  for (let j = 0; j < uniqueCohortsValues.length; j++) {
    numberOfCohorts.push(uniqueCohortsValues[j]);
  }
  return (
    <ul className="w3-ul w3-hoverable cohorts-list">
      {numberOfCohorts
        .sort((a, b) => {
          return a - b;
        })
        .map((singleCohort, index) => {
          return (
            <li key={index} onClick={handleCohortClicked()}>
              Cohort-{singleCohort}
            </li>
          );
        })}
    </ul>
  );
};

class EngineersList extends Component {
  render() {
    return (
      <Fragment>
        <div className="w3-row all_engineers_list_div">
          <div
            className="w3-col w3-container"
            style={{ width: "20%", textAlign: "center", marginTop: "30px" }}
          >
            <span>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#848589"
                }}
              >
                <span
                  className="glyphicon glyphicon-user"
                  style={{
                    paddingRight: "2px",
                    border: "2px solid #878787",
                    padding: "5px",
                    borderRadius: "90px"
                  }}
                ></span>
              </span>
              <span
                style={{
                  paddingLeft: "5px",
                  fontSize: "12px",
                  textDecoration: "underline",
                  fontWeight: "bold",
                  color: "#000000"
                }}
              >
                {localStorage.getItem("userEmail")}
              </span>
            </span>
            <br />
            <br />
            <br />
            <br />
            <h5
              style={{
                backgroundColor: "#6ECB56",
                lineHeight: "40px",
                fontWeight: "bold",
                color: "#fff"
              }}
            >
              Available Cohorts
            </h5>

            <CohortsList />
          </div>
          <div
            className="w3-col  w3-container"
            style={{
              width: "80%",
              textAlign: "center",
              border: "1px solid aliceblue",
              padding: "0px"
            }}
          >
            <form
              className="searchBarClass"
              onSubmit={this.props.search}
              style={{ display: "inline" }}
            >
              <div id="search-input-container">
                <input
                  type="text"
                  placeholder="Search for a developer..."
                  style={{
                    backgroundColor: "white",
                    width: "450px",
                    height: "51px",
                    fontSize: "18px",
                    borderRadius: "0"
                  }}
                  onChange={this.props.suggest}
                  onFocus={this.props.suggest}
                  // onBlur={this.props.reset}
                  value={this.props.value}
                />
                <input
                  type="submit"
                  style={{
                    fontSize: "18px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    height: "52px",
                    backgroundColor: "#E59406",
                    color: "#fff",
                    fontWeight: "bold",
                    width: "100px",
                    borderRadius: "0"
                  }}
                  value="Search"
                />
                <div id="suggestions">
                  <Suggestions
                    users={this.props.users}
                    suggestions={this.props.suggestions}
                    search={this.props.search}
                    updateSearch={this.props.updateSearch}
                  />
                </div>
              </div>
            </form>
            <button
              type="button"
              style={{
                padding: "10px 20px",
                fontSize: "15px",
                backgroundColor: "rgba(26, 145, 255)",
                color: "#fff"
              }}
            >
              Rate Cohort
            </button>
            <hr />
            {this.props.users.map(user => {
              //Engineer all weeks average
              let average = 0;
              const calcAverage = id => {
                const usersAllWeeks = weeks.filter(week => week.userId === id);
                for (let i = 0; i < usersAllWeeks.length; i++) {
                  const totalScore =
                    usersAllWeeks[i].Quantity.score +
                    usersAllWeeks[i].Quality.score +
                    usersAllWeeks[i].initiative.score +
                    usersAllWeeks[i].Professionalism.score +
                    usersAllWeeks[i].Integration.score +
                    usersAllWeeks[i].Communication.score;
                  average += totalScore;
                }
                return average / usersAllWeeks.length;
              };
              const userAverage = calcAverage(user.userId);
              return (
                <EngineerCard
                  key={user.userId}
                  userName={user.firstName}
                  imgSrc={user.imgUrl}
                  userRole={user.title}
                  devCohort={user.cohort}
                  engineerAverage={userAverage}
                />
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default EngineersList;
