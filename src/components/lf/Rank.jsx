import React from 'react';
import Counter from './Counter';
import Comments from './Comments';

const Score = props => {
  return (
    <div className='week'>
      <span className='score-type'>{props.name}</span>
      <Counter />
      <Comments />
    </div>
  );
};

export default Score;
