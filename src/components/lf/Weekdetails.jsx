import React from 'react';
const WeekDetails = (props) => {
  return (
    <div className='week-details'>
      <div className='week-texts'>
        <h1>Week {props.weekId} : {props.weekName}</h1>
        <span>All weeks Average is: 8.6</span>
      </div>
    </div>
  );
};
export default WeekDetails;
