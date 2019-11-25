import React from 'react';
import Devprofile from './DevProfile';
import WeekDetails from './Weekdetails';

const Info = props => {
  console.log(props)
  return (
    <div className='mentee-info'>
      <Devprofile
        userData={props.userIndex}
      />
      <WeekDetails weekId = {props.weekId} weekName = {props.weekName}/>
    </div>
  );
};

export default Info;
