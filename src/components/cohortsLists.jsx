import React from 'react';
import { users} from "../assets/DB/database";

const CohortsList = (props) => {
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
              <li key={index} onClick={props.cohortHandler}>
                Cohort-<span>{singleCohort}</span>
              </li>
            );
          })}
      </ul>
    );
  };

  export default CohortsList;