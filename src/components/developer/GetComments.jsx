import React from 'react';

const GetComments = props => {
  return (
    <div className='comments'>
      <textarea className='comment-text' readOnly value={props.comment} />
    </div>
  );
};

export default GetComments;
