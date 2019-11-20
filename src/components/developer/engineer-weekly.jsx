import React from 'react';
import '../../css/lf.css';
import { categories } from '../../assets/DB/database';
import Info from '../lf/DevInformation';

const Score = props => {
  return (
    <div className='week'>
      <span className='score-type'>{props.name}</span>
      <Scored />
      <YourComments />
    </div>
  );
};

const YourComments = () => {
    return (
      <div className='comments'>
        <textarea
          className='comment-text'
          readOnly value={'value'}
        />
      </div>
      
    );
  };

class Scored extends React.Component {
    render() {
      return (
        <div className='counter'>
          <span className='counter-score'>2</span>
        </div>
      );
    }
  }

class EngineerWeekly extends React.Component {
  render() {
    return (
      <div>
        <Info />
        <div className='scoreboard'>
          {/* Categories List */}
          {categories.map(category => (
            <Score name={category.name} key={category.id.toString()} />
          ))}
        </div>
      </div>
    );
  }
}

export default EngineerWeekly;
