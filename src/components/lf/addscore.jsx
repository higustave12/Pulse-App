import React from 'react';
import '../../css/lf.css';
import { categories } from '../../assets/DB/database';
import Counter from './Counter';
import Comments from './Comments';
import BtnHolder from './BtnHolder';
import Info from './DevInformation';

const Score = props => {
  return (
    <div className='week'>
      <span className='score-type'>{props.name}</span>
      <Counter />
      <Comments />
    </div>
  );
};

class LFWeekly extends React.Component {
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
        <BtnHolder />
      </div>
    );
  }
}

export default LFWeekly;
