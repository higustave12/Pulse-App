import React, { Component } from 'react';
import '../../css/lf.css';
import { categories } from '../../assets/DB/database';
import BtnHolder from './BtnHolder';
import Info from './DevInformation';
import { users } from '../../assets/DB/database';
import Score from './Rank';

class LFWeekly extends Component {
  constructor() {
    super();
    this.state = { currentUserIndex: 0 };
  }
  carouselUser = indexTo => {
    const lastIndex = users.length - 1;
    const { currentUserIndex } = this.state;
    if (indexTo === -1) {
      const shouldResetIndex = currentUserIndex === 0;
      const index = shouldResetIndex ? lastIndex : currentUserIndex + indexTo;
      this.setState({
        currentUserIndex: index
      });
    } else {
      const shouldResetIndex = currentUserIndex === lastIndex;
      const index = shouldResetIndex ? 0 : currentUserIndex + indexTo;
      this.setState({
        currentUserIndex: index
      });
    }
  };
  render() {
    return (
      <div>
        <Info userIndex={users[this.state.currentUserIndex]} />
        <div className='scoreboard'>
          {/* Categories List */}
          {categories.map(category => (
            <Score name={category.name} key={category.id.toString()} />
          ))}
        </div>
        <BtnHolder carouselUser={this.carouselUser} />
      </div>
    );
  }
}

export default LFWeekly;
