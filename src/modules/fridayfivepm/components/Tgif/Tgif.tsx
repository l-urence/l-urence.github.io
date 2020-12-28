import React, {useEffect, useState, FC} from 'react';
import styled from 'styled-components';

import {Countdown as CountdownModel} from '../../models/Countdown';
import {Pad} from '../Pad';

const Wrapper = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  font-size: 25px;
  height: 100%;
  justify-content: center;

  & h2 {
    text-align: center;
  }
`;

const Countdown = styled.div`
  border: 1px solid #999;
  box-shadow: 3px 2px 8px #ddd;
  border-radius: 5px;
  padding: 10px;

  & > div {
    display: flex;
    justify-content: center;
  }

  & span:last-child {
    font-size: 20px;
    color: #999;
    padding-right: 5px;
  }

  @media (max-width: 350px) {
    & > div {
      flex-direction: column;
    }
  }
`;

export const Tgif: FC = () => {
  const [
    {
      time: {hours, minutes, seconds},
    },
    setCountdown,
  ] = useState<CountdownModel>(CountdownModel.tgif());

  useEffect(() => {
    const updateTimes = () => setCountdown(CountdownModel.tgif());
    const interval = setInterval(updateTimes, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Wrapper>
      <h2>Time till Friday 5pm:</h2>
      <Countdown>
        <div>
          <div>
            <span title="Hours">
              <Pad input={hours} />
            </span>
            <span>Hours</span>
          </div>
          <div>
            <span title="Minutes">
              <Pad input={minutes} />
            </span>
            <span>Minutes</span>
          </div>
          <div>
            <span title="Seconds">
              <Pad input={seconds} />
            </span>
            <span>Seconds</span>
          </div>
        </div>
      </Countdown>
    </Wrapper>
  );
};
