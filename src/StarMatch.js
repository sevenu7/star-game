import React, { useState } from 'react';
import { utils } from './Utils';
import { Stars } from './Stars';
import { Numbers } from './Numbers';

const StarMatch = () => {
  const [stars, setStars] = useState(utils.random(1, 9))
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
        </div>
      <div className="body">
        <div className="left">
          <Stars count={stars} />
        </div>
        <div className="right">
            <Numbers />
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

export default StarMatch