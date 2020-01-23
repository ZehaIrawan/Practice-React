import React, { useState } from 'react';

const Box = ({ rocketName }) => {
  const [launch, setLaunch] = useState(0);

  // const handleClick = () => setLaunch(launch + 1);

  return (
    <div>
      <h2>{rocketName}</h2>
      <button onClick={() => setLaunch(launch + 1)}>Launch!</button>
      Launched {launch} times!
    </div>
  );
};

export default Box;
