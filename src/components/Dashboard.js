import React from 'react';
import Box from './Box';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Box rocketName={'Falcon 9 "Full Thrust"'}/>
      <Box rocketName={'Falcon Heavy'}/>
      <Box rocketName={'Falcon 1'}/>
    </div>
  );
};

export default Dashboard;
