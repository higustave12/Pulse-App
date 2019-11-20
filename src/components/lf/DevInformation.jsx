import React from 'react';
import { users } from '../../assets/DB/database';
import Devprofile from './DevProfile';

const Weekdetails = () => {
  return (
    <div className='week-details'>
      <div className='week-texts'>
        <h1>Week 6 : SIMULATION</h1>
        <span>Your Overall Pulse Average is: 8.6</span>
      </div>
    </div>
  );
};
class Info extends React.Component {
  constructor() {
    super();
    this.state = { currentUserIndex: 0 };
  }

  previousUser = () => {
    const lastIndex = users.length - 1;
    const { currentUserIndex } = this.state;
    const shouldResetIndex = currentUserIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentUserIndex - 1;

    this.setState({
      currentUserIndex: index
    });
  };

  nextUser = () => {
    const lastIndex = users.length - 1;
    const { currentUserIndex } = this.state;
    const shouldResetIndex = currentUserIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentUserIndex + 1;

    this.setState({
      currentUserIndex: index
    });
    console.log(currentUserIndex);
  };

  render() {
    return (
      <div className='mentee-info'>
        <Devprofile
          firstName={users[this.state.currentUserIndex].firstName}
          lastName={users[this.state.currentUserIndex].lastName}
          position={users[this.state.currentUserIndex].title}
        />
        <Weekdetails />
        <button onClick={this.nextUser}> Next User </button>
      </div>
    );
  }
}

export default Info;
