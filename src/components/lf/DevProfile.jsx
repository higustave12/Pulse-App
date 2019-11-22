import React from 'react';

const Devprofile = props => {
  return (
    <div className='dev-profile'>
      <div className='dev-picture'>
        <img src={props.userData.imgUrl} alt='Avatar'></img>
      </div>
      <div className='dev-details'>
        <span className='dev-names'>
          {props.userData.firstName} {props.userData.lastName}
        </span>{' '}
        <br></br>
        <span className='dev-position'>{props.userData.title}</span>
      </div>
    </div>
  );
};

export default Devprofile;
