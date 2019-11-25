import React from 'react';

const GetScore = props => {
  return (
    <div className='counter'>
      <span className='counter-score'>{props.score}</span>
    </div>
  );
};

export default GetScore;
