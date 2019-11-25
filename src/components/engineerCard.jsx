import React from 'react';
import { Link } from "react-router-dom";
//import {users, weeks} from '../assets/DB/database';

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
          <Link to={`/developer-dashboard/${props.engineerId}`}>
            <button className="w3-button w3-block w3-dark-grey">
              View Details
            </button>
          </Link>
        </div>
      </div>
    );
  };

  export default EngineerCard;