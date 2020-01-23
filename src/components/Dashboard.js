import React from 'react';
import Rocket from './Rocket';
import RocketClass from './RocketClass';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Rocket rocketName={'Falcon 9 "Full Thrust"'} />
      <Rocket rocketName={'Falcon Heavy'} />
      <Rocket rocketName={'Falcon 1'} />
      <div>---</div>
      <div>---</div>
      <div>---</div>
      <RocketClass rocketName={'Falcon 9 "Full Thrust"'} />
    </div>
  );
};

export default Dashboard;
