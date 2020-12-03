import React, {useEffect, useState, FC} from 'react';
import styled from 'styled-components';

import {Countdown as CountdownModel} from '../models/Countdown';

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

  & label {
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

function pad(nr: number): string {
  const str = '0' + nr;
  return str.slice(str.length - 2, str.length);
}

export const FridayFivePm: FC = () => {
  const [countdown, setCountdown] = useState<CountdownModel>(new CountdownModel().tick());

  useEffect(() => {
    const updateTimes = () => setCountdown(countdown.tick());
    const interval = setInterval(updateTimes, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [countdown]);

  const {hours, minutes, seconds} = countdown;
  return (
    <Wrapper>
      <h2>Time till Friday 5pm:</h2>
      <Countdown>
        <div>
          <div>
            <span>{pad(hours)}</span>
            <label>Hours</label>
          </div>
          <div>
            <span>{pad(minutes)}</span>
            <label>Minutes</label>
          </div>
          <div>
            <span>{pad(seconds)}</span>
            <label>Seconds</label>
          </div>
        </div>
      </Countdown>
    </Wrapper>
  );
};
