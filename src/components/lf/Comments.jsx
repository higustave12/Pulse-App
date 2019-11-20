import React from 'react';

const Comments = () => {
  return (
    <div className='comments'>
      <textarea
        className='comment-text'
        placeholder='Write Comment here!'
      ></textarea>
    </div>
  );
};

export default Comments;
