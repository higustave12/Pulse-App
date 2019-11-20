import React, { Component, Fragment } from "react";
import "../css/LFADashboard.css";
import { Link } from "react-router-dom";
import { users, weeks } from "../assets/DB/database";

const EngineerCard = props => {
  return (
    <>
      <div className="column">
        <div className="w3-card">
          <header className="w3-container w3-light-grey">
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
            <span>{props.engineerAverage}</span>
          </span>
          <div className="progress">
            <div
              className={props.colorClassValue}
              role="progressbar"
              aria-valuenow={props.engineerAverage*10}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: `${props.engineerAverage*10}%`, backgroundColor:'#3FB021' }}
            >
              {props.engineerAverage*10}%
            </div>
          </div>
          <hr/>
          <Link to="/developer-dashboard">
            <button className="w3-button w3-block w3-dark-grey">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
class EngineersList extends Component {
  render() {
    return (
      <Fragment>
        <div className="row">
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
            let bootstrapClass='';
            const colorClass=(userAverage)=>{
              if (userAverage>=6.4) {
                bootstrapClass= "progress-bar progress-bar-success";
              }else if((userAverage<6.4) && (userAverage>=5.0)){
                bootstrapClass= "progress-bar progress-bar-warning";
              }else{
                bootstrapClass= "progress-bar progress-bar-danger";
              }
              return bootstrapClass;
            }
            const currentClassColor= colorClass(userAverage);

            return (
              <EngineerCard
                key={user.userId}
                userName={user.firstName}
                imgSrc={user.imgUrl}
                userRole={user.title}
                engineerAverage={userAverage}
                colorClassValue= {currentClassColor}
              />
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default EngineersList;
