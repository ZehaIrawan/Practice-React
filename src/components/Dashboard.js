import React from 'react';
import RocketClass from './RocketClass';

const Dashboard = () => {
  const rocketList = ['Falcon 9', 'Falcon Heavy', 'Falcon 1'];
  return (
    <div>
      <h1>Dashboard</h1>
      {rocketList.map(rocket => (
        <h2>{rocket}</h2>
      ))}
      <div>---</div>
      <div>---</div>
      <div>---</div>
      <RocketClass rocketName={'Falcon 9 "Full Thrust"'} />
    </div>
  );
};

export default Dashboard;
