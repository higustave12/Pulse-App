import React from 'react';
import { users, weeks } from '../../assets/DB/database';
import Info from '../lf/DevInformation';
import RankingBase from './RankingBase';

const weekId = 1;
const userDetails = users.find(
  e => e.email === localStorage.getItem('userEmail')
);
const getWeeklyData = weeks.filter(
  w => w.week === weekId && w.userId === userDetails.userId
);
const attributes = Object.keys(getWeeklyData[0]);
const values = Object.values(getWeeklyData[0]);
//splice the first three non needed items... (user id, and week details)

attributes.splice(0, 3);
values.splice(0, 3);

class EngineerWeekly extends React.Component {
  constructor() {
    super();
    this.state = { currentUserIndex: 0 };
  }
  render() {
    return (
      <div>
        <Info
          userIndex={userDetails}
          weekId={getWeeklyData[0].week}
          weekName={getWeeklyData[0].weekName}
        />
        <div className='scoreboard'>
          {attributes.map((attribute, index) => (
            <RankingBase key={index} attribute={attribute} value={values[index]} />
          ))}
        </div>
      </div>
    );
  }
}

export default EngineerWeekly;
