import React from 'react';
import image from '../../css/victor.jpg';

const Devprofile = props => {
  return (
    <div className='dev-profile'>
      <div className='dev-picture'>
        <img src={image} alt='Avatar'></img>
      </div>
      <div className='dev-details'>
        <span className='dev-names'>
          {props.firstName} {props.lastName}
        </span>{' '}
        <br></br>
        <span className='dev-position'>{props.position}</span>
      </div>
    </div>
  );
};

export default Devprofile;
