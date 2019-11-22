import React from 'react';
import Devprofile from './DevProfile';

const Weekdetails = () => {
  return (
    <div className='week-details'>
      <div className='week-texts'>
        <h1>Week 6 : SIMULATION</h1>
        <span>Your Overall Pulse Average is: 8.6</span>
      </div>
    </div>
  );
};
const Info = props => {
  return (
    <div className='mentee-info'>
      <Devprofile
        firstName={props.userIndex.firstName}
        lastName={props.userIndex.lastName}
        position={props.userIndex.title}
      />
      <Weekdetails />
    </div>
  );
};

export default Info;
