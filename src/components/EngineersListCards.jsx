import React, { Fragment, Component } from "react";
import "../css/LFADashboard.css";
import { Link } from "react-router-dom";
import { users, weeks } from "../assets/DB/database";

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
            <span class="glyphicon glyphicon-ok-circle" style={{paddingRight:'5px', fontSize: '15px', color:'#FF7133'}} ></span>
              <span style={{fontSize:'16px',fontWeight:'bold', color:'#848589'}} >LF:</span>
                <span style={{paddingLeft: '5px', fontSize:'15px', textDecoration:'underline', fontWeight:'bold',color:'#848589'}} >Bernard</span>
            </span>
            <br/><br/><br/><br/>
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
            <ul class="w3-ul w3-hoverable cohorts-list">
              <li>Cohort-1</li>
              <li>Cohort-2</li>
              <li>Cohort-3</li>
              <li>Cohort-4</li>
              <li>Cohort-5</li>
              <li>Cohort-6</li>
              <li>Cohort-7</li>
              <li>Cohort-8</li>
              <li>Cohort-9</li>
              <li>Cohort-10</li>
              <li>Cohort-11</li>
              <li>Cohort-12</li>
            </ul>
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
            <p className="searchBarClass">
              <input
                type="text"
                placeholder="Search for a developer..."
                style={{
                  backgroundColor: "white",
                  width: "450px",
                  height: "51px",
                  marginTop: "20px",
                  fontSize: "18px",
                  borderTopRightRadius: "0px",
                  borderBottomRightRadius: "0px",
                  border: "1px solid #838282"
                }}
              />
              <button
                type="submit"
                style={{
                  fontSize: "18px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  height: "52px",
                  backgroundColor: "#E59406",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius:'0px 10px 10px 0px'
                }}
              >
                search
              </button>
            </p>
            <hr />
            {users.map(user => {
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

              //Dynamic progress bar
              let bootstrapClass = "";
              const colorClass = userAverage => {
                if (userAverage >= 6.4) {
                  bootstrapClass = "progress-bar progress-bar-success";
                } else if (userAverage < 6.4 && userAverage >= 5.0) {
                  bootstrapClass = "progress-bar progress-bar-warning";
                } else {
                  bootstrapClass = "progress-bar progress-bar-danger";
                }
                return bootstrapClass;
              };
              const currentClassColor = colorClass(userAverage);

              return (
                <EngineerCard
                  key={user.userId}
                  userName={user.firstName}
                  imgSrc={user.imgUrl}
                  userRole={user.title}
                  engineerAverage={userAverage}
                  colorClassValue={currentClassColor}
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
