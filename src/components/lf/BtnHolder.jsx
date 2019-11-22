import React from 'react';
import Button from './button';

const BtnHolder = props => {
  return (
    <div className='btnHolder'>
      <Button buttonText={'Submit'} className={'btn green submit'} key={3} />
      <Button
        buttonText={'Next'}
        className={'btn gold'}
        key={1}
        onClick={() => props.carouselUser(1)}
      />
      <Button
        buttonText={'Previous'}
        className={'btn yellowgreen'}
        key={2}
        onClick={() => props.carouselUser(-1)}
      />
    </div>
  );
};

export default BtnHolder;
