import React, { Fragment, Component } from "react";
import EngineerCard from "./engineerCard";
import CohortsList from "./cohortsLists";
import { weeks } from "../assets/DB/database";
import "../css/LFADashboard.css";
import Suggestions from "./suggestions";

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
            <CohortsList cohortHandler={this.props.cohortHandler} />
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
                  engineerId={user.userId}
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
