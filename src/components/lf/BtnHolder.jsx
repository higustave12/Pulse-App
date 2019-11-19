import React from 'react';
import Button from './button';
import { buttons } from '../../assets/DB/database';

const BtnHolder = () => {
  return (
    <div className='btnHolder'>
      {buttons.map(button => (
        <Button
          buttonText={button.buttonText}
          className={button.className}
          key={button.id.toString()}
        />
      ))}
    </div>
  );
};

export default BtnHolder;
