import React from 'react';
import GetComments from './GetComments';
import GetScore from './GetScore';

const RankingBase = props => {
  return (
    <div className='week'>
      <span className='score-type'>{props.attribute}</span>
      <GetScore score={props.value.score} />
      <GetComments comment={props.value.comment} />
    </div>
  );
};

export default RankingBase;
